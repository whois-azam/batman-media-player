@echo off
setlocal
echo ========================================================
echo Building Batman Android TV Application (Debug + Release)
echo ========================================================
python "%~dp0build_apk.py"
if %errorlevel% neq 0 (
    echo [ERROR] Build failed with code %errorlevel%
    exit /b %errorlevel%
)
echo [SUCCESS] Batman APK built successfully!
