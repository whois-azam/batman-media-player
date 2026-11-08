# Batman

**An Android app that makes watching video websites smooth, on any screen you own.**

Batman takes the websites you already watch and gives them a proper home: a clean full-window view, a built-in video player that doesn't choke, and an interface that actually fits your device. It runs on phones, tablets, foldables, Chromebooks, Android TV and Google TV.

I built it because ordinary browsers fall apart on cheap smart TVs. If your TV has 1 GB of RAM and an old quad-core chip (MediaTek MT9255L, MT5862 and similar), Batman is meant for exactly that. It stays light, it doesn't freeze, and it doesn't run out of memory halfway through a movie.

---

## Why use it

- **Full-window browsing.** There's no search bar eating the top of the screen. Catalogs, menus and pages start right at the edge.
- **Built-in EXP PLAYER.** The playback engine is built on ExoPlayer. It pulls the video out of the page and plays it, while keeping session cookies, User-Agent and origin headers intact, so you get fewer buffering problems and fewer captchas.
- **Your choice of player.** Use EXP PLAYER (recommended) or the website's own player. Pick during first launch, change it any time in Settings.
- **Seek steps you control.** Rewind and fast-forward in 5s, 10s (default), 15s or 30s jumps.
- **An interface that fits the device.** Phones get a bottom navigation bar (Player, Bookmarks, Profile, Settings). Tablets get a compact side rail. TVs get a leanback layout made for remotes and D-pads.
- **Light on memory.** Pure Java bytecode, no heavy native libraries. That's what keeps it alive on 1 GB TVs.
- **No popup junk.** Redirect popups and spam tabs are blocked.
- **Proper player controls.** Auto-hiding controls, a seek scrubber, four aspect ratios (Fit, Fill, Stretch, 16:9) and audio focus handling.
- **Themes and profiles.** Seven dark themes (Midnight Slate, Calm Ocean, Emerald Forest, Lavender Dusk, Warm Graphite, AMOLED Pure Black, Cyberpunk Neon) and eight superhero avatars.
- **Bookmarks and direct links.** Save favorite sites or direct video links and open them in one tap.
- **A gentle heads-up.** If you land on a page with no video, a small note appears for 5 seconds to remind you Batman is tuned for streaming.

---

## Download

Grab a file from the [Releases](../../releases) page.

| File | Best for |
|---|---|
| `Batman-v1.0.0-universal.apk` | Any Android 9.0 (API 28) or newer device. Start here if unsure. |
| `Batman-v1.0.0-arm32.apk` | Smart TVs, Fire TV sticks and low-RAM boxes (armeabi-v7a). |
| `Batman-v1.0.0-arm64.apk` | Modern phones and tablets (arm64-v8a). |
| `Batman-v1.0.0.aab` | Universal App Bundle for store publishing. |

---

## Installing

### On a phone or tablet

1. Download `Batman-v1.0.0-universal.apk` (or the `arm64` one).
2. Tap the file in your browser or file manager.
3. Allow installs from that source if Android asks.
4. Tap Install, then open Batman from your app drawer.

### On Android TV or Google TV

Pick whichever method is easiest for you.

**Send Files to TV (easiest)**
1. Install **Send Files to TV** on both your phone and your TV from the Play Store.
2. Download `Batman-v1.0.0-arm32.apk` (or the universal one) to your phone.
3. Open the app on your phone, tap **Send**, and choose the APK.
4. On the TV, accept the file. It lands in Downloads.
5. Open any file manager on the TV (File Commander, AnExplorer) and install it.

**USB flash drive**
1. Copy the APK onto a flash drive.
2. Plug it into the TV.
3. Find the file in your TV's file manager and select Install.

**Downloader by AFTVnews**
1. Install Downloader from your TV's app store.
2. Enter the direct URL of the APK and download it.
3. Select Install when prompted.

**ADB (Wi-Fi or USB)**
```bash
adb connect <your-tv-ip-address>:5555
adb install -r Batman-v1.0.0-arm32.apk
```

---

## Getting started

The first time you open Batman, a four-step setup walks you through it:

1. **Website address.** Choose a preset (Internet Archive Movies, Public Domain Movies) or type in any site.
2. **Player engine.** EXP PLAYER (recommended) or the website's default player.
3. **Profile.** Pick a display name and one of the eight avatars.
4. **Look and feel.** Choose a theme and accent color, then tap **Launch Batman**.

### TV remote

| Key | What it does |
|---|---|
| Arrow keys (D-pad) | Move focus between page buttons, player controls and navigation. |
| Center / OK | Click links and buttons, play or pause video. |
| Back | Closes player controls or fullscreen first. While browsing, goes back one page. On the home page, press Back twice within 2.5 seconds to exit. |

The top header has buttons for reload, home, bookmarks and settings, plus a live synced clock.

### Player controls

Tap the screen (or press any remote key) to bring up the controls.

- **Fit / Fill / Stretch / 16:9** cycles the aspect ratio, so you can get rid of black bars or stretch the picture.
- **Rewind / Fast Forward** skips by your chosen duration.
- **Scrubber** lets you jump to any point in the stream.

---

## Building from source

You'll need:

- JDK 21 or compatible
- Android SDK with Build Tools 34.0.0 and the API 34 platform
- Python 3.8+

```bash
git clone https://github.com/<your-username>/Batman.git
cd Batman
python BatmanApp/build_apk.py
```

The build script compiles resources with AAPT2, compiles the Java sources with javac, cleans debug parameters for D8, builds the DEX, aligns with zipalign and signs the release APKs with apksigner.

To run the checks:

```bash
python test_universal_suite.py
```

The suite covers release artifact integrity and file sizes, signature validation with apksigner, the AndroidManifest dual-launcher and cross-device flags, embedded Next.js Chrome 66 chunk assets and syntax compatibility, and architecture ABI associations.

---

## Publishing a release

Pushing a version tag triggers the GitHub Actions workflow in `.github/workflows/build.yml`. It builds every APK, runs the tests, creates a release called **Batman Release v1.0.0** and uploads the APKs and the AAB.

```bash
git init
git add .
git commit -m "feat: Batman Universal Media Player v1.0.0 initial release"
git branch -M main
git remote add origin https://github.com/<your-username>/Batman.git
git push -u origin main

git tag -a v1.0.0 -m "Release v1.0.0: Universal Cross-Device Android Media Player"
git push origin v1.0.0
```

When the workflow finishes, the packages show up at `https://github.com/<your-username>/Batman/releases`.

---

## License

Released under the MIT License. See [LICENSE](LICENSE) for details.

---

Made by **M.T. Azam**