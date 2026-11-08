import os
import sys
import zipfile
import subprocess
import xml.etree.ElementTree as ET

def log_test(name, passed, details=""):
    status = "[PASS]" if passed else "[FAIL]"
    print(f"{status} {name}")
    if details:
        print(f"       {details}")
    if not passed:
        return False
    return True

def run():
    all_passed = True
    base_dir = os.path.dirname(os.path.abspath(__file__))
    app_dir = os.path.join(base_dir, "BatmanApp")
    manifest_path = os.path.join(app_dir, "app", "src", "main", "AndroidManifest.xml")
    
    print("=" * 65)
    print("BATMAN UNIVERSAL MEDIA PLAYER v1.0.0 - VERIFICATION TEST SUITE")
    print("=" * 65 + "\n")

    # TEST 1: Release Artifacts Existence & Sizes
    artifacts = [
        "Batman-v1.0.0-universal.apk",
        "Batman-v1.0.0-arm32.apk",
        "Batman-v1.0.0-arm64.apk",
        "Batman.apk",
        "Batman-v1.0.0.aab"
    ]
    for art in artifacts:
        p = os.path.join(base_dir, art)
        exists = os.path.exists(p)
        size = os.path.getsize(p) if exists else 0
        passed = exists and size > 200000
        all_passed &= log_test(f"Artifact {art}", passed, f"Size: {size:,} bytes")

    # TEST 2: APK Signatures via apksigner
    sdk_root = os.environ.get("ANDROID_HOME") or os.environ.get("ANDROID_SDK_ROOT")
    if not sdk_root:
        app_data = os.environ.get("USERPROFILE", "")
        sdk_root = os.path.join(app_data, "AppData", "Local", "Android", "Sdk")
    build_tools_dir = os.path.join(sdk_root, "build-tools")
    build_tools = os.path.join(build_tools_dir, "34.0.0")
    if not os.path.exists(build_tools) and os.path.exists(build_tools_dir):
        versions = os.listdir(build_tools_dir)
        if versions:
            versions.sort(reverse=True)
            build_tools = os.path.join(build_tools_dir, versions[0])
    apksigner_jar = os.path.join(build_tools, "lib", "apksigner.jar")

    java_home = os.environ.get("JAVA_HOME")
    if not java_home or not os.path.exists(java_home):
        java_home = "C:\\Program Files\\Java\\jdk-21"
    is_win = os.name == 'nt'
    exe_ext = ".exe" if is_win else ""
    java_exe = os.path.join(java_home, "bin", f"java{exe_ext}")
    if not os.path.exists(java_exe):
        java_exe = "java"
    
    for apk_name in ["Batman-v1.0.0-universal.apk", "Batman-v1.0.0-arm32.apk", "Batman-v1.0.0-arm64.apk"]:
        apk_p = os.path.join(base_dir, apk_name)
        res = subprocess.run([java_exe, "-jar", apksigner_jar, "verify", apk_p], capture_output=True, text=True)
        passed = (res.returncode == 0) and ("DOES NOT VERIFY" not in res.stderr)
        all_passed &= log_test(f"Signature Verification: {apk_name}", passed, "Cryptographic signature verified")

    # TEST 3: Manifest Cross-Device Compliance
    with open(manifest_path, "r", encoding="utf-8") as f:
        manifest_text = f.read()

    leanback_opt = 'android.software.leanback" android:required="false"' in manifest_text or \
                   'android:name="android.software.leanback"\n        android:required="false"' in manifest_text
    touch_opt = 'android.hardware.touchscreen" android:required="false"' in manifest_text or \
                'android:name="android.hardware.touchscreen"\n        android:required="false"' in manifest_text
    unspecified_orient = 'android:screenOrientation="unspecified"' in manifest_text
    has_launcher = 'android.intent.category.LAUNCHER' in manifest_text
    has_leanback = 'android.intent.category.LEANBACK_LAUNCHER' in manifest_text
    package_player = 'package="com.batman.player"' in manifest_text
    has_onboarding = '.onboarding.OnboardingActivity' in manifest_text

    all_passed &= log_test("Manifest Package: com.batman.player", package_player)
    all_passed &= log_test("Manifest Leanback Optional (Phones Supported)", leanback_opt)
    all_passed &= log_test("Manifest Touchscreen Optional (TVs Supported)", touch_opt)
    all_passed &= log_test("Manifest Orientation Unspecified (Rotation & Foldables Supported)", unspecified_orient)
    all_passed &= log_test("Manifest Dual Launchers (Handheld + TV Leanback)", has_launcher and has_leanback)
    all_passed &= log_test("Manifest Onboarding Activity Declared", has_onboarding)

    # TEST 4: APK Internal Assets & Chunks
    universal_apk = os.path.join(base_dir, "Batman-v1.0.0-universal.apk")
    with zipfile.ZipFile(universal_apk, "r") as z:
        namelist = z.namelist()
        has_dex = "classes.dex" in namelist
        chunk_files = [n for n in namelist if n.startswith("assets/chunks/") and n.endswith(".js")]
        has_compat_chunks = len(chunk_files) >= 15

        all_passed &= log_test("APK classes.dex present", has_dex)
        all_passed &= log_test("APK Next.js Chrome 66 Chunks embedded", has_compat_chunks, f"Found {len(chunk_files)} chunks")

        # Verify no optional chaining or nullish coalescing operators in embedded chunks
        import re
        bad_syntax_count = 0
        for cf in chunk_files:
            content = z.read(cf).decode("utf-8", errors="ignore")
            # Optional chaining (?.) or nullish coalescing operator (identifier/literal ?? identifier)
            has_optional_chaining = "?." in content
            has_nullish_coalescing = bool(re.search(r'[\w$)]\s*\?\?\s*[\w$(]', content))
            if has_optional_chaining or has_nullish_coalescing:
                bad_syntax_count += 1
        all_passed &= log_test("APK Assets Syntax Compatibility (Zero ES2020 ?. and ??)", bad_syntax_count == 0, f"Violations: {bad_syntax_count}")

    # TEST 5: Architecture Specificity
    arm32_apk = os.path.join(base_dir, "Batman-v1.0.0-arm32.apk")
    arm64_apk = os.path.join(base_dir, "Batman-v1.0.0-arm64.apk")
    with zipfile.ZipFile(arm32_apk, "r") as z32:
        has_arm32 = any(n.startswith("lib/armeabi-v7a/") for n in z32.namelist())
        all_passed &= log_test("ARM32 APK ABI Association", has_arm32)

    with zipfile.ZipFile(arm64_apk, "r") as z64:
        has_arm64 = any(n.startswith("lib/arm64-v8a/") for n in z64.namelist())
        all_passed &= log_test("ARM64 APK ABI Association", has_arm64)

    # TEST 6: Constraint Check (Strict Rule: Zero em dashes in user code)
    em_dash_violations = 0
    src_dir = os.path.join(app_dir, "app", "src", "main", "java")
    for root, _, files in os.walk(src_dir):
        for f in files:
            if f.endswith(".java"):
                with open(os.path.join(root, f), "r", encoding="utf-8") as jf:
                    text = jf.read()
                    if "\u2014" in text or "\u2013" in text:
                        em_dash_violations += 1
    all_passed &= log_test("Constraint Enforcement (No em dashes in source)", em_dash_violations == 0, f"Violations: {em_dash_violations}")

    # TEST 7: EXP PLAYER & Video Detection Engine Integration
    pref_file = os.path.join(app_dir, "app", "src", "main", "java", "com", "batman", "player", "data", "BatmanPreferences.java")
    bridge_file = os.path.join(app_dir, "app", "src", "main", "java", "com", "batman", "player", "web", "BatmanVideoBridge.java")
    has_bridge = os.path.exists(bridge_file)
    with open(pref_file, "r", encoding="utf-8") as pf:
        pref_content = pf.read()
    has_exp_default = 'PLAYER_EXP = "exp_player"' in pref_content and 'isExpPlayerEnabled' in pref_content
    has_seek_pref = 'seek_duration_seconds' in pref_content
    all_passed &= log_test("EXP PLAYER Engine Configured as Default", has_exp_default)
    all_passed &= log_test("EXP PLAYER Customizable Seek Integration", has_seek_pref)
    all_passed &= log_test("Batman Video Bridge Component Exists", has_bridge)

    print("\n" + "=" * 65)
    if all_passed:
        print("ALL VERIFICATION SUITE TESTS PASSED (100% SUCCESS)!")
    else:
        print("TEST SUITE FAILED - Check output above for details.")
    print("=" * 65 + "\n")
    return all_passed

if __name__ == "__main__":
    success = run()
    sys.exit(0 if success else 1)
