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
