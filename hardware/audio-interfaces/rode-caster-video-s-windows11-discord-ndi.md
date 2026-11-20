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
  - Connect USB 1 to the PC. This cable carries both Stereo and Chat in both directions. USB 2 is optional.
- Voice microphone
  - Audio-Technica AT2035 to Combo 1 (XLR)
  - 48V phantom power enabled on Combo 1
- Monitoring
  - Headphones connected to Headphone Out 1

## 2. Windows 11 Audio Devices

In **Settings → System → Sound**, choose these defaults for a PC used for voice calls. Windows device labels can vary. Identify each device by its Stereo or Chat name and its direction.

| Windows setting | USB 1 device | What it carries |
| --- | --- | --- |
| Default output | RODECaster Video S Stereo | Desktop and application playback to the console |
| Default input | RODECaster Video S Chat | The mic-only send configured below, for apps using the Windows default |

In a production app that needs the wider console mix, select the Stereo recording input explicitly. In Discord, select Chat explicitly for both input and output.

## 3. RCVS Routing

A **caller** is someone else speaking in your Discord voice channel or call, such as a teammate. The **caller return** is their voice coming from Discord into the RØDECaster over USB 1 Chat. Route it to your headphones so you can hear them. Keep it out of the mix you send back to Discord so they don’t hear an echo of their own voice.

In the RØDECaster App, open **Audio Mixer**. Configure each destination separately.

- **USB 1 Chat → PC.** In the output selector, choose **USB 1 Chat → Custom**. Keep Combo 1 audible and mute every other assigned source in this output mix, including USB 1 Stereo, USB 1 Chat, HDMI, media and wireless sources. Mix-minus alone removes the caller’s return but can still send desktop audio to Discord.
- **PC → Headphone 1.** Discord playback arrives on the console’s USB 1 Chat input channel. In the Headphone 1 mix, make USB 1 Chat audible for the caller and USB 1 Stereo audible for desktop playback.
- **Production outputs.** Include the USB 1 Chat return in each recording, stream or NDI output mix where the audience should hear the caller.

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
- Under **Advanced Settings**, turn off **Automatic Gain Control**.

Sensitivity baseline:

- Start near -50 dB. Aim for a threshold above typing noise and below your quietest speech.
- If typing opens the mic, raise the threshold toward -45 dB.
- If quiet speech fails to open the mic, lower the threshold toward -55 dB. If a Windows recording of the Chat input also loses first syllables, check the Combo 1 gate first.

Processing:

- Noise suppression: Krisp on
- Leave echo cancellation off initially. If a caller hears their own voice, first check that the USB 1 Chat return is muted in the Chat send. Consider echo cancellation if sound from the room still reaches the mic.

Leveling guidance:

- Keep Discord input at 100 percent initially and set gain at Combo 1.

Avoid for Discord voice input:

- Microphone (RODECaster Video S Stereo), which may carry a wider mix including PC audio.

### Check the complete route

1. Join a Discord call using headphones. Start a Windows recording with **RODECaster Video S Chat** selected as the input. Mute Combo 1 and play a desktop clip while the caller speaks.
2. Confirm you hear both the clip and the caller in Headphone 1. The caller should hear neither the clip nor their own voice.
3. Unmute Combo 1 and speak while the clip continues. Confirm the caller hears only your voice. Stop the recording and play it back. The muted section should be silent, followed by your voice alone.

### Stream a Windows game with Discord Go Live

In the Discord voice call, choose **Share Your Screen**, select the **game application**, enable sound for the share, and choose **Go Live**. Discord captures the game soundtrack from the application. Keep the game’s Windows playback on Stereo and Discord’s input and output on Chat. Headphone 1 carries both the game and the call. NDI is optional for this workflow.

Ask a friend to watch the stream with its sound on. While the game is making sound, mute Combo 1. Your friend should still hear the game once, without doubling. Unmute Combo 1 and speak while your friend talks. They should hear your voice and the game without hearing their own voice back.

### Show the RØDECaster’s switched production in Discord

To show the game, camera cuts and overlays together, set **Settings → Video → USB 1 → Program** on the Video S. Select the RØDECaster as the camera in Discord and turn on video. Sharing the game window alone shows only the game.

For switched video with game or clip audio, configure the two mixes below, then follow [Share NDI Studio Monitor in Discord](#share-ndi-studio-monitor-in-discord). Viewers hear game and clip audio through the stream player. Your microphone and the other callers’ voices stay in the voice call. You can leave the Discord camera off.

1. In the Discord desktop app, open **User Settings → Voice & Video**. Select the RØDECaster **Chat** recording device for input and the **Chat** playback device for output. In the console’s **USB 1 Chat** output mix, leave only **Combo 1** audible. This carries your voice even when a caller closes the stream.
2. On the Video S, select **Settings → Video → NDI → Program**. In the RØDECaster App, open **Audio Mixer**, select the **Network (NDI)** output and choose **Custom**. Start with all sources muted in this mix. Keep **Combo 1** and **USB 1 Chat** muted here throughout. You can still hear callers in Headphone 1.
3. Leave the Network mix muted until you select Studio Monitor’s playback device in the linked instructions.

**Check from a viewer’s seat.** Have a caller watch a scene change while a game or console clip plays. Mute your mic in Discord and keep speaking. The caller should hear the game or clip once, your voice should disappear, and they should hear no echo when they speak. Unmute your mic, then have the caller mute only the stream player. They should still hear your voice while the game or clip falls silent. If your voice survives the first mute, check Combo 1 and any camera mics in the Network mix. If the caller hears themselves, check the USB 1 Chat return in that same mix.

## 6. Mic Placement

Best-practice baseline:

- Position mic 6 to 10 inches away (8 inches is a strong starting point)
- Place mic to the side of the keyboard
- Aim at the corner of the mouth, slightly off-axis
- Point rear of mic toward keyboard for cardioid rejection
- Isolate stand with a dense pad to reduce desk vibration

## 7. NDI Settings Baseline

### Share NDI Studio Monitor in Discord

1. Connect the Windows PC and Video S to the same wired network. On the Video S, open **Settings → Video → NDI** and select **Program**. This sends the picture that is live on the switcher to the PC.
2. On the PC, open **Start**, search for **NDI Studio Monitor**, and launch it. You can also open **Studio Monitor** from the NDI Tools launcher. Right-click inside the video window or click its upper-left menu. Select the RØDECaster device name, then its advertised channel. Switch the live scene on the console and confirm the picture changes in Studio Monitor. If the device is missing, check the network connection and the console’s NDI output selection.
3. In Studio Monitor, right-click and open **Settings → Audio**. Choose a spare playback device outside the console mix, such as an HDMI display with its physical speakers turned down. Keep Studio Monitor’s audio unmuted so Discord can capture it. In the RØDECaster App’s **Network (NDI)** mix, bring up **USB 1 Stereo** for PC game sound or the game’s HDMI channel if it arrives over HDMI. Bring up **Media** for console clips. Keep **Combo 1** and **USB 1 Chat** muted in this mix.
4. Leave the Studio Monitor window open. In the Discord Windows desktop app, join a voice channel or start a direct call. Click **Share Your Screen** (the monitor icon in the call controls). Open **Applications** and select the **Studio Monitor** window whose thumbnail shows the switched picture. If Discord offers a sound toggle, enable it. Click **Go Live**.
5. Ask a caller to open your stream. Switch scenes and play a clip. They should see the cut and hear the clip. Have them mute only the stream player while you speak. The clip should go silent and your voice should remain audible through Chat. To end the share and stay in the call, use **Stop Streaming** in the stream controls.

### Send a PC screen to the RØDECaster with Screen Capture HX

Use the settings below when the PC desktop is a video input to the switcher. Studio Monitor receives the switcher’s finished Program feed in the preceding procedure.

RODECaster Video S expectations:

- Optimized for NDI HX, not full high-bandwidth NDI SpeedHQ
- Use NDI HX at 1080p in YUV color space
- For PC-to-console screen capture, use the 1080p settings below. Firmware 1.4 added a separate 4K Capture Mode for UHD30 HDMI input to NDI output.
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
  - Disable desktop audio in Screen Capture HX for this setup. The console already receives it through USB 1 Stereo.

Rule of thumb on bandwidth:

- For 1080p60, RODE guidance indicates typical HX bandwidth around:
  - H.264 roughly 16 Mbps
  - H.265 roughly 11 Mbps
  - Actual throughput varies by HX mode and scene complexity

## References

- [Discord Go Live and Screen Share](https://support.discord.com/hc/en-us/articles/360040816151-Go-Live-and-Screen-Share)
- [RØDECaster Video S Getting Started](https://rode.com/en-gb/user-guides/rodecaster-video-s/getting-started)
- [Does the RODECaster Video Support Full NDI?](https://help.rode.com/hc/en-us/articles/13834034375951-Does-the-R%C3%98DECaster-Video-Support-Full-NDI)
- [RØDECaster Video S audio features and settings](https://rode.com/en/user-guides/rodecaster-video-s/audio-features-and-settings)
- [RØDECaster Video series 4K Capture Mode](https://help.rode.com/hc/en-us/articles/17711783587471-What-Is-4K-Capture-Mode-on-the-R%C3%98DECaster-Video-Series)
- [Discord Voice Input Modes](https://support.discord.com/hc/en-us/articles/211376518-Voice-Input-Modes-101-Push-to-Talk-Voice-Activated)
- [Set up and test microphones in Windows](https://support.microsoft.com/en-us/windows/hardware/drivers/how-to-set-up-and-test-microphones-in-windows)
- [Getting started with NDI with the RODECaster Video](https://help.rode.com/hc/en-us/articles/13236299094927-Getting-started-with-NDI-with-the-R%C3%98DECaster-Video)
- [NDI Studio Monitor](https://docs.ndi.video/all/using-ndi/ndi-tools/ndi-tools-for-windows/studio-monitor)
- [NDI Screen Capture HX](https://docs.ndi.video/all/using-ndi/ndi-tools/ndi-tools-for-windows/screen-capture-hx)

## Related Guides

- Audio interfaces index: [README.md](README.md)
- NDI basics on Windows 11: [../../ecosystems/ndi/ndi-tools-windows11-basics.md](../../ecosystems/ndi/ndi-tools-windows11-basics.md)
- NDI ecosystem index: [../../ecosystems/ndi/README.md](../../ecosystems/ndi/README.md)
- Network preparation: [../../docs/network-prep.md](../../docs/network-prep.md)
- AV sync basics: [../../docs/av-sync-basics.md](../../docs/av-sync-basics.md)
