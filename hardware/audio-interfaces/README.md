# Audio Interfaces

Use this index to set up an audio interface, trace what each listener hears, and check the mix before streaming.

## RØDECaster Video S on Windows 11

The [device setup guide](rode-caster-video-s-windows11-discord-ndi.md) uses one USB 1 cable for desktop playback and Discord voice. Windows sends games to Stereo. Discord uses Chat in both directions. Teammates hear the AT2035 microphone, and you hear their voices alongside the game in your headphones.

| What you want to do | Where to start |
| --- | --- |
| Set the default device and default communications device for playback and recording | [Windows audio devices](rode-caster-video-s-windows11-discord-ndi.md#2-windows-11-audio-devices) |
| Choose the full console mix or just your mic for an OBS recording or stream | [Recording or streaming the console mix](rode-caster-video-s-windows11-discord-ndi.md#recording-or-streaming-the-console-mix) |
| Select Discord’s input and output and build the mic-only Chat mix | [Discord voice calls](rode-caster-video-s-windows11-discord-ndi.md#discord-voice-calls) and [RØDECaster routing](rode-caster-video-s-windows11-discord-ndi.md#3-rcvs-routing) |
| Reduce keyboard pickup without cutting off quiet speech | [Mic placement](rode-caster-video-s-windows11-discord-ndi.md#6-mic-placement), [Combo 1 processing](rode-caster-video-s-windows11-discord-ndi.md#4-combo-1-processing-baseline), and [Discord settings](rode-caster-video-s-windows11-discord-ndi.md#5-discord-settings) |
| Confirm teammates hear your voice without desktop audio or an echo | [Check the complete route](rode-caster-video-s-windows11-discord-ndi.md#check-the-complete-route) |
| Share a Windows game and its sound directly | [Stream a Windows game with Discord Go Live](rode-caster-video-s-windows11-discord-ndi.md#stream-a-windows-game-with-discord-go-live) |
| Share the console’s camera cuts, overlays, and game or clip audio | [Configure the switched production mix](rode-caster-video-s-windows11-discord-ndi.md#show-the-rødecasters-switched-production-in-discord), then [share NDI Studio Monitor in Discord](rode-caster-video-s-windows11-discord-ndi.md#share-ndi-studio-monitor-in-discord) |
| Bring the Windows desktop into the switcher as a video source | [Send a PC screen with Screen Capture HX](rode-caster-video-s-windows11-discord-ndi.md#send-a-pc-screen-to-the-rødecaster-with-screen-capture-hx) |

For the Windows NDI Tools setup, see [NDI basics on Windows 11](../../ecosystems/ndi/ndi-tools-windows11-basics.md).

## What To Capture

- Driver mode and firmware version
- Input/output routing map
- Sample rate policy (typically 48000 Hz for video workflows)
- Buffer size and latency notes

## Checklist

1. Lock interface and host to the same sample rate.
2. Disable conflicting system-level audio enhancements.
3. Document monitoring path and potential drift points.
