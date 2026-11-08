package com.batman.player.dialogs;

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
import android.widget.Button;
import android.widget.EditText;
import android.widget.GridLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.batman.player.R;
import com.batman.player.data.BatmanPreferences;
import com.batman.player.model.Profile;
import com.batman.player.views.AvatarView;

public class ProfileDialog extends Dialog {

    public interface ProfileListener {
        void onProfileUpdated(Profile profile);
    }

    private final BatmanPreferences mPrefs;
    private final ProfileListener mListener;
    private int mSelectedAvatarId = 0;
    private AvatarView[] mAvatarViews = new AvatarView[8];

    public ProfileDialog(Context context, BatmanPreferences prefs, ProfileListener listener) {
        super(context, R.style.Theme_Batman_Dialog);
        mPrefs = prefs;
        mListener = listener;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);

        Window window = getWindow();
        if (window != null) {
            window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
            window.setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        }

        LinearLayout root = new LinearLayout(getContext());
        root.setOrientation(LinearLayout.VERTICAL);
        root.setGravity(Gravity.CENTER);
        root.setBackgroundColor(Color.parseColor("#CC080C10"));
        root.setPadding(dp(20), dp(20), dp(20), dp(20));

        // Card Container
        LinearLayout card = new LinearLayout(getContext());
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(dp(20), dp(20), dp(20), dp(20));

        GradientDrawable cardBg = new GradientDrawable();
        cardBg.setColor(Color.parseColor("#141A22"));
        cardBg.setCornerRadius(dp(12));
        cardBg.setStroke(dp(1), Color.parseColor("#252E3B"));
        card.setBackground(cardBg);

        LinearLayout.LayoutParams cardLp = new LinearLayout.LayoutParams(dp(480), ViewGroup.LayoutParams.WRAP_CONTENT);
        cardLp.gravity = Gravity.CENTER;
        card.setLayoutParams(cardLp);

        // Header Row
        LinearLayout header = new LinearLayout(getContext());
        header.setOrientation(LinearLayout.HORIZONTAL);
        header.setGravity(Gravity.CENTER_VERTICAL);
        header.setPadding(0, 0, 0, dp(14));

        TextView tvTitle = new TextView(getContext());
        tvTitle.setText("Batman Profile");
        tvTitle.setTextColor(Color.WHITE);
        tvTitle.setTextSize(18f);
        tvTitle.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        LinearLayout.LayoutParams titleLp = new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f);
        header.addView(tvTitle, titleLp);

        Button btnClose = new Button(getContext());
        btnClose.setText("Close");
        btnClose.setTextColor(Color.parseColor("#9AA4B2"));
        btnClose.setTextSize(13f);
        btnClose.setAllCaps(false);
        btnClose.setBackground(createButtonBg(Color.parseColor("#1F2733"), Color.parseColor("#2E3A4B")));
        btnClose.setPadding(dp(14), dp(6), dp(14), dp(6));
        btnClose.setOnClickListener(v -> dismiss());
        header.addView(btnClose);

        card.addView(header);

        Profile current = mPrefs.getProfile();
        mSelectedAvatarId = current.getAvatarId();

        // Profile Name Input
        TextView lblName = new TextView(getContext());
        lblName.setText("Display Name");
        lblName.setTextColor(Color.parseColor("#9AA4B2"));
        lblName.setTextSize(12f);
        lblName.setPadding(0, dp(6), 0, dp(4));
        card.addView(lblName);

        final EditText inputName = new EditText(getContext());
        inputName.setText(current.getName());
        inputName.setTextColor(Color.WHITE);
        inputName.setTextSize(15f);
        inputName.setSingleLine(true);
        inputName.setBackground(createButtonBg(Color.parseColor("#1C2430"), Color.parseColor("#2E3B4D")));
        inputName.setPadding(dp(12), dp(10), dp(12), dp(10));
        card.addView(inputName);

        // Avatar Picker Header
        TextView lblAvatar = new TextView(getContext());
        lblAvatar.setText("Choose Avatar Symbol");
        lblAvatar.setTextColor(Color.parseColor("#9AA4B2"));
        lblAvatar.setTextSize(12f);
        lblAvatar.setPadding(0, dp(16), 0, dp(8));
        card.addView(lblAvatar);

        // 4x2 Grid for Avatars
        GridLayout grid = new GridLayout(getContext());
        grid.setColumnCount(4);
        grid.setRowCount(2);
        grid.setAlignmentMode(GridLayout.ALIGN_BOUNDS);

        final TextView txtAvatarName = new TextView(getContext());
        txtAvatarName.setText(AvatarView.AVATAR_NAMES[mSelectedAvatarId]);
        txtAvatarName.setTextColor(mPrefs.getAccentColor());
        txtAvatarName.setTextSize(13f);
        txtAvatarName.setGravity(Gravity.CENTER);
        txtAvatarName.setPadding(0, dp(4), 0, dp(14));

        for (int i = 0; i < 8; i++) {
            final int index = i;
            AvatarView av = new AvatarView(getContext());
            av.setAvatarId(index);
            av.setAccentColor(mPrefs.getAccentColor());
            av.setSelected(index == mSelectedAvatarId);
            av.setFocusable(true);
            av.setClickable(true);

            GridLayout.LayoutParams glp = new GridLayout.LayoutParams();
            glp.width = dp(56);
            glp.height = dp(56);
            glp.setMargins(dp(6), dp(6), dp(6), dp(6));
            av.setLayoutParams(glp);

            av.setOnClickListener(v -> {
                mSelectedAvatarId = index;
                for (int j = 0; j < 8; j++) {
                    mAvatarViews[j].setSelected(j == mSelectedAvatarId);
                }
                txtAvatarName.setText(AvatarView.AVATAR_NAMES[mSelectedAvatarId]);
            });

            mAvatarViews[i] = av;
            grid.addView(av);
        }

        card.addView(grid);
        card.addView(txtAvatarName);

        // Save Button
        Button btnSave = new Button(getContext());
        btnSave.setText("Save Changes");
        btnSave.setTextColor(Color.WHITE);
        btnSave.setTextSize(15f);
        btnSave.setAllCaps(false);
        btnSave.setBackground(createButtonBg(mPrefs.getAccentColor(), Color.TRANSPARENT));
        btnSave.setPadding(dp(16), dp(12), dp(16), dp(12));
        btnSave.setOnClickListener(v -> {
            String name = inputName.getText().toString().trim();
            if (name.isEmpty()) name = "Batman";
            Profile updated = new Profile(name, mSelectedAvatarId);
            mPrefs.saveProfile(updated);
            if (mListener != null) {
                mListener.onProfileUpdated(updated);
            }
            Toast.makeText(getContext(), "Profile updated", Toast.LENGTH_SHORT).show();
            dismiss();
        });
        card.addView(btnSave);

        root.addView(card);
        setContentView(root);
    }

    private GradientDrawable createButtonBg(int fillColor, int strokeColor) {
        GradientDrawable gd = new GradientDrawable();
        gd.setColor(fillColor);
        gd.setCornerRadius(dp(6));
        if (strokeColor != Color.TRANSPARENT) {
            gd.setStroke(dp(1), strokeColor);
        }
        return gd;
    }

    private int dp(int value) {
        float density = getContext().getResources().getDisplayMetrics().density;
        return (int) (value * density + 0.5f);
    }
}
