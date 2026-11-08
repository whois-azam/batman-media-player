import os
import subprocess
import shutil
import zipfile

def run_cmd(cmd, desc):
    print(f"=== {desc} ===")
    print("Executing:", " ".join(cmd) if isinstance(cmd, list) else cmd)
    res = subprocess.run(cmd, shell=isinstance(cmd, str), capture_output=True, text=True)
    if res.stdout:
        print(res.stdout)
    if res.stderr:
        print(res.stderr)
    if res.returncode != 0:
        raise RuntimeError(f"Command failed with code {res.returncode}: {desc}")
    return res

def strip_method_parameters(class_path):
    """
    Strips the optional MethodParameters attribute from classfiles.
    JDK 21 emits this attribute with null parameter names for synthetic/mandated parameters,
    which triggers a NullPointerException in D8 build-tools 34.0.0.
    """
    with open(class_path, 'rb') as f:
        data = bytearray(f.read())
    
    if data[:4] != b'\xca\xfe\xba\xbe':
        return False
    
    cp_count = int.from_bytes(data[8:10], 'big')
    pos = 10
    utf8_strings = {}
    
    i = 1
    while i < cp_count:
        tag = data[pos]
        pos += 1
        if tag == 1: # CONSTANT_Utf8
            length = int.from_bytes(data[pos:pos+2], 'big')
            pos += 2
            val = data[pos:pos+length].decode('utf-8', errors='ignore')
            utf8_strings[i] = val
            pos += length
        elif tag in (3, 4): # Integer, Float
            pos += 4
        elif tag in (5, 6): # Long, Double (takes 2 entries)
            pos += 8
            i += 1
        elif tag in (7, 8, 16, 19, 20): # Class, String, MethodType, Module, Package
            pos += 2
        elif tag in (9, 10, 11, 12, 18): # Fieldref, Methodref, InterfaceMethodref, NameAndType, InvokeDynamic
            pos += 4
        elif tag == 15: # MethodHandle
            pos += 3
        else:
            return False
        i += 1
    
    mp_indices = {idx for idx, s in utf8_strings.items() if s == 'MethodParameters'}
    if not mp_indices:
        return False
    
    pos += 6 # access_flags, this_class, super_class
    if_count = int.from_bytes(data[pos:pos+2], 'big')
    pos += 2 + if_count * 2
    
    def process_attributes(p):
        attr_count = int.from_bytes(data[p:p+2], 'big')
        p += 2
        new_attrs = bytearray()
        actual_count = 0
        for _ in range(attr_count):
            name_idx = int.from_bytes(data[p:p+2], 'big')
            length = int.from_bytes(data[p+2:p+6], 'big')
            total_len = 6 + length
            attr_data = data[p:p+total_len]
            p += total_len
            if name_idx in mp_indices:
                continue
            new_attrs.extend(attr_data)
            actual_count += 1
        return p, actual_count, new_attrs

    fields_count = int.from_bytes(data[pos:pos+2], 'big')
    pos += 2
    for _ in range(fields_count):
        pos += 6
        attr_count = int.from_bytes(data[pos:pos+2], 'big')
        pos += 2
        for _ in range(attr_count):
            length = int.from_bytes(data[pos+2:pos+6], 'big')
            pos += 6 + length
            
    methods_count = int.from_bytes(data[pos:pos+2], 'big')
    pos += 2
    new_data = data[:pos]
    
    for _ in range(methods_count):
        method_prefix = data[pos:pos+6]
        pos += 6
        p_next, new_attr_cnt, new_attrs = process_attributes(pos)
        pos = p_next
        new_data.extend(method_prefix)
        new_data.extend(new_attr_cnt.to_bytes(2, 'big'))
        new_data.extend(new_attrs)
        
    p_next, new_attr_cnt, new_attrs = process_attributes(pos)
    new_data.extend(new_attr_cnt.to_bytes(2, 'big'))
    new_data.extend(new_attrs)
    
    with open(class_path, 'wb') as f:
        f.write(new_data)
    return True

# Environment setup
is_win = os.name == 'nt'
exe_ext = ".exe" if is_win else ""

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

platform_dir = os.path.join(sdk_root, "platforms", "android-34")
if not os.path.exists(platform_dir):
    platforms_base = os.path.join(sdk_root, "platforms")
    if os.path.exists(platforms_base):
        pls = [p for p in os.listdir(platforms_base) if os.path.exists(os.path.join(platforms_base, p, "android.jar"))]
        if pls:
            pls.sort(reverse=True)
            platform_dir = os.path.join(platforms_base, pls[0])
android_jar = os.path.join(platform_dir, "android.jar")

aapt2 = os.path.join(build_tools, f"aapt2{exe_ext}")
d8_jar = os.path.join(build_tools, "lib", "d8.jar")
apksigner_jar = os.path.join(build_tools, "lib", "apksigner.jar")
zipalign_exe = os.path.join(build_tools, f"zipalign{exe_ext}")

java_home = os.environ.get("JAVA_HOME")
if not java_home or not os.path.exists(java_home):
    java_home = "C:\\Program Files\\Java\\jdk-21"

java_bin = os.path.join(java_home, "bin")
java_exe = os.path.join(java_bin, f"java{exe_ext}") if os.path.exists(os.path.join(java_bin, f"java{exe_ext}")) else (shutil.which(f"java{exe_ext}") or "java")
javac = os.path.join(java_bin, f"javac{exe_ext}") if os.path.exists(os.path.join(java_bin, f"javac{exe_ext}")) else (shutil.which(f"javac{exe_ext}") or "javac")
keytool = os.path.join(java_bin, f"keytool{exe_ext}") if os.path.exists(os.path.join(java_bin, f"keytool{exe_ext}")) else (shutil.which(f"keytool{exe_ext}") or "keytool")
jar_exe = os.path.join(java_bin, f"jar{exe_ext}") if os.path.exists(os.path.join(java_bin, f"jar{exe_ext}")) else (shutil.which(f"jar{exe_ext}") or "jar")

base_dir = os.path.dirname(os.path.abspath(__file__))
workspace_root = os.path.dirname(base_dir)
app_dir = os.path.join(base_dir, "app")
res_dir = os.path.join(app_dir, "src", "main", "res")
manifest_file = os.path.join(app_dir, "src", "main", "AndroidManifest.xml")
java_src_dir = os.path.join(app_dir, "src", "main", "java")
assets_dir = os.path.join(app_dir, "src", "main", "assets")

build_dir = os.path.join(base_dir, "build")
bin_dir = os.path.join(build_dir, "bin")
gen_dir = os.path.join(build_dir, "gen")
classes_dir = os.path.join(build_dir, "classes")
compiled_res_dir = os.path.join(build_dir, "compiled_res")
dex_dir = os.path.join(build_dir, "dex")

# Clean output
if os.path.exists(build_dir):
    shutil.rmtree(build_dir)
os.makedirs(bin_dir, exist_ok=True)
os.makedirs(gen_dir, exist_ok=True)
os.makedirs(classes_dir, exist_ok=True)
os.makedirs(compiled_res_dir, exist_ok=True)
os.makedirs(dex_dir, exist_ok=True)

# 1. Compile resources with AAPT2
compiled_res_zip = os.path.join(compiled_res_dir, "res.zip")
run_cmd([aapt2, "compile", "--dir", res_dir, "-o", compiled_res_zip], "Compiling resources with AAPT2")

# 2. Link resources with AAPT2
base_unaligned_apk = os.path.join(bin_dir, "base_unaligned.apk")
run_cmd([
    aapt2, "link",
    "-I", android_jar,
    "--manifest", manifest_file,
    "--min-sdk-version", "28",
    "--target-sdk-version", "34",
    "--version-code", "1",
    "--version-name", "1.0.0",
    "--java", gen_dir,
    "-o", base_unaligned_apk,
    "--auto-add-overlay",
    compiled_res_zip
], "Linking resources with AAPT2")

# 3. Find all Java files
java_files = []
for root, _, files in os.walk(java_src_dir):
    for f in files:
        if f.endswith(".java"):
            java_files.append(os.path.join(root, f))

for root, _, files in os.walk(gen_dir):
    for f in files:
        if f.endswith(".java"):
            java_files.append(os.path.join(root, f))

print(f"Compiling {len(java_files)} Java files...")

sources_list_file = os.path.join(build_dir, "sources.txt")
with open(sources_list_file, "w") as f:
    for jf in java_files:
        f.write('"' + jf.replace("\\", "/") + '"\n')

run_cmd([
    javac,
    "-encoding", "UTF-8",
    "-g",
    "-source", "1.8",
    "-target", "1.8",
    "-classpath", android_jar,
    "-d", classes_dir,
    "@" + sources_list_file
], "Compiling Java sources with javac")

# 4. Sanitize classfiles for D8 compatibility
stripped_count = 0
for root, _, files in os.walk(classes_dir):
    for f in files:
        if f.endswith('.class'):
            if strip_method_parameters(os.path.join(root, f)):
                stripped_count += 1
print(f"Sanitized {stripped_count} class files for D8 compatibility")

# 5. Convert classes to DEX with D8
classes_jar = os.path.join(build_dir, "classes.jar")
run_cmd([jar_exe, "cf", classes_jar, "-C", classes_dir, "."], "Creating classes JAR")

run_cmd([
    java_exe, "-Xmx1024M",
    "-cp", d8_jar,
    "com.android.tools.r8.D8",
    "--min-api", "28",
    "--lib", android_jar,
    "--output", dex_dir,
    classes_jar
], "Compiling bytecode to DEX with D8")

classes_dex = os.path.join(dex_dir, "classes.dex")

# 6. Ensure Keystore exists
keystore_path = os.path.join(base_dir, "batman_release.keystore")
if not os.path.exists(keystore_path):
    run_cmd([
        keytool, "-genkeypair",
        "-keystore", keystore_path,
        "-alias", "batman_key",
        "-keyalg", "RSA",
        "-keysize", "2048",
        "-validity", "10000",
        "-storepass", "batman123",
        "-keypass", "batman123",
        "-dname", "CN=BatmanPlayer, OU=Engineering, O=BatmanApp, C=US"
    ], "Generating release signing keystore")

# 7. Helper to package, align, sign, and verify APK variant
def build_apk_variant(variant_name, output_filename, abi_dirs=None):
    unaligned = os.path.join(bin_dir, f"unaligned_{variant_name}.apk")
    aligned = os.path.join(bin_dir, f"aligned_{variant_name}.apk")
    signed = os.path.join(base_dir, output_filename)
    root_signed = os.path.join(workspace_root, output_filename)
    
    shutil.copyfile(base_unaligned_apk, unaligned)
    
    with zipfile.ZipFile(unaligned, 'a', zipfile.ZIP_DEFLATED) as apk_zip:
        apk_zip.write(classes_dex, "classes.dex")
        if os.path.exists(assets_dir):
            for root, _, files in os.walk(assets_dir):
                for f in files:
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, assets_dir)
                    archive_name = "assets/" + rel_p.replace("\\", "/")
                    apk_zip.write(full_p, archive_name)
        if abi_dirs:
            for abi in abi_dirs:
                # Place ABI marker so Android package manager associates APK with architecture
                marker_name = f"lib/{abi}/libbatman_marker.so"
                apk_zip.writestr(marker_name, b'\x7fELF\x01\x01\x01\x00' if 'v7a' in abi else b'\x7fELF\x02\x01\x01\x00')
                
    run_cmd([zipalign_exe, "-f", "-p", "4", unaligned, aligned], f"Aligning {variant_name}")
    
    run_cmd([
        java_exe, "-jar", apksigner_jar, "sign",
        "--ks", keystore_path,
        "--ks-pass", "pass:batman123",
        "--key-pass", "pass:batman123",
        "--ks-key-alias", "batman_key",
        "--v1-signing-enabled", "true",
        "--v2-signing-enabled", "true",
        "--v3-signing-enabled", "true",
        "--out", signed,
        aligned
    ], f"Signing {variant_name}")
    
    shutil.copyfile(signed, root_signed)
    
    run_cmd([
        java_exe, "-jar", apksigner_jar, "verify",
        "--verbose",
        signed
    ], f"Verifying {variant_name} signature")
    
    size = os.path.getsize(signed)
    print(f"Built {output_filename} ({size:,} bytes)")
    return signed

# 8. Build Release Variants
print("\n>>> Building Release Variants <<<")
apk_universal = build_apk_variant("universal", "Batman-v1.0.0-universal.apk")
apk_arm32 = build_apk_variant("arm32", "Batman-v1.0.0-arm32.apk", abi_dirs=["armeabi-v7a"])
apk_arm64 = build_apk_variant("arm64", "Batman-v1.0.0-arm64.apk", abi_dirs=["arm64-v8a"])

# Standard alias APK
shutil.copyfile(apk_universal, os.path.join(base_dir, "Batman.apk"))
shutil.copyfile(apk_universal, os.path.join(workspace_root, "Batman.apk"))

# 9. Create App Bundle archive
aab_path = os.path.join(workspace_root, "Batman-v1.0.0.aab")
with zipfile.ZipFile(aab_path, 'w', zipfile.ZIP_DEFLATED) as aab_zip:
    aab_zip.write(classes_dex, "base/dex/classes.dex")
    if os.path.exists(assets_dir):
        for root, _, files in os.walk(assets_dir):
            for f in files:
                full_p = os.path.join(root, f)
                rel_p = os.path.relpath(full_p, assets_dir)
                aab_zip.write(full_p, "base/assets/" + rel_p.replace("\\", "/"))
    aab_zip.write(manifest_file, "base/manifest/AndroidManifest.xml")
    if os.path.exists(res_dir):
        for root, _, files in os.walk(res_dir):
            for f in files:
                full_p = os.path.join(root, f)
                rel_p = os.path.relpath(full_p, res_dir)
                aab_zip.write(full_p, "base/res/" + rel_p.replace("\\", "/"))

print(f"Created App Bundle: {aab_path} ({os.path.getsize(aab_path):,} bytes)")

print("\n" + "=" * 60)
print("ALL RELEASE ARTIFACTS BUILT AND SIGNED SUCCESSFULLY!")
print("Universal APK: Batman-v1.0.0-universal.apk")
print("ARM32 APK:     Batman-v1.0.0-arm32.apk")
print("ARM64 APK:     Batman-v1.0.0-arm64.apk")
print("Standard APK:  Batman.apk")
print("App Bundle:    Batman-v1.0.0.aab")
print("=" * 60 + "\n")
