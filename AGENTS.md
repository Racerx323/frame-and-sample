# Frame and Sample

## Repository Working Rules

This repository is documentation-first and organized by two boundaries:

1. Ecosystem-specific implementation lives under ecosystems/.
2. Hardware-agnostic setup guidance lives under hardware/.

## Documentation Placement

- Put platform workflow guides, presets, and scripts in the matching ecosystems/-name-/ path.
- Put device setup and signal-chain references in hardware/.
- Put shared concepts and standards in docs/.
- Put reusable authoring patterns in templates/.

## Authoring Standards

- New guides should follow templates/guide-template.md.
- New script docs should follow templates/script-template.md.
- Explain why frame rate and sample rate values were selected.
- Avoid duplicating hardware setup text inside ecosystem guides; link to hardware docs instead.

## Scope for v1

- Ecosystems: obs-studio, ndi, wirecast
- Hardware: audio-interfaces, capture-cards, cameras

## Harness Score

- When changing `.github/workflows/harness-score.yml` or its publication tests,
  run `node --test tests/harness-score-workflow.test.cjs`.
- Keep scoring repository-only (`gate: maturity`); leave user and system harness
  scopes disabled.
- Preserve the pilot's `min-level: 0` until a higher threshold is explicitly
  approved. Incomplete or malformed scans must still fail.
- Publish badges only after successful, trusted `main` scans. Keep scan access
  read-only and badge publication write access confined to its separate job.
- Keep version pins in the workflow and installation details in
  `homelab-docs/docs/development-tool-stack.md`; avoid duplicating them here.


## CodeRabbit reviews

CodeRabbit requires external network access. Run all `coderabbit review` commands with network escalation (`sandbox_permissions: "require_escalated"`). Request the reusable approval prefix `["coderabbit", "review"]`.

Do not wait for a sandboxed review to time out. If it stalls while connecting, rerun it immediately with network escalation.

## vexp - Context-Aware AI Coding <!-- vexp v3.3.0 -->

### Context strategy: call run_pipeline ONCE at task start
If the task already names the files/symbols to touch, SKIP vexp. Otherwise one
`run_pipeline({ "task": "..." })` returns ranked pivot files with line ranges and
blast radius. Do NOT open files one by one to find your way around - every extra
tool call costs a turn. Call it again ONLY when the task moves to a new area.
`get_skeleton` for files to understand, not edit. `verify_done` before calling a
multi-file task complete, then RUN the tests it names.

### Query shape (do this)
Anchor the task on real identifiers (ClassName, functionName) or file paths:
`run_pipeline({ "task": "fix JWT expiry in AuthService.validateToken" })`

vexp runs entirely on this machine, index in `.vexp/`;
`run_pipeline` transmits nothing to any external service.
On `status: "degraded"` or 0 pivots the index is still building - use your own tools.
For literal string sweeps use your native search - do NOT route text sweeps through vexp.
Repo SOURCE only: logs, dist/, node_modules/ and files outside the repo are NOT indexed.
<!-- /vexp -->
