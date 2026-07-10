# RODECaster Video S Audio Configuration on Windows 11

## Applicable Hardware

- RODECaster Video S (RCVS) as primary audio interface, NDI video interface, and USB hub
- Audio-Technica AT2035 condenser microphone (XLR)
- Headphones for monitoring (3.5 mm or 1/4 inch adapter)
- Windows 11 PC for Discord, NDI, and application audio
- NDI Tools for NDI video capture and streaming
- XLR and USB cabling
- Optional: mic stand, pop filter, desk isolation pad
- Optional: mechanical keyboard for noise rejection testing
- Optional: additional NDI sources for hybrid workflows

## 1. Hardware Connections

- RODECaster Video S to PC
  - USB 1 connected (primary audio interface)
  - USB 2 connected (reserved for future flexibility)
- Voice microphone
  - Audio-Technica AT2035 to Combo 1 (XLR)
  - 48V phantom power enabled on Combo 1
- Monitoring
  - Headphones connected to Headphone Out 1

## 2. Windows 11 Audio Devices

Use USB 1 as primary:

- Default playback: Speakers (RODECaster Video S Stereo)
- Default microphone: Microphone (RODECaster Video S Stereo)

Park USB 2 devices:

- Playback: Headphones (2- RODECaster Video S Secondary)
- Recording: Desktop Microphone (2- RODECaster Video S Secondary)

Recommended step:

- Disable the two USB 2 devices in Control Panel Sound to prevent accidental app selection.

## 3. RCVS Routing

Use USB 1 Chat with a custom submix (not mix-minus).

USB 1 Chat send to PC or Discord input:

- Include Combo 1 (AT2035)
- Exclude USB 1 Stereo (PC audio)
- Exclude USB 1 Chat

## 4. Combo 1 Processing Baseline

- High pass filter: enabled at 80 to 100 Hz
- Gate or expander: gentle
  - Set threshold so typing does not open the gate, but speech does
  - Release around 200 to 300 ms to reduce chattering
- Compressor: light, ratio around 2:1 to 3:1
  - Target 3 to 6 dB reduction on louder speech

Key rule:

- Do not overdrive gain to compensate for distance. Move the mic closer instead.

## 5. Discord Settings

Discord > User Settings > Voice and Video:

- Input device: Microphone (RODECaster Video S Chat)
- Output device: Speakers (RODECaster Video S Chat)
- Input mode: Voice Activity
- Disable automatically determine input sensitivity
- Disable automatic gain control

Sensitivity baseline:

- Start near -50 dB (typical range -55 to -45 dB)
- If keyboard triggers input, move toward -55 dB
- If first syllables are cut, move toward -45 dB

Processing:

- Noise suppression: Krisp on
- Echo cancellation: off initially (enable only if echo is reported)

Leveling guidance:

- Keep Discord input at 100 percent initially and set gain at Combo 1.

Avoid for Discord voice input:

- Microphone (RODECaster Video S Stereo), which may carry a wider mix including PC audio.

## 6. Mic Placement

Best-practice baseline:

- Position mic 6 to 10 inches away (8 inches is a strong starting point)
- Place mic to the side of the keyboard
- Aim at the corner of the mouth, slightly off-axis
- Point rear of mic toward keyboard for cardioid rejection
- Isolate stand with a dense pad to reduce desk vibration

## 7. NDI Settings Baseline

RODECaster Video S expectations:

- Optimized for NDI HX, not full high-bandwidth NDI SpeedHQ
- Use NDI HX at 1080p in YUV color space
- Input support is 1080p, not 4K
- Supports 4 NDI network inputs

Network baseline:

- Use wired gigabit Ethernet for stability

If using NDI Screen Capture HX on the PC:

- Sender app: NDI Screen Capture HX
- Resolution: 1920x1080
- Frame rate: 60 fps or 59.94 fps to match timing requirements
- Codec: HEVC/H.265 when available, otherwise H.264
- Bandwidth preset: High, then step down only if needed
- Audio source:
  - If audio already arrives via USB on RCVS, disable NDI audio to avoid doubled audio
  - If NDI must carry audio, select the intended playback device

Rule of thumb on bandwidth:

- For 1080p60, RODE guidance indicates typical HX bandwidth around:
  - H.264 roughly 16 Mbps
  - H.265 roughly 11 Mbps
  - Actual throughput varies by HX mode and scene complexity

## References

- [Does the RODECaster Video Support Full NDI?](https://help.rode.com/hc/en-us/articles/13834034375951-Does-the-R%C3%98DECaster-Video-Support-Full-NDI)
- [Does the RODECaster Video have 4K support?](https://help.rode.com/hc/en-us/articles/10802698922639-Does-the-R%C3%98DECaster-Video-have-4k-support)
- [Getting started with NDI with the RODECaster Video](https://help.rode.com/hc/en-us/articles/13236299094927-Getting-started-with-NDI-with-the-R%C3%98DECaster-Video)
- [NDI Screen Capture HX](https://docs.ndi.video/all/using-ndi/ndi-tools/ndi-tools-for-windows/screen-capture-hx)

## Related Guides

- Audio interfaces index: [README.md](README.md)
- NDI basics on Windows 11: [../../ecosystems/ndi/ndi-tools-windows11-basics.md](../../ecosystems/ndi/ndi-tools-windows11-basics.md)
- NDI ecosystem index: [../../ecosystems/ndi/README.md](../../ecosystems/ndi/README.md)
- Network preparation: [../../docs/network-prep.md](../../docs/network-prep.md)
- AV sync basics: [../../docs/av-sync-basics.md](../../docs/av-sync-basics.md)
