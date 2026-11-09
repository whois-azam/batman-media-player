# Batman

Batman is an Android app I made to make watching websites less painful. It opens the sites you already use in a clean full-window view, plays their videos with its own player, and changes its layout depending on whether you're on a phone, a tablet or a TV.

It works on phones, tablets, foldables, Chromebooks, Android TV and Google TV.

This is a personal project. It's still young and it has bugs, so if something breaks on your device, please tell me (see [Found a bug?](#found-a-bug) at the bottom).

---

## Why I made it

Normal browsers don't always handle video sites well. They lag, they freeze, and on older or weaker devices they sometimes just crash. I wanted something light that still plays video properly, so Batman is built to stay small and use as little memory as it can. It does fine on older phones, tablets and other devices with weaker hardware or limited storage, and it runs the same way on newer, faster ones.

---

## What it does

- **EXP PLAYER.** This is the built-in player, built on ExoPlayer. It picks the video out of the page and plays it while keeping your session cookies, User-Agent and origin headers, which helps avoid buffering issues and captchas.
- **Pick your player.** Use EXP PLAYER (recommended) or the site's own player. You choose at first launch and can switch in Settings whenever.
- **Seek jumps.** Rewind and fast-forward by 5s, 10s (default), 15s or 30s.
- **Layout that fits the device.** Phones get a bottom bar (Player, Bookmarks, Profile, Settings). Tablets get a slim side rail. TVs get a layout made for a remote and D-pad.
- **Small footprint.** It's pure Java bytecode with no heavy native libraries.
- **Popup blocking.** Redirect popups and spam tabs get blocked.
- **Player controls.** Auto-hiding controls, a seek bar, four aspect ratios (Fit, Fill, Stretch, 16:9) and proper audio focus handling.
- **Themes and profiles.** Seven dark themes (Midnight Slate, Calm Ocean, Emerald Forest, Lavender Dusk, Warm Graphite, AMOLED Pure Black, Cyberpunk Neon) and eight superhero avatars.
- **Bookmarks and direct links.** Save sites or direct video links and open them in one tap.
- **Non-video page note.** If you land on a page with no video, a small message shows for 5 seconds as a reminder that Batman is made for streaming.

---

## Download

Get the latest files from the [Releases](../../releases) page.

| File | Use it for |
|---|---|
| `Batman-v1.0.0-universal.apk` | Any Android 9.0 (API 28) or newer device. If you're not sure, take this one. |
| `Batman-v1.0.0-arm32.apk` | Older phones, tablets, TVs and streaming sticks with a 32-bit (armeabi-v7a) processor. |
| `Batman-v1.0.0-arm64.apk` | Newer devices with a 64-bit (arm64-v8a) processor. |
| `Batman-v1.0.0.aab` | App Bundle, if you want to publish it to a store. |

---

## Installing

### Phone or tablet

1. Download `Batman-v1.0.0-universal.apk` (or the `arm64` one).
2. Tap the file in your browser or file manager.
3. If Android asks, allow installs from that source.
4. Tap Install, then open Batman from your app drawer.

### Android TV or Google TV

Use whichever of these is easiest for you.

**Send Files to TV**
1. Install **Send Files to TV** on your phone and on the TV from the Play Store.
2. Download `Batman-v1.0.0-arm32.apk` (or the universal one) to your phone.
3. Open the app on your phone, tap **Send** and pick the APK.
4. Accept the file on the TV. It goes into Downloads.
5. Open a file manager on the TV (File Commander, AnExplorer) and install it.

**USB flash drive**
1. Copy the APK onto a flash drive.
2. Plug it into the TV.
3. Find the file in the TV's file manager and hit Install.

**Downloader by AFTVnews**
1. Install Downloader from the TV's app store.
2. Type in the direct link to the APK and download it.
3. Choose Install when it asks.

**ADB (Wi-Fi or USB)**
```bash
adb connect <your-tv-ip-address>:5555
adb install -r Batman-v1.0.0-arm32.apk
```

---

## Using it

On first launch there's a quick four-step setup:

1. **Website address.** Pick a preset (Internet Archive Movies, Public Domain Movies) or enter any site.
2. **Player engine.** EXP PLAYER (recommended) or the website's default player.
3. **Profile.** Choose a display name and one of the eight avatars.
4. **Look.** Pick a theme and accent color, then tap **Launch Batman**.

### TV remote

| Key | What it does |
|---|---|
| Arrow keys (D-pad) | Move focus between page buttons, player controls and navigation. |
| Center / OK | Click links and buttons, play or pause video. |
| Back | Closes player controls or fullscreen first. While browsing, it goes back a page. On the home page, press it twice within 2.5 seconds to exit. |

The header at the top has buttons for reload, home, bookmarks and settings, plus a live clock.

### Player controls

Tap the screen (or press any remote key) to show the controls.

- **Fit / Fill / Stretch / 16:9** cycles through aspect ratios, handy for getting rid of black bars.
- **Rewind / Fast Forward** skips by the amount you set.
- **Scrubber** lets you jump to any point in the video.

---

## Building it yourself

You'll need JDK 21 (or something compatible), the Android SDK with Build Tools 34.0.0 and the API 34 platform, and Python 3.8 or newer.

```bash
git clone https://github.com/whois-azam/batman-media-player.git
cd batman-media-player
python BatmanApp/build_apk.py
```

The script compiles resources with AAPT2, compiles the Java with javac, cleans up debug parameters for D8, builds the DEX, aligns with zipalign and signs the release APKs with apksigner.

To run the tests:

```bash
python test_universal_suite.py
```

They check that the release files are intact and the right size, that signatures are valid, that the AndroidManifest has the dual-launcher and cross-device flags, that the embedded Next.js Chrome 66 chunks work, and that each APK matches its architecture.

---

## Found a bug?

Like I said, this is a personal project and I'm still finding problems with it as I use it. If you hit one, please open an issue on the **Issues** tab of this repo (the GitHub issue tracker). Tell me what device you're on, which Android version, which APK you installed, and what happened. Screenshots help a lot.

I'll keep updating Batman as bugs turn up.

---

## License

MIT. See [LICENSE](LICENSE).

---

Made by M.T. Azam
