package com.batman.player.onboarding;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.ViewFlipper;

import com.batman.player.MainActivity;
import com.batman.player.R;
import com.batman.player.data.BatmanPreferences;
import com.batman.player.model.Profile;
import com.batman.player.theme.ThemeManager;
import com.batman.player.views.AvatarView;

public class OnboardingActivity extends Activity {

    private ViewFlipper mFlipper;
    private TextView mStepIndicator;
    private Button mBtnBack;
    private Button mBtnNext;

    // Step 1 Views
    private EditText mInputUrl;
    private Button mBtnPresetArchive;
    private Button mBtnPresetPublicDomain;
    private TextView mTxtUrlError;

    // Step 2 Views (Player Engine)
    private LinearLayout mCardPlayerExp;
    private LinearLayout mCardPlayerWebsite;
    private TextView mTxtPlayerExpTitle;
    private TextView mTxtPlayerExpDesc;
    private TextView mTxtPlayerWebsiteTitle;
    private TextView mTxtPlayerWebsiteDesc;
    private String mSelectedPlayerEngine = BatmanPreferences.PLAYER_EXP;

    // Step 3 Views (Profile)
    private EditText mInputProfileName;
    private AvatarView[] mAvatarViews = new AvatarView[8];
    private TextView mTxtSelectedAvatarName;
    private int mSelectedAvatarId = 0;

    // Step 4 Views (Personalization)
    private Button mBtnThemeMidnight;
    private Button mBtnThemeOcean;
    private Button mBtnThemeForest;
    private Button mBtnThemeAmoled;
    private LinearLayout mLayoutAccentPicker;
    private String mSelectedTheme = BatmanPreferences.THEME_MIDNIGHT;
    private int mSelectedAccent = ThemeManager.PRESET_ACCENTS[0];

    private BatmanPreferences mPrefs;
    private int mCurrentStep = 0; // 0, 1, 2, 3

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_onboarding);

        mPrefs = new BatmanPreferences(this);

        initViews();
        setupStep1();
        setupStepPlayer();
        setupStepProfile();
        setupStepPersonalization();

        updateStepUi();
    }

    private void initViews() {
        mFlipper = findViewById(R.id.onboarding_flipper);
        mStepIndicator = findViewById(R.id.onboarding_step_indicator);
        mBtnBack = findViewById(R.id.btn_onboarding_back);
        mBtnNext = findViewById(R.id.btn_onboarding_next);

        mBtnBack.setOnClickListener(v -> navigateStep(-1));
        mBtnNext.setOnClickListener(v -> onNextClicked());
    }

    private void setupStep1() {
        mInputUrl = findViewById(R.id.input_website_url);
        mBtnPresetArchive = findViewById(R.id.btn_preset_archive);
        mBtnPresetPublicDomain = findViewById(R.id.btn_preset_publicdomain);
        mTxtUrlError = findViewById(R.id.txt_url_error);

        mBtnPresetArchive.setOnClickListener(v -> {
            mInputUrl.setText("https://archive.org/details/movies");
            mTxtUrlError.setVisibility(View.GONE);
        });

        mBtnPresetPublicDomain.setOnClickListener(v -> {
            mInputUrl.setText("https://publicdomainmovie.net/");
            mTxtUrlError.setVisibility(View.GONE);
        });
    }

    private void setupStepPlayer() {
        mCardPlayerExp = findViewById(R.id.card_player_exp);
        mCardPlayerWebsite = findViewById(R.id.card_player_website);
        mTxtPlayerExpTitle = findViewById(R.id.txt_player_exp_title);
        mTxtPlayerExpDesc = findViewById(R.id.txt_player_exp_desc);
        mTxtPlayerWebsiteTitle = findViewById(R.id.txt_player_website_title);
        mTxtPlayerWebsiteDesc = findViewById(R.id.txt_player_website_desc);

        mCardPlayerExp.setOnClickListener(v -> selectPlayerEngine(BatmanPreferences.PLAYER_EXP));
        mCardPlayerWebsite.setOnClickListener(v -> selectPlayerEngine(BatmanPreferences.PLAYER_WEBSITE));

        selectPlayerEngine(mSelectedPlayerEngine);
    }

    private void selectPlayerEngine(String engine) {
        mSelectedPlayerEngine = engine;
        boolean isExp = BatmanPreferences.PLAYER_EXP.equals(engine);

        float density = getResources().getDisplayMetrics().density;
        int cornerRadius = (int) (10 * density);

        // Highlight EXP Player Card
        GradientDrawable expBg = new GradientDrawable();
        expBg.setCornerRadius(cornerRadius);
        if (isExp) {
            expBg.setColor(Color.parseColor("#1B293A"));
            expBg.setStroke((int) (2 * density), mSelectedAccent);
            if (mTxtPlayerExpTitle != null) mTxtPlayerExpTitle.setTextColor(Color.WHITE);
            if (mTxtPlayerExpDesc != null) mTxtPlayerExpDesc.setTextColor(Color.parseColor("#D0D9E5"));
        } else {
            expBg.setColor(Color.parseColor("#151C24"));
            expBg.setStroke((int) (1 * density), Color.parseColor("#263242"));
            if (mTxtPlayerExpTitle != null) mTxtPlayerExpTitle.setTextColor(Color.parseColor("#8F9CAE"));
            if (mTxtPlayerExpDesc != null) mTxtPlayerExpDesc.setTextColor(Color.parseColor("#5F6B7A"));
        }
        if (mCardPlayerExp != null) mCardPlayerExp.setBackground(expBg);

        // Highlight Website Player Card
        GradientDrawable webBg = new GradientDrawable();
        webBg.setCornerRadius(cornerRadius);
        if (!isExp) {
            webBg.setColor(Color.parseColor("#1B293A"));
            webBg.setStroke((int) (2 * density), mSelectedAccent);
            if (mTxtPlayerWebsiteTitle != null) mTxtPlayerWebsiteTitle.setTextColor(Color.WHITE);
            if (mTxtPlayerWebsiteDesc != null) mTxtPlayerWebsiteDesc.setTextColor(Color.parseColor("#D0D9E5"));
        } else {
            webBg.setColor(Color.parseColor("#151C24"));
            webBg.setStroke((int) (1 * density), Color.parseColor("#263242"));
            if (mTxtPlayerWebsiteTitle != null) mTxtPlayerWebsiteTitle.setTextColor(Color.parseColor("#8F9CAE"));
            if (mTxtPlayerWebsiteDesc != null) mTxtPlayerWebsiteDesc.setTextColor(Color.parseColor("#5F6B7A"));
        }
        if (mCardPlayerWebsite != null) mCardPlayerWebsite.setBackground(webBg);
    }

    private void setupStepProfile() {
        mInputProfileName = findViewById(R.id.input_profile_name);
        mTxtSelectedAvatarName = findViewById(R.id.txt_selected_avatar_name);

        int[] avatarViewIds = {
            R.id.avatar_0, R.id.avatar_1, R.id.avatar_2, R.id.avatar_3,
            R.id.avatar_4, R.id.avatar_5, R.id.avatar_6, R.id.avatar_7
        };

        for (int i = 0; i < 8; i++) {
            final int id = i;
            mAvatarViews[i] = findViewById(avatarViewIds[i]);
            mAvatarViews[i].setAvatarId(id);
            mAvatarViews[i].setAccentColor(mSelectedAccent);
            mAvatarViews[i].setSelectedRing(i == mSelectedAvatarId);
            mAvatarViews[i].setOnClickListener(v -> selectAvatar(id));
        }
    }

    private void selectAvatar(int id) {
        mSelectedAvatarId = id;
        for (int i = 0; i < 8; i++) {
            mAvatarViews[i].setSelectedRing(i == mSelectedAvatarId);
        }
        mTxtSelectedAvatarName.setText("Selected: " + AvatarView.AVATAR_NAMES[mSelectedAvatarId]);
    }

    private void setupStepPersonalization() {
        mBtnThemeMidnight = findViewById(R.id.btn_theme_midnight);
        mBtnThemeOcean = findViewById(R.id.btn_theme_ocean);
        mBtnThemeForest = findViewById(R.id.btn_theme_forest);
        mBtnThemeAmoled = findViewById(R.id.btn_theme_amoled);
        mLayoutAccentPicker = findViewById(R.id.layout_accent_picker);

        mBtnThemeMidnight.setOnClickListener(v -> selectTheme(BatmanPreferences.THEME_MIDNIGHT));
        mBtnThemeOcean.setOnClickListener(v -> selectTheme(BatmanPreferences.THEME_OCEAN));
        mBtnThemeForest.setOnClickListener(v -> selectTheme(BatmanPreferences.THEME_FOREST));
        mBtnThemeAmoled.setOnClickListener(v -> selectTheme(BatmanPreferences.THEME_AMOLED));

        updateThemeButtons();

        // Create 6 accent dots
        int dotSize = (int) (40 * getResources().getDisplayMetrics().density);
        int dotMargin = (int) (6 * getResources().getDisplayMetrics().density);

        for (int i = 0; i < ThemeManager.PRESET_ACCENTS.length; i++) {
            final int accentColor = ThemeManager.PRESET_ACCENTS[i];
            View dot = new View(this);
            LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(dotSize, dotSize);
            lp.setMargins(dotMargin, dotMargin, dotMargin, dotMargin);
            dot.setLayoutParams(lp);

            GradientDrawable gd = new GradientDrawable();
            gd.setShape(GradientDrawable.OVAL);
            gd.setColor(accentColor);
            if (accentColor == mSelectedAccent) {
                gd.setStroke(4, Color.WHITE);
            }
            dot.setBackground(gd);
            dot.setFocusable(true);

            dot.setOnClickListener(v -> selectAccent(accentColor));
            mLayoutAccentPicker.addView(dot);
        }
    }

    private void selectTheme(String theme) {
        mSelectedTheme = theme;
        updateThemeButtons();
    }

    private void updateThemeButtons() {
        float density = getResources().getDisplayMetrics().density;
        int cornerRadius = (int) (8 * density);

        updateThemeButton(mBtnThemeMidnight, BatmanPreferences.THEME_MIDNIGHT.equals(mSelectedTheme),
            "Midnight Slate (Charcoal & Cool Slate)", density, cornerRadius);
        updateThemeButton(mBtnThemeOcean, BatmanPreferences.THEME_OCEAN.equals(mSelectedTheme),
            "Calm Ocean (Deep Blue & Teal)", density, cornerRadius);
        updateThemeButton(mBtnThemeForest, BatmanPreferences.THEME_FOREST.equals(mSelectedTheme),
            "Emerald Forest (Spruce & Sage)", density, cornerRadius);
        updateThemeButton(mBtnThemeAmoled, BatmanPreferences.THEME_AMOLED.equals(mSelectedTheme),
            "Pure Black (AMOLED High Contrast)", density, cornerRadius);
    }

    private void updateThemeButton(Button btn, boolean isSelected, String label, float density, int cornerRadius) {
        if (btn == null) return;
        GradientDrawable gd = new GradientDrawable();
        gd.setCornerRadius(cornerRadius);
        if (isSelected) {
            gd.setColor(Color.parseColor("#1B293A"));
            gd.setStroke((int) (2 * density), mSelectedAccent);
            btn.setText("✓  " + label);
            btn.setTextColor(Color.WHITE);
        } else {
            gd.setColor(Color.parseColor("#151C24"));
            gd.setStroke((int) (1 * density), Color.parseColor("#263242"));
            btn.setText("   " + label);
            btn.setTextColor(Color.parseColor("#8F9CAE"));
        }
        btn.setBackground(gd);
    }

    private void selectAccent(int color) {
        mSelectedAccent = color;
        for (int i = 0; i < mLayoutAccentPicker.getChildCount(); i++) {
            View child = mLayoutAccentPicker.getChildAt(i);
            int childColor = ThemeManager.PRESET_ACCENTS[i];
            GradientDrawable gd = new GradientDrawable();
            gd.setShape(GradientDrawable.OVAL);
            gd.setColor(childColor);
            if (childColor == mSelectedAccent) {
                gd.setStroke(4, Color.WHITE);
            }
            child.setBackground(gd);
        }
        for (int i = 0; i < 8; i++) {
            mAvatarViews[i].setAccentColor(mSelectedAccent);
        }
        mBtnNext.setBackgroundColor(mSelectedAccent);
        updateThemeButtons();
        selectPlayerEngine(mSelectedPlayerEngine);
    }

    private void onNextClicked() {
        if (mCurrentStep == 0) {
            // Validate URL
            String rawUrl = mInputUrl.getText().toString().trim();
            if (rawUrl.isEmpty()) {
                mTxtUrlError.setText("Please enter a valid website link.");
                mTxtUrlError.setVisibility(View.VISIBLE);
                return;
            }

            if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
                rawUrl = "https://" + rawUrl;
            }

            try {
                Uri parsed = Uri.parse(rawUrl);
                if (parsed.getHost() == null || parsed.getHost().isEmpty()) {
                    mTxtUrlError.setText("Invalid address. Please enter a valid domain (e.g. archive.org).");
                    mTxtUrlError.setVisibility(View.VISIBLE);
                    return;
                }
            } catch (Exception e) {
                mTxtUrlError.setText("Error parsing URL.");
                mTxtUrlError.setVisibility(View.VISIBLE);
                return;
            }

            mTxtUrlError.setVisibility(View.GONE);
            mPrefs.setHomeUrl(rawUrl);
            navigateStep(1);
        } else if (mCurrentStep == 1) {
            // Save Player Engine
            mPrefs.setPlayerEngine(mSelectedPlayerEngine);
            navigateStep(1);
        } else if (mCurrentStep == 2) {
            // Save Profile
            String name = mInputProfileName.getText().toString().trim();
            if (name.isEmpty()) name = "Batman";
            mPrefs.saveProfile(new Profile(name, mSelectedAvatarId));
            navigateStep(1);
        } else if (mCurrentStep == 3) {
            // Save Personalization and finish
            mPrefs.setTheme(mSelectedTheme);
            mPrefs.setAccentColor(mSelectedAccent);
            mPrefs.setOnboardingDone(true);

            // Launch Main Activity
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
            finish();
        }
    }

    private void navigateStep(int direction) {
        int next = mCurrentStep + direction;
        if (next < 0 || next > 3) return;

        mCurrentStep = next;
        mFlipper.setDisplayedChild(mCurrentStep);
        updateStepUi();
    }

    private void updateStepUi() {
        mBtnBack.setVisibility(mCurrentStep > 0 ? View.VISIBLE : View.INVISIBLE);
        if (mCurrentStep == 0) {
            mStepIndicator.setText("STEP 1 OF 4: WEBSITE SETUP");
            mBtnNext.setText("Next");
        } else if (mCurrentStep == 1) {
            mStepIndicator.setText("STEP 2 OF 4: VIDEO PLAYER ENGINE");
            mBtnNext.setText("Next");
        } else if (mCurrentStep == 2) {
            mStepIndicator.setText("STEP 3 OF 4: PROFILE SETUP");
            mBtnNext.setText("Next");
        } else if (mCurrentStep == 3) {
            mStepIndicator.setText("STEP 4 OF 4: PERSONALIZATION");
            mBtnNext.setText("Launch Batman");
        }
    }
}
