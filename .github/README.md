# frame-and-sample

[![Harness Score](https://raw.githubusercontent.com/Racerx323/frame-and-sample/badges/harness-badge.svg)](https://github.com/Racerx323/frame-and-sample/actions/workflows/harness-score.yml)

Guides for capturing, routing, and synchronizing live audio and video. The Windows 11 walkthroughs cover NDI Tools and the RØDECaster Video S for Discord voice and streaming.

## Windows 11 workflows

| Task | Guide |
| --- | --- |
| Send a Windows desktop over NDI or use an NDI source as a webcam | [Install and configure NDI Tools](../ecosystems/ndi/ndi-tools-windows11-basics.md) |
| Set up a mic-only Discord input and hear teammates and game audio in headphones | [RØDECaster Video S setup and routing](../hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md) |
| Stream a single game window with its audio | [Share a Windows game with Discord Go Live](../hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md#stream-a-windows-game-with-discord-go-live) |
| Stream the RØDECaster’s camera cuts, overlays, and game or clip audio | [Configure the switched production mix](../hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md#show-the-rødecasters-switched-production-in-discord), then [share NDI Studio Monitor in Discord](../hardware/audio-interfaces/rode-caster-video-s-windows11-discord-ndi.md#share-ndi-studio-monitor-in-discord) |

## Browse the repository

- [Ecosystems](../ecosystems/README.md) covers NDI, with workflow outlines for [OBS Studio](../ecosystems/obs-studio/README.md) and [Wirecast](../ecosystems/wirecast/README.md).
- [Hardware](../hardware/README.md) includes the [audio interface guide index](../hardware/audio-interfaces/README.md) and setup checklists for [capture cards](../hardware/capture-cards/README.md) and [cameras](../hardware/cameras/README.md).
- [Shared documentation](../docs/README.md) covers [network preparation](../docs/network-prep.md), [audio/video sync and drift](../docs/av-sync-basics.md), and [frame and sample terminology](../docs/glossary.md).

## Contributing

Use the [guide and script templates](../templates/README.md) for new material. Keep platform-specific instructions under `ecosystems/`, device setup under `hardware/`, and shared concepts under `docs/`. See the [contributing guide](CONTRIBUTING.md) for the submission process.

[Open an issue](https://github.com/Racerx323/frame-and-sample/issues/new/choose) for a bug, documentation correction, feature request, or question. For security reports, follow the [security policy](SECURITY.md). Community expectations are in the [code of conduct](CODE_OF_CONDUCT.md) and [governance guide](GOVERNANCE.md).

## License

This project is licensed under the GNU General Public License v3.0. See [LICENSE.md](../LICENSE.md) for details.
