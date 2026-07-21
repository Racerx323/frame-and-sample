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


## CodeRabbit reviews

CodeRabbit requires external network access. Run all `coderabbit review` commands with network escalation (`sandbox_permissions: "require_escalated"`). Request the reusable approval prefix `["coderabbit", "review"]`.

Do not wait for a sandboxed review to time out. If it stalls while connecting, rerun it immediately with network escalation.

## vexp <!-- vexp v2.1.7 -->

**MANDATORY: use `run_pipeline` - do NOT grep or glob the codebase.**
vexp returns pre-indexed, graph-ranked context in a single call.

### Workflow
1. `run_pipeline` with your task description - ALWAYS FIRST (replaces all other tools)
2. Make targeted changes based on the context returned
3. `run_pipeline` again only if you need more context

### Available MCP tools
- `run_pipeline` - **PRIMARY TOOL**. Runs capsule + impact + memory in 1 call.
  Auto-detects intent. Includes file content. Example: `run_pipeline({ "task": "fix auth bug" })`
- `get_skeleton` - compact file structure
- `index_status` - indexing status
- `expand_vexp_ref` - expand V-REF placeholders in v2 output

### Agentic search
- Do NOT use built-in file search, grep, or codebase indexing - always call `run_pipeline` first
- If you spawn sub-agents or background tasks, pass them the context from `run_pipeline`
  rather than letting them search the codebase independently

### Smart Features
Intent auto-detection, hybrid ranking, session memory, auto-expanding budget.

### Multi-Repo
`run_pipeline` auto-queries all indexed repos. Use `repos: ["alias"]` to scope. Run `index_status` to see aliases.
<!-- /vexp -->
