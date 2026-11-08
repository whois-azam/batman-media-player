# Changelog

All notable changes to the Batman Universal Media Player project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to Semantic Versioning.

## [1.0.0] - 2026-11-08

### Added
- Universal Cross-Device Runtime Architecture supporting Smartphones, Tablets, Android TV, Google TV, Foldables, and Chromebooks.
- Runtime Device Detection via `DeviceManager` classifying devices and applying appropriate adaptive navigation (Bottom Navigation on phones, Navigation Rail on tablets, TV Header on televisions).
- 3-step First-Launch Onboarding flow (`OnboardingActivity`):
  - Step 1: Website address entry and validation with presets for 67movies and Internet Archive.
  - Step 2: Profile creation with custom display name and 8 scalable vector superhero avatar choices.
  - Step 3: Interface personalization choosing between 7 dark palettes and 6 vibrant accents.
- Dual Media Playback Engine:
  - Chromium-backed Web Player with ad and popup redirect suppression, and local asset chunk substitution for Chrome 66 compatibility.
  - Hardware-accelerated Native Video Player (`NativeMediaPlayerView`) for direct media streams (.mp4, .mkv, .m3u8, .mpd, .webm) with custom HUD controls, scrubber, and audio focus management.
- Multi-architecture release artifacts:
  - `Batman-v1.0.0-universal.apk` for all Android architectures.
  - `Batman-v1.0.0-arm32.apk` dedicated for 32-bit ARM (armeabi-v7a) legacy TVs and phones.
  - `Batman-v1.0.0-arm64.apk` dedicated for 64-bit ARM (arm64-v8a) devices.
  - `Batman-v1.0.0.aab` universal Android App Bundle.
- Comprehensive automated verification test suite (`test_universal_suite.py`) validating signatures, manifest compliance, asset syntax compatibility, and ABI tagging.
- GitHub Actions automated CI workflow (`.github/workflows/build.yml`).
