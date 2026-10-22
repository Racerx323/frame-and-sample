const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const workflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/harness-score.yml'), 'utf8');
const script = workflow.match(/          script: \|\n([\s\S]+)$/)[1].replace(/^ {12}/gm, '');

async function publish({ existing = true, unchanged = false, heads = ['source', 'source'],
  status = 'complete', gate = 'maturity', badge = '<svg></svg>', apiError, missingBadge = false } = {}) {
  const calls = [];
  const git = {};
  for (const name of ['getRef', 'getCommit', 'createTree', 'createCommit', 'createRef', 'updateRef']) {
    git[name] = async (args) => {
      calls.push({ name, args });
      if (name === 'getRef') {
        if (args.ref === 'heads/main') return { data: { object: { sha: heads.shift() } } };
        if (apiError || !existing) throw Object.assign(new Error('API error'), { status: apiError || 404 });
        return { data: { object: { sha: 'previous' } } };
      }
      if (name === 'getCommit') return { data: { sha: 'previous', tree: { sha: 'old-tree' } } };
      if (name === 'createTree') return { data: { sha: unchanged ? 'old-tree' : 'new-tree' } };
      return { data: { sha: 'new-commit' } };
    };
  }
  const sandbox = {
    context: { repo: { owner: 'Racerx323', repo: 'frame-and-sample' }, sha: 'source' },
    github: { rest: { git } },
    core: { notice() {} },
    require(name) {
      assert.equal(name, 'node:fs');
      return { readFileSync(file) {
        if (file.endsWith('.json')) return JSON.stringify({ gate, verdicts: { maturity: { status } } });
        if (missingBadge) throw new Error('ENOENT');
        return badge;
      } };
    },
  };
  await vm.runInNewContext(`(async () => {${script}\n})()`, sandbox);
  return calls;
}

test('publication is restricted to successful main scans in the intended repository', () => {
  const publisher = workflow.split('\n  publish:\n')[1];
  assert.match(publisher, /needs: scan/);
  assert.match(publisher, /github\.repository == 'Racerx323\/frame-and-sample'/);
  assert.match(publisher, /github\.ref == 'refs\/heads\/main'/);
  assert.match(publisher, /github\.event_name == 'push' \|\| github\.event_name == 'workflow_dispatch'/);
  assert.doesNotMatch(publisher, /always\(\)|pull_request_target/);
  assert.match(publisher, /group: harness-score-badge\n      cancel-in-progress: false/);
  assert.match(workflow.split('\n  publish:\n')[0], /permissions:\n  contents: read/);
  assert.doesNotMatch(workflow.split('\n  publish:\n')[0], /contents: write/);
  assert.match(publisher, /permissions:\n      contents: write/);
  assert.doesNotMatch(publisher, /actions\/checkout@|run-id:|repository:/);
});

test('first publication creates an isolated branch with no source commit parent', async () => {
  const calls = await publish({ existing: false });
  const tree = calls.find(c => c.name === 'createTree').args;
  assert.equal(tree.base_tree, undefined);
  assert.equal(tree.tree.length, 1);
  assert.equal(tree.tree[0].path, 'harness-badge.svg');
  assert.equal(calls.find(c => c.name === 'createCommit').args.parents.length, 0);
  assert.equal(calls.at(-1).name, 'createRef');
  assert.equal(calls.at(-1).args.ref, 'refs/heads/badges');
});

test('subsequent publications preserve the branch tree and never force updates', async () => {
  const calls = await publish();
  assert.equal(calls.find(c => c.name === 'createTree').args.base_tree, 'old-tree');
  assert.equal(calls.find(c => c.name === 'createCommit').args.parents[0], 'previous');
  assert.equal(calls.at(-1).name, 'updateRef');
  assert.equal(calls.at(-1).args.force, false);
});

test('unchanged badges do not create commits', async () => {
  const calls = await publish({ unchanged: true });
  assert.equal(calls.at(-1).name, 'createTree');
});

test('superseded main runs do not prepare or publish badges', async () => {
  const calls = await publish({ heads: ['newer'] });
  assert.equal(calls.length, 1);
});

test('main advancing during preparation prevents publication', async () => {
  const calls = await publish({ heads: ['source', 'newer'] });
  assert.equal(calls.at(-1).name, 'getRef');
  assert.equal(calls.some(c => c.name === 'createCommit'), false);
});

test('incomplete scans and effective gates cannot publish', async () => {
  await assert.rejects(publish({ status: 'incomplete' }), /complete repository maturity/);
  await assert.rejects(publish({ gate: 'effective' }), /complete repository maturity/);
});

test('missing and malformed badges fail publication', async () => {
  await assert.rejects(publish({ missingBadge: true }), /ENOENT/);
  await assert.rejects(publish({ badge: 'not an SVG' }), /SVG root/);
});

test('API failures cannot be mistaken for a missing branch', async () => {
  await assert.rejects(publish({ apiError: 403 }), /API error/);
  await assert.rejects(publish({ apiError: 500 }), /API error/);
});
