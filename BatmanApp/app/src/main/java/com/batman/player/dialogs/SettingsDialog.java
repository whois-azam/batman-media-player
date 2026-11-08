package com.batman.player.dialogs;

import android.app.AlertDialog;
import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.webkit.CookieManager;
import android.webkit.WebStorage;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import com.batman.player.R;
import com.batman.player.data.BatmanPreferences;
import com.batman.player.device.DeviceManager;
import com.batman.player.theme.ThemeManager;

public class SettingsDialog extends Dialog {

    public interface SettingsListener {
        void onThemeChanged();
        void onLayoutModeChanged();
        void onHomeUrlChanged(String newUrl);
        void onReloadRequested();
        void onClearCacheRequested();
    }

    private final BatmanPreferences mPrefs;
    private final SettingsListener mListener;
    private final DeviceManager mDeviceManager;

    private LinearLayout mOptionsContainer;
    private Button mCatAppearance;
    private Button mCatInterface;
    private Button mCatBrowsing;
    private Button mCatPlayback;
    private Button mCatAbout;

    private int mSelectedCategory = 0;

    public SettingsDialog(Context context, BatmanPreferences prefs, DeviceManager deviceManager, SettingsListener listener) {
        super(context, R.style.Theme_Batman_Dialog);
        mPrefs = prefs;
        mDeviceManager = deviceManager;
        mListener = listener;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.dialog_settings);

        Window window = getWindow();
        if (window != null) {
            window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            window.setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        }

        mCatAppearance = findViewById(R.id.cat_btn_appearance);
        mCatInterface = findViewById(R.id.cat_btn_interface);
        mCatBrowsing = findViewById(R.id.cat_btn_browsing);
        mCatPlayback = findViewById(R.id.cat_btn_playback);
        mOptionsContainer = findViewById(R.id.settings_options_container);

        Button btnClose = findViewById(R.id.btn_settings_close);
        if (btnClose != null) {
            btnClose.setOnClickListener(v -> dismiss());
        }

        if (mCatAppearance != null) {
            mCatAppearance.setOnClickListener(v -> selectCategory(0));
        }
        if (mCatInterface != null) {
            mCatInterface.setOnClickListener(v -> selectCategory(1));
        }
        if (mCatBrowsing != null) {
            mCatBrowsing.setOnClickListener(v -> selectCategory(2));
        }
        if (mCatPlayback != null) {
            mCatPlayback.setOnClickListener(v -> selectCategory(3));
        }

        selectCategory(0);
        if (mCatAppearance != null) {
            mCatAppearance.requestFocus();
        }
    }

    private void selectCategory(int index) {
        mSelectedCategory = index;
        if (mCatAppearance != null) mCatAppearance.setSelected(index == 0);
        if (mCatInterface != null) mCatInterface.setSelected(index == 1);
        if (mCatBrowsing != null) mCatBrowsing.setSelected(index == 2);
        if (mCatPlayback != null) mCatPlayback.setSelected(index == 3);

        if (mOptionsContainer == null) return;
        mOptionsContainer.removeAllViews();

        if (index == 0) {
            populateAppearanceOptions();
        } else if (index == 1) {
            populateInterfaceOptions();
        } else if (index == 2) {
            populateBrowsingOptions();
        } else if (index == 3) {
            populatePlaybackOptions();
        }
    }

    private void populatePlaybackOptions() {
        addHeader("VIDEO PLAYBACK ENGINE");

        String currentEngine = mPrefs.getPlayerEngine();

        addOption("EXP PLAYER (Recommended - Built on ExoPlayer architecture)",
            BatmanPreferences.PLAYER_EXP.equals(currentEngine), () -> {
            mPrefs.setPlayerEngine(BatmanPreferences.PLAYER_EXP);
            selectCategory(3);
        });

        addOption("Website Default Player (In-Page Standard Browser Player)",
            BatmanPreferences.PLAYER_WEBSITE.equals(currentEngine), () -> {
            mPrefs.setPlayerEngine(BatmanPreferences.PLAYER_WEBSITE);
            selectCategory(3);
        });

        addHeader("SEEK STEP DURATION (FORWARD & REWIND)");

        int currentSeek = mPrefs.getSeekDurationSeconds();

        addOption("5 Seconds Skip", currentSeek == 5, () -> {
            mPrefs.setSeekDurationSeconds(5);
            selectCategory(3);
        });

        addOption("10 Seconds Skip (Recommended)", currentSeek == 10, () -> {
            mPrefs.setSeekDurationSeconds(10);
            selectCategory(3);
        });

        addOption("15 Seconds Skip", currentSeek == 15, () -> {
            mPrefs.setSeekDurationSeconds(15);
            selectCategory(3);
        });

        addOption("30 Seconds Skip", currentSeek == 30, () -> {
            mPrefs.setSeekDurationSeconds(30);
            selectCategory(3);
        });
    }

    private void populateAppearanceOptions() {
        addHeader("APPLICATION THEME");

        String currentTheme = mPrefs.getTheme();

        addOption("Midnight Slate (Default)", BatmanPreferences.THEME_MIDNIGHT.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_MIDNIGHT);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("Calm Ocean (Deep Slate & Teal)", BatmanPreferences.THEME_OCEAN.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_OCEAN);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("Emerald Forest (Dark Green & Sage)", BatmanPreferences.THEME_FOREST.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_FOREST);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("Lavender Dusk (Slate & Violet)", BatmanPreferences.THEME_LAVENDER.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_LAVENDER);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("Warm Graphite (Warm Slate & Amber)", BatmanPreferences.THEME_GRAPHITE.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_GRAPHITE);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("AMOLED Pure Black (High Contrast)", BatmanPreferences.THEME_AMOLED.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_AMOLED);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addOption("Cyberpunk Neon (Dark Violet & Vivid Cyan)", BatmanPreferences.THEME_CYBERPUNK.equals(currentTheme), () -> {
            mPrefs.setTheme(BatmanPreferences.THEME_CYBERPUNK);
            if (mListener != null) mListener.onThemeChanged();
            selectCategory(0);
        });

        addHeader("ACCENT COLOR");

        int currentAccent = mPrefs.getAccentColor();
        for (int i = 0; i < ThemeManager.PRESET_ACCENTS.length; i++) {
            final int accentColor = ThemeManager.PRESET_ACCENTS[i];
            final String name = ThemeManager.PRESET_ACCENT_NAMES[i];
            boolean isSelected = (currentAccent == accentColor);
            addOption(name + (isSelected ? " (Active)" : ""), isSelected, () -> {
                mPrefs.setAccentColor(accentColor);
                if (mListener != null) mListener.onThemeChanged();
                selectCategory(0);
            });
        }
    }

    private void populateInterfaceOptions() {
        addHeader("LAYOUT ADAPTATION MODE");

        String layoutMode = mPrefs.getLayoutMode();

        addOption("Auto (Adapts to Device & Screen)", "auto".equals(layoutMode), () -> {
            mPrefs.setLayoutMode("auto");
            if (mListener != null) mListener.onLayoutModeChanged();
            selectCategory(1);
        });

        addOption("Phone Mode (Bottom Bar + Top URL)", "phone".equals(layoutMode), () -> {
            mPrefs.setLayoutMode("phone");
            if (mListener != null) mListener.onLayoutModeChanged();
            selectCategory(1);
        });

        addOption("Tablet Mode (Navigation Rail)", "tablet".equals(layoutMode), () -> {
            mPrefs.setLayoutMode("tablet");
            if (mListener != null) mListener.onLayoutModeChanged();
            selectCategory(1);
        });

        addOption("TV Mode (Television Top Header)", "tv".equals(layoutMode), () -> {
            mPrefs.setLayoutMode("tv");
            if (mListener != null) mListener.onLayoutModeChanged();
            selectCategory(1);
        });

        addHeader("MEDIA ASPECT RATIO");
        int aspect = mPrefs.getAspectRatioMode();
        addOption("Fit to Screen (Letterbox)", aspect == 0, () -> {
            mPrefs.setAspectRatioMode(0);
            selectCategory(1);
        });
        addOption("Zoom Fill (Crop Bars)", aspect == 1, () -> {
            mPrefs.setAspectRatioMode(1);
            selectCategory(1);
        });
        addOption("16:9 Widescreen Fixed", aspect == 2, () -> {
            mPrefs.setAspectRatioMode(2);
            selectCategory(1);
        });
        addOption("Stretch to Fill Screen", aspect == 3, () -> {
            mPrefs.setAspectRatioMode(3);
            selectCategory(1);
        });
    }

    private void populateBrowsingOptions() {
        addHeader("DEFAULT WEBSITE");

        String currentUrl = mPrefs.getHomeUrl();
        addActionButton("Set Home URL (" + currentUrl + ")", "Change the initial launch website address", () -> {
            showEditHomeUrlDialog();
        });

        addHeader("CACHE & COOKIES");

        addActionButton("Clear Web Cache", "Purge cached webpage assets and scripts", () -> {
            WebStorage.getInstance().deleteAllData();
            if (mListener != null) mListener.onClearCacheRequested();
            Toast.makeText(getContext(), "Web cache cleared successfully", Toast.LENGTH_SHORT).show();
        });

        addActionButton("Clear Cookies", "Delete all saved session cookies and login states", () -> {
            CookieManager.getInstance().removeAllCookies(null);
            CookieManager.getInstance().flush();
            Toast.makeText(getContext(), "Cookies cleared successfully", Toast.LENGTH_SHORT).show();
        });

        addActionButton("Clear Browsing History", "Clear list of visited website addresses", () -> {
            mPrefs.clearHistory();
            Toast.makeText(getContext(), "Browsing history cleared", Toast.LENGTH_SHORT).show();
        });

        addHeader("DEVICE INFORMATION");
        String summary = mDeviceManager != null ? mDeviceManager.getDeviceSummary() : "Universal Runtime";
        addInfoText("Detected hardware: " + summary);
        addInfoText("Batman Universal Player Version 1.0.0 (Build 1)");
    }

    private void showEditHomeUrlDialog() {
        final EditText input = new EditText(getContext());
        input.setText(mPrefs.getHomeUrl());
        input.setTextColor(Color.WHITE);
        input.setSingleLine(true);

        new AlertDialog.Builder(getContext())
            .setTitle("Set Home URL")
            .setView(input)
            .setPositiveButton("Save", (dialog, which) -> {
                String val = input.getText().toString().trim();
                if (!val.isEmpty()) {
                    mPrefs.setHomeUrl(val);
                    if (mListener != null) mListener.onHomeUrlChanged(mPrefs.getHomeUrl());
                    selectCategory(2);
                }
            })
            .setNegativeButton("Cancel", null)
            .show();
    }

    private void addHeader(String title) {
        TextView tv = new TextView(getContext());
        tv.setText(title);
        tv.setTextColor(Color.parseColor("#9AA4B2"));
        tv.setTextSize(12f);
        tv.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        tv.setPadding(dp(8), dp(16), dp(8), dp(6));
        mOptionsContainer.addView(tv);
    }

    private void addInfoText(String text) {
        TextView tv = new TextView(getContext());
        tv.setText(text);
        tv.setTextColor(Color.parseColor("#A0AEC0"));
        tv.setTextSize(13f);
        tv.setPadding(dp(8), dp(4), dp(8), dp(4));
        mOptionsContainer.addView(tv);
    }

    private void addOption(String title, boolean isSelected, Runnable action) {
        Button btn = new Button(getContext());
        btn.setText((isSelected ? "✓  " : "   ") + title);
        btn.setTextColor(isSelected ? Color.WHITE : Color.parseColor("#9AA4B2"));
        btn.setTextSize(14f);
        btn.setTypeface(isSelected ? android.graphics.Typeface.DEFAULT_BOLD : android.graphics.Typeface.DEFAULT);
        btn.setGravity(Gravity.START | Gravity.CENTER_VERTICAL);
        btn.setPadding(dp(14), dp(12), dp(14), dp(12));
        btn.setAllCaps(false);
        btn.setFocusable(true);

        GradientDrawable bg = new GradientDrawable();
        bg.setColor(isSelected ? Color.parseColor("#1F334A") : Color.parseColor("#161E28"));
        bg.setCornerRadius(dp(8));
        bg.setStroke(isSelected ? dp(2) : dp(1), isSelected ? mPrefs.getAccentColor() : Color.parseColor("#253243"));
        btn.setBackground(bg);

        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        lp.setMargins(dp(4), dp(4), dp(4), dp(4));
        btn.setLayoutParams(lp);

        btn.setOnClickListener(v -> action.run());
        mOptionsContainer.addView(btn);
    }

    private void addActionButton(String title, String subtitle, Runnable action) {
        LinearLayout row = new LinearLayout(getContext());
        row.setOrientation(LinearLayout.VERTICAL);
        row.setPadding(dp(12), dp(10), dp(12), dp(10));
        row.setFocusable(true);
        row.setClickable(true);

        GradientDrawable bg = new GradientDrawable();
        bg.setColor(Color.parseColor("#17202A"));
        bg.setCornerRadius(dp(6));
        bg.setStroke(dp(1), Color.parseColor("#283445"));
        row.setBackground(bg);

        TextView tvTitle = new TextView(getContext());
        tvTitle.setText(title);
        tvTitle.setTextColor(Color.WHITE);
        tvTitle.setTextSize(14f);
        tvTitle.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        row.addView(tvTitle);

        if (subtitle != null && !subtitle.isEmpty()) {
            TextView tvSub = new TextView(getContext());
            tvSub.setText(subtitle);
            tvSub.setTextColor(Color.parseColor("#8C9BAE"));
            tvSub.setTextSize(12f);
            row.addView(tvSub);
        }

        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        lp.setMargins(dp(4), dp(4), dp(4), dp(4));
        row.setLayoutParams(lp);

        row.setOnClickListener(v -> action.run());
        mOptionsContainer.addView(row);
    }

    private int dp(int value) {
        float density = getContext().getResources().getDisplayMetrics().density;
        return (int) (value * density + 0.5f);
    }
}
