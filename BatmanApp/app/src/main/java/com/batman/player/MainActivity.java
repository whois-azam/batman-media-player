package com.batman.player;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.view.inputmethod.EditorInfo;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.batman.player.data.BatmanPreferences;
import com.batman.player.device.DeviceCategory;
import com.batman.player.device.DeviceManager;
import com.batman.player.device.NavigationMode;
import com.batman.player.dialogs.BookmarksDialog;
import com.batman.player.dialogs.ProfileDialog;
import com.batman.player.dialogs.SettingsDialog;
import com.batman.player.media.NativeMediaPlayerView;
import com.batman.player.model.Profile;
import com.batman.player.onboarding.OnboardingActivity;
import com.batman.player.theme.ThemeManager;
import com.batman.player.views.AvatarView;
import com.batman.player.views.BatClockView;
import com.batman.player.web.BatmanVideoBridge;
import com.batman.player.web.BatmanWebChromeClient;
import com.batman.player.web.BatmanWebViewClient;

import java.util.HashMap;
import java.util.Map;

public class MainActivity extends Activity implements
        BatmanWebViewClient.WebEventListener,
        BatmanWebChromeClient.FullscreenCallback,
        NativeMediaPlayerView.PlayerListener,
        SettingsDialog.SettingsListener,
        BookmarksDialog.BookmarkListener,
        ProfileDialog.ProfileListener,
        BatmanVideoBridge.VideoDetectionListener {

    private static final long DOUBLE_BACK_DELAY_MS = 2500;

    private BatmanPreferences mPrefs;
    private DeviceManager mDeviceManager;

    private RelativeLayout mMainRoot;

    // TV Header Views
    private RelativeLayout mTvHeaderContainer;
    private ImageButton mTvBtnReload;
    private ImageButton mTvBtnHome;
    private ImageButton mTvBtnBookmarks;
    private ImageButton mTvBtnSettings;
    private BatClockView mTvHeaderClock;

    // Mobile Bottom Nav Bar Views
    private LinearLayout mBottomNavBar;
    private LinearLayout mTabBrowser;
    private LinearLayout mTabBookmarks;
    private LinearLayout mTabProfile;
    private LinearLayout mTabSettings;
    private ImageView mTabBrowserIcon;
    private ImageView mTabBookmarksIcon;
    private AvatarView mTabProfileAvatar;
    private ImageView mTabSettingsIcon;
    private TextView mTabBrowserText;
    private TextView mTabBookmarksText;
    private TextView mTabProfileText;
    private TextView mTabSettingsText;

    // Tablet & Desktop Nav Rail Views
    private LinearLayout mNavRailContainer;
    private AvatarView mRailProfileAvatar;
    private ImageButton mRailBtnBrowser;
    private ImageButton mRailBtnBookmarks;
    private ImageButton mRailBtnSettings;

    // Viewport & Content Views
    private ProgressBar mProgressBar;
    private FrameLayout mViewportContainer;
    private WebView mWebView;
    private NativeMediaPlayerView mNativePlayerView;
    private FrameLayout mCustomViewContainer;
    private View mErrorLayout;
    private Button mBtnErrorRetry;
    private Button mBtnErrorSettings;
    private LinearLayout mNonVideoToastContainer;

    // State
    private String mCurrentUrl = "";
    private String mCurrentTitle = "Batman";
    private boolean mIsFullscreen = false;
    private WebChromeClient.CustomViewCallback mFullscreenCallback;
    private View mFullscreenView;
    private long mLastBackPressTime = 0;
    private final Handler mHandler = new Handler(Looper.getMainLooper());

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mPrefs = new BatmanPreferences(this);

        // First run onboarding check
        if (!mPrefs.isOnboardingDone()) {
            Intent intent = new Intent(this, OnboardingActivity.class);
            startActivity(intent);
            finish();
            return;
        }

        mDeviceManager = new DeviceManager(this);

        setContentView(R.layout.activity_main);

        initViews();
        setupWebView();
        setupNativePlayer();
        applyAdaptiveLayout();
        applyTheme();

        loadInitialPage();
    }

    private void initViews() {
        mMainRoot = findViewById(R.id.main_root);

        // TV Header
        mTvHeaderContainer = findViewById(R.id.tv_header_container);
        mTvBtnReload = findViewById(R.id.tv_btn_reload);
        mTvBtnHome = findViewById(R.id.tv_btn_home);
        mTvBtnBookmarks = findViewById(R.id.tv_btn_bookmarks);
        mTvBtnSettings = findViewById(R.id.tv_btn_settings);
        mTvHeaderClock = findViewById(R.id.tv_header_clock);

        if (mTvBtnReload != null) mTvBtnReload.setOnClickListener(v -> reloadCurrent());
        if (mTvBtnHome != null) mTvBtnHome.setOnClickListener(v -> loadUrl(mPrefs.getHomeUrl()));
        if (mTvBtnBookmarks != null) mTvBtnBookmarks.setOnClickListener(v -> openBookmarksDialog());
        if (mTvBtnSettings != null) mTvBtnSettings.setOnClickListener(v -> openSettingsDialog());

        // Bottom Nav Bar
        mBottomNavBar = findViewById(R.id.bottom_nav_bar);
        mTabBrowser = findViewById(R.id.tab_browser);
        mTabBookmarks = findViewById(R.id.tab_bookmarks);
        mTabProfile = findViewById(R.id.tab_profile);
        mTabSettings = findViewById(R.id.tab_settings);

        mTabBrowserIcon = findViewById(R.id.tab_browser_icon);
        mTabBookmarksIcon = findViewById(R.id.tab_bookmarks_icon);
        mTabProfileAvatar = findViewById(R.id.tab_profile_avatar);
        mTabSettingsIcon = findViewById(R.id.tab_settings_icon);

        mTabBrowserText = findViewById(R.id.tab_browser_text);
        mTabBookmarksText = findViewById(R.id.tab_bookmarks_text);
        mTabProfileText = findViewById(R.id.tab_profile_text);
        mTabSettingsText = findViewById(R.id.tab_settings_text);

        if (mTabBrowser != null) mTabBrowser.setOnClickListener(v -> selectTab(0));
        if (mTabBookmarks != null) mTabBookmarks.setOnClickListener(v -> selectTab(1));
        if (mTabProfile != null) mTabProfile.setOnClickListener(v -> selectTab(2));
        if (mTabSettings != null) mTabSettings.setOnClickListener(v -> selectTab(3));

        // Tablet Navigation Rail
        mNavRailContainer = findViewById(R.id.nav_rail_container);
        mRailProfileAvatar = findViewById(R.id.rail_profile_avatar);
        mRailBtnBrowser = findViewById(R.id.rail_btn_browser);
        mRailBtnBookmarks = findViewById(R.id.rail_btn_bookmarks);
        mRailBtnSettings = findViewById(R.id.rail_btn_settings);

        if (mRailProfileAvatar != null) mRailProfileAvatar.setOnClickListener(v -> openProfileDialog());
        if (mRailBtnBrowser != null) mRailBtnBrowser.setOnClickListener(v -> selectTab(0));
        if (mRailBtnBookmarks != null) mRailBtnBookmarks.setOnClickListener(v -> openBookmarksDialog());
        if (mRailBtnSettings != null) mRailBtnSettings.setOnClickListener(v -> openSettingsDialog());

        // Viewport & Content
        mProgressBar = findViewById(R.id.web_progress_bar);
        mViewportContainer = findViewById(R.id.viewport_container);
        mWebView = findViewById(R.id.batman_webview);
        mNativePlayerView = findViewById(R.id.native_player_view);
        mCustomViewContainer = findViewById(R.id.custom_view_container);
        mErrorLayout = findViewById(R.id.include_error);
        mBtnErrorRetry = findViewById(R.id.btn_error_retry);
        mBtnErrorSettings = findViewById(R.id.btn_error_settings);
        mNonVideoToastContainer = findViewById(R.id.non_video_toast_container);

        if (mBtnErrorRetry != null) {
            mBtnErrorRetry.setOnClickListener(v -> {
                hideErrorScreen();
                reloadCurrent();
            });
        }
        if (mBtnErrorSettings != null) {
            mBtnErrorSettings.setOnClickListener(v -> openSettingsDialog());
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void setupWebView() {
        WebSettings ws = mWebView.getSettings();
        ws.setJavaScriptEnabled(true);
        ws.setDomStorageEnabled(true);
        ws.setDatabaseEnabled(true);
        ws.setMediaPlaybackRequiresUserGesture(false);
        ws.setSupportZoom(false);
        ws.setBuiltInZoomControls(false);
        ws.setDisplayZoomControls(false);
        ws.setLoadWithOverviewMode(true);
        ws.setUseWideViewPort(true);

        // Security controls
        ws.setAllowFileAccess(false);
        ws.setAllowContentAccess(false);
        ws.setAllowFileAccessFromFileURLs(false);
        ws.setAllowUniversalAccessFromFileURLs(false);
        ws.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);

        // Performance & memory optimizations
        ws.setCacheMode(WebSettings.LOAD_DEFAULT);
        ws.setOffscreenPreRaster(false);
        ws.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);

        // Anti-popup controls
        ws.setSupportMultipleWindows(false);
        ws.setJavaScriptCanOpenWindowsAutomatically(false);

        // Adaptive User Agent
        String ua;
        if (mDeviceManager != null && mDeviceManager.isTelevision()) {
            ua = "Mozilla/5.0 (Linux; Android 9; Smart TV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
        } else {
            ua = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36";
        }
        ws.setUserAgentString(ua);

        CookieManager.getInstance().setAcceptCookie(true);
        CookieManager.getInstance().setAcceptThirdPartyCookies(mWebView, true);

        mWebView.setWebViewClient(new BatmanWebViewClient(this));
        mWebView.setWebChromeClient(new BatmanWebChromeClient(this));
        mWebView.addJavascriptInterface(new BatmanVideoBridge(this), "BatmanBridge");

        mWebView.setLayerType(View.LAYER_TYPE_HARDWARE, null);
        mWebView.setBackgroundColor(Color.parseColor("#10141A"));
        mWebView.setScrollbarFadingEnabled(true);
    }

    private void setupNativePlayer() {
        if (mNativePlayerView != null) {
            mNativePlayerView.setPlayerListener(this);
        }
    }

    private void applyAdaptiveLayout() {
        String userLayout = mPrefs.getLayoutMode();
        int navMode;

        if ("phone".equalsIgnoreCase(userLayout)) {
            navMode = NavigationMode.BOTTOM_NAV;
        } else if ("tablet".equalsIgnoreCase(userLayout)) {
            navMode = NavigationMode.NAVIGATION_RAIL;
        } else if ("tv".equalsIgnoreCase(userLayout)) {
            navMode = NavigationMode.TV_HEADER;
        } else {
            navMode = mDeviceManager.getNavigationMode();
        }

        if (navMode == NavigationMode.TV_HEADER) {
            if (mTvHeaderContainer != null) mTvHeaderContainer.setVisibility(View.VISIBLE);
            if (mBottomNavBar != null) mBottomNavBar.setVisibility(View.GONE);
            if (mNavRailContainer != null) mNavRailContainer.setVisibility(View.GONE);
            if (mTvBtnReload != null) mTvBtnReload.requestFocus();
        } else if (navMode == NavigationMode.NAVIGATION_RAIL) {
            if (mTvHeaderContainer != null) mTvHeaderContainer.setVisibility(View.GONE);
            if (mBottomNavBar != null) mBottomNavBar.setVisibility(View.GONE);
            if (mNavRailContainer != null) mNavRailContainer.setVisibility(View.VISIBLE);
        } else {
            // BOTTOM_NAV (Phone)
            if (mTvHeaderContainer != null) mTvHeaderContainer.setVisibility(View.GONE);
            if (mBottomNavBar != null) mBottomNavBar.setVisibility(View.VISIBLE);
            if (mNavRailContainer != null) mNavRailContainer.setVisibility(View.GONE);
        }
    }

    private void applyTheme() {
        ThemeManager.Palette palette = ThemeManager.getPalette(mPrefs);

        if (mMainRoot != null) {
            mMainRoot.setBackgroundColor(palette.bg);
        }
        if (mWebView != null) {
            mWebView.setBackgroundColor(palette.bg);
        }

        // TV Header
        if (mTvHeaderContainer != null) {
            GradientDrawable headerBg = new GradientDrawable();
            headerBg.setColor(palette.header);
            headerBg.setStroke(1, palette.border);
            mTvHeaderContainer.setBackground(headerBg);
        }

        // Bottom Nav Bar
        if (mBottomNavBar != null) {
            GradientDrawable navBg = new GradientDrawable();
            navBg.setColor(palette.header);
            navBg.setStroke(1, palette.border);
            mBottomNavBar.setBackground(navBg);
        }

        // Nav Rail
        if (mNavRailContainer != null) {
            GradientDrawable railBg = new GradientDrawable();
            railBg.setColor(palette.header);
            railBg.setStroke(1, palette.border);
            mNavRailContainer.setBackground(railBg);
        }

        // Progress Bar
        if (mProgressBar != null) {
            GradientDrawable pg = new GradientDrawable();
            pg.setColor(palette.accent);
            android.graphics.drawable.ClipDrawable clip = new android.graphics.drawable.ClipDrawable(
                pg, android.view.Gravity.START, android.graphics.drawable.ClipDrawable.HORIZONTAL);
            mProgressBar.setProgressDrawable(clip);
        }

        // Profile Avatars
        Profile profile = mPrefs.getProfile();
        if (mTabProfileAvatar != null) {
            mTabProfileAvatar.setAvatarId(profile.getAvatarId());
            mTabProfileAvatar.setAccentColor(palette.accent);
        }
        if (mRailProfileAvatar != null) {
            mRailProfileAvatar.setAvatarId(profile.getAvatarId());
            mRailProfileAvatar.setAccentColor(palette.accent);
        }

        // Clock View
        if (mTvHeaderClock != null) {
            mTvHeaderClock.setTextColor(palette.textPrimary, palette.textSecondary);
        }
    }

    private void loadInitialPage() {
        String home = mPrefs.getHomeUrl();
        loadUrl(home);
    }

    public void loadUrl(String url) {
        if (url == null || url.trim().isEmpty()) return;
        url = url.trim();

        // Check if direct video stream
        if (isDirectStreamUrl(url)) {
            playDirectMedia(url, "Stream Playback");
            return;
        }

        hideNativePlayer();
        hideErrorScreen();

        mCurrentUrl = url;
        mWebView.loadUrl(url);
    }

    private void handleUserInputUrl(String input) {
        String target;
        if (input.startsWith("http://") || input.startsWith("https://")) {
            target = input;
        } else if (input.contains(".") && !input.contains(" ")) {
            target = "https://" + input;
        } else {
            // Search query
            target = "https://duckduckgo.com/?q=" + Uri.encode(input);
        }
        loadUrl(target);
    }

    private void reloadCurrent() {
        hideErrorScreen();
        if (mNativePlayerView != null && mNativePlayerView.getVisibility() == View.VISIBLE) {
            mNativePlayerView.resume();
        } else if (mWebView != null) {
            mWebView.reload();
        }
    }

    private boolean isDirectStreamUrl(String url) {
        if (url == null) return false;
        String lower = url.toLowerCase();
        return lower.endsWith(".mp4") || lower.endsWith(".mkv") ||
               lower.endsWith(".m3u8") || lower.endsWith(".mpd") ||
               lower.endsWith(".webm") || lower.contains(".m3u8?") ||
               lower.contains(".mp4?");
    }

    private void playDirectMedia(String url, String title) {
        if (!mPrefs.isExpPlayerEnabled()) {
            return;
        }
        hideNonVideoToast();
        if (mWebView != null) {
            mWebView.setVisibility(View.GONE);
        }
        if (mNativePlayerView != null) {
            mNativePlayerView.setSeekDurationSeconds(mPrefs.getSeekDurationSeconds());
            mNativePlayerView.setVisibility(View.VISIBLE);

            Map<String, String> headers = new HashMap<>();
            String ua = mWebView.getSettings().getUserAgentString();
            if (ua != null && !ua.isEmpty()) {
                headers.put("User-Agent", ua);
            }
            if (mCurrentUrl != null && !mCurrentUrl.isEmpty()) {
                headers.put("Referer", mCurrentUrl);
            }
            try {
                String cookie = CookieManager.getInstance().getCookie(url);
                if (cookie != null && !cookie.isEmpty()) {
                    headers.put("Cookie", cookie);
                }
            } catch (Exception ignored) {}

            mNativePlayerView.playMedia(url, title, headers);
            mNativePlayerView.requestFocus();
        }
    }

    private final Runnable mHideNonVideoToastRunnable = new Runnable() {
        @Override
        public void run() {
            hideNonVideoToast();
        }
    };

    @Override
    public void onVideoDetected(final String mediaUrl, final String title, final float currentTime) {
        mHandler.post(() -> {
            if (!mPrefs.isExpPlayerEnabled()) {
                return;
            }
            hideNonVideoToast();
            int startPosMs = (int) (currentTime * 1000);

            Map<String, String> headers = new HashMap<>();
            String ua = mWebView.getSettings().getUserAgentString();
            if (ua != null && !ua.isEmpty()) {
                headers.put("User-Agent", ua);
            }
            if (mCurrentUrl != null && !mCurrentUrl.isEmpty()) {
                headers.put("Referer", mCurrentUrl);
            }
            try {
                String cookie = CookieManager.getInstance().getCookie(mediaUrl);
                if (cookie != null && !cookie.isEmpty()) {
                    headers.put("Cookie", cookie);
                }
            } catch (Exception ignored) {}
            headers.put("Accept", "*/*");
            headers.put("Connection", "keep-alive");

            if (mWebView != null) {
                mWebView.setVisibility(View.GONE);
            }
            if (mNativePlayerView != null) {
                mNativePlayerView.setSeekDurationSeconds(mPrefs.getSeekDurationSeconds());
                mNativePlayerView.setVisibility(View.VISIBLE);
                mNativePlayerView.playMedia(mediaUrl, title, headers, startPosMs);
                mNativePlayerView.requestFocus();
            }
        });
    }

    @Override
    public void onNonVideoPageDetected() {
        mHandler.post(() -> {
            if (mNativePlayerView != null && mNativePlayerView.getVisibility() == View.VISIBLE) {
                return;
            }
            if (mNonVideoToastContainer != null) {
                GradientDrawable toastBg = new GradientDrawable();
                toastBg.setColor(Color.parseColor("#E6161E29"));
                toastBg.setCornerRadius(20);
                toastBg.setStroke(1, Color.parseColor("#384659"));
                mNonVideoToastContainer.setBackground(toastBg);

                mNonVideoToastContainer.setVisibility(View.VISIBLE);
                mNonVideoToastContainer.setAlpha(1.0f);
                mHandler.removeCallbacks(mHideNonVideoToastRunnable);
                mHandler.postDelayed(mHideNonVideoToastRunnable, 5000);
            }
        });
    }

    private void hideNonVideoToast() {
        if (mNonVideoToastContainer != null && mNonVideoToastContainer.getVisibility() == View.VISIBLE) {
            mNonVideoToastContainer.animate()
                .alpha(0.0f)
                .setDuration(400)
                .withEndAction(() -> {
                    if (mNonVideoToastContainer != null) {
                        mNonVideoToastContainer.setVisibility(View.GONE);
                    }
                })
                .start();
        }
    }

    private void hideNativePlayer() {
        if (mNativePlayerView != null && mNativePlayerView.getVisibility() == View.VISIBLE) {
            mNativePlayerView.stop();
            mNativePlayerView.setVisibility(View.GONE);
        }
        if (mWebView != null) {
            mWebView.setVisibility(View.VISIBLE);
        }
    }

    private void selectTab(int index) {
        if (index == 0) {
            // Player / Browser tab
            hideNativePlayer();
            mWebView.setVisibility(View.VISIBLE);
            updateTabSelection(0);
        } else if (index == 1) {
            // Bookmarks tab
            openBookmarksDialog();
        } else if (index == 2) {
            // Profile tab
            openProfileDialog();
        } else if (index == 3) {
            // Settings tab
            openSettingsDialog();
        }
    }

    private void updateTabSelection(int selectedIndex) {
        int activeColor = mPrefs.getAccentColor();
        int inactiveColor = Color.parseColor("#9AA4B2");

        if (mTabBrowserText != null) mTabBrowserText.setTextColor(selectedIndex == 0 ? activeColor : inactiveColor);
        if (mTabBookmarksText != null) mTabBookmarksText.setTextColor(selectedIndex == 1 ? activeColor : inactiveColor);
        if (mTabProfileText != null) mTabProfileText.setTextColor(selectedIndex == 2 ? activeColor : inactiveColor);
        if (mTabSettingsText != null) mTabSettingsText.setTextColor(selectedIndex == 3 ? activeColor : inactiveColor);
    }

    private void openBookmarksDialog() {
        BookmarksDialog dialog = new BookmarksDialog(this, mPrefs, mCurrentUrl, mCurrentTitle, this);
        dialog.show();
    }

    private void openProfileDialog() {
        ProfileDialog dialog = new ProfileDialog(this, mPrefs, this);
        dialog.show();
    }

    private void openSettingsDialog() {
        SettingsDialog dialog = new SettingsDialog(this, mPrefs, mDeviceManager, this);
        dialog.show();
    }

    private void showErrorScreen(String message) {
        if (mErrorLayout != null) {
            mErrorLayout.setVisibility(View.VISIBLE);
            mErrorLayout.bringToFront();
            if (mBtnErrorRetry != null) {
                mBtnErrorRetry.requestFocus();
            }
        }
        if (mProgressBar != null) {
            mProgressBar.setVisibility(View.GONE);
        }
    }

    private void hideErrorScreen() {
        if (mErrorLayout != null) {
            mErrorLayout.setVisibility(View.GONE);
        }
    }

    // BatmanWebViewClient.WebEventListener Callbacks
    @Override
    public void onPageStarted(String url) {
        hideErrorScreen();
        hideNonVideoToast();
        mCurrentUrl = url;
        if (mProgressBar != null) {
            mProgressBar.setProgress(10);
            mProgressBar.setVisibility(View.VISIBLE);
        }
    }

    @Override
    public void onPageFinished(String url) {
        mCurrentUrl = url;
        if (mProgressBar != null) {
            mProgressBar.setVisibility(View.GONE);
        }
        mPrefs.addHistory(url);
    }

    @Override
    public void onPageError(String failingUrl, String description) {
        if (mWebView != null && mWebView.getProgress() < 30) {
            showErrorScreen(description);
        }
    }

    @Override
    public void onPageSslError(String url) {
        // Handled gracefully in client to prevent false positive connection failures on emulators/TVs
    }

    @Override
    public void onDirectMediaDetected(String mediaUrl) {
        playDirectMedia(mediaUrl, "Stream Playback");
    }

    // BatmanWebChromeClient.FullscreenCallback Callbacks
    @Override
    public void onEnterFullscreen(View view, WebChromeClient.CustomViewCallback callback) {
        if (mCustomViewContainer == null) return;

        mIsFullscreen = true;
        mFullscreenView = view;
        mFullscreenCallback = callback;

        if (mWebView != null) mWebView.setVisibility(View.GONE);
        if (mTvHeaderContainer != null) mTvHeaderContainer.setVisibility(View.GONE);
        if (mBottomNavBar != null) mBottomNavBar.setVisibility(View.GONE);
        if (mNavRailContainer != null) mNavRailContainer.setVisibility(View.GONE);

        mCustomViewContainer.addView(view, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        mCustomViewContainer.setVisibility(View.VISIBLE);
        mCustomViewContainer.bringToFront();

        setImmersiveFullscreen(true);
    }

    @Override
    public void onExitFullscreen() {
        if (!mIsFullscreen) return;

        mIsFullscreen = false;
        if (mCustomViewContainer != null) {
            mCustomViewContainer.removeAllViews();
            mCustomViewContainer.setVisibility(View.GONE);
        }

        mFullscreenView = null;
        if (mFullscreenCallback != null) {
            mFullscreenCallback.onCustomViewHidden();
            mFullscreenCallback = null;
        }

        if (mWebView != null) mWebView.setVisibility(View.VISIBLE);
        applyAdaptiveLayout();
        setImmersiveFullscreen(false);
    }

    @Override
    public void onProgressChanged(int progress) {
        if (mProgressBar != null) {
            mProgressBar.setProgress(progress);
            if (progress >= 100) {
                mProgressBar.setVisibility(View.GONE);
            } else {
                mProgressBar.setVisibility(View.VISIBLE);
            }
        }
    }

    @Override
    public void onReceivedTitle(String title) {
        if (title != null && !title.isEmpty()) {
            mCurrentTitle = title;
        }
    }

    // NativeMediaPlayerView.PlayerListener Callbacks
    @Override
    public void onCloseRequested() {
        hideNativePlayer();
    }

    @Override
    public void onFullscreenToggleRequested(boolean isFullscreen) {
        setImmersiveFullscreen(isFullscreen);
    }

    @Override
    public void onPlaybackError(String error) {
        Toast.makeText(this, "Playback Error: " + error, Toast.LENGTH_SHORT).show();
        hideNativePlayer();
    }

    // SettingsDialog.SettingsListener Callbacks
    @Override
    public void onThemeChanged() {
        applyTheme();
    }

    @Override
    public void onLayoutModeChanged() {
        applyAdaptiveLayout();
    }

    @Override
    public void onHomeUrlChanged(String newUrl) {
        loadUrl(newUrl);
    }

    @Override
    public void onReloadRequested() {
        reloadCurrent();
    }

    @Override
    public void onClearCacheRequested() {
        if (mWebView != null) {
            mWebView.clearCache(true);
        }
    }

    // BookmarksDialog.BookmarkListener Callbacks
    @Override
    public void onBookmarkSelected(String url) {
        loadUrl(url);
    }

    @Override
    public void onBookmarkAdded(String title, String url) {
        Toast.makeText(this, "Bookmark added: " + title, Toast.LENGTH_SHORT).show();
    }

    // ProfileDialog.ProfileListener Callbacks
    @Override
    public void onProfileUpdated(Profile profile) {
        applyTheme();
    }

    private void setImmersiveFullscreen(boolean enabled) {
        Window window = getWindow();
        if (window == null) return;
        View decor = window.getDecorView();

        if (enabled) {
            decor.setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
            );
        } else {
            decor.setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
        }
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        // Refresh adaptive layouts when screen rotates or unfolds
        mDeviceManager = new DeviceManager(this);
        applyAdaptiveLayout();
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (mIsFullscreen) {
                onExitFullscreen();
                return true;
            }

            if (mNativePlayerView != null && mNativePlayerView.getVisibility() == View.VISIBLE) {
                hideNativePlayer();
                return true;
            }

            if (mWebView != null && mWebView.canGoBack()) {
                mWebView.goBack();
                return true;
            }

            // Double back exit handling for TV and root level
            long now = System.currentTimeMillis();
            if (now - mLastBackPressTime < DOUBLE_BACK_DELAY_MS) {
                finish();
                return true;
            }
            mLastBackPressTime = now;
            Toast.makeText(this, "Press back again to exit Batman", Toast.LENGTH_SHORT).show();
            return true;
        }

        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mNativePlayerView != null && mNativePlayerView.getVisibility() == View.VISIBLE) {
            mNativePlayerView.pause();
        }
        if (mWebView != null) {
            mWebView.onPause();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWebView != null) {
            mWebView.onResume();
        }
    }

    @Override
    protected void onDestroy() {
        if (mNativePlayerView != null) {
            mNativePlayerView.stop();
        }
        if (mWebView != null) {
            mWebView.destroy();
        }
        super.onDestroy();
    }
}
