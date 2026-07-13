# frame-and-sample

A modular knowledge base for live production and capture workflows across video frames and audio samples.

## Purpose

This repository separates platform-specific implementation details from hardware setup guidance so users can find the exact stack they need quickly.

## Navigate

- Ecosystems: [ecosystems/README.md](ecosystems/README.md)
- Hardware: [hardware/README.md](hardware/README.md)
- Cross-cutting docs: [docs/README.md](docs/README.md)
- Reusable templates: [templates/README.md](templates/README.md)
- Contributing: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- Security policy: [.github/SECURITY.md](.github/SECURITY.md)
- Community and governance: [.github/GOVERNANCE.md](.github/GOVERNANCE.md)
- Issue templates: [.github/ISSUE_TEMPLATE/](.github/ISSUE_TEMPLATE/)
- Open an issue: [GitHub issue chooser](https://github.com/Racerx323/frame-and-sample/issues/new/choose)

## New Guides

- NDI quick start for Windows 11: [ecosystems/ndi/ndi-tools-windows11-basics.md](ecosystems/ndi/ndi-tools-windows11-basics.md)
- RODECaster Video S audio and Discord setup: [hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md](hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md)

## Recommended Workflow Paths

- NDI-first path: [ecosystems/ndi/ndi-tools-windows11-basics.md](ecosystems/ndi/ndi-tools-windows11-basics.md) -> [hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md](hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md) -> [docs/av-sync-basics.md](docs/av-sync-basics.md)
- Audio-first path: [hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md](hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md) -> [ecosystems/ndi/ndi-tools-windows11-basics.md](ecosystems/ndi/ndi-tools-windows11-basics.md) -> [docs/network-prep.md](docs/network-prep.md)

## Initial Scope

- Ecosystems: OBS Studio, NDI, Wirecast
- Hardware: Audio interfaces, capture cards, cameras
- Focus: Repeatable setup, sync reliability, and operational troubleshooting

## Guiding Principle

Keep ecosystem assets isolated and keep hardware guidance reusable across ecosystems.

## License

This project is licensed under the GNU General Public License v3.0. See [LICENSE.md](LICENSE.md) for details.
