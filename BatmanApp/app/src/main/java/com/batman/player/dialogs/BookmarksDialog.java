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
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

import com.batman.player.R;
import com.batman.player.data.BatmanPreferences;
import com.batman.player.model.Bookmark;

import java.util.List;

public class BookmarksDialog extends Dialog {

    public interface BookmarkListener {
        void onBookmarkSelected(String url);
        void onBookmarkAdded(String title, String url);
    }

    private final BatmanPreferences mPrefs;
    private final String mCurrentUrl;
    private final String mCurrentTitle;
    private final BookmarkListener mListener;

    private LinearLayout mListContainer;

    public BookmarksDialog(Context context, BatmanPreferences prefs, String currentUrl, String currentTitle, BookmarkListener listener) {
        super(context, R.style.Theme_Batman_Dialog);
        mPrefs = prefs;
        mCurrentUrl = currentUrl;
        mCurrentTitle = currentTitle;
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

        LinearLayout.LayoutParams cardLp = new LinearLayout.LayoutParams(dp(540), dp(480));
        cardLp.gravity = Gravity.CENTER;
        card.setLayoutParams(cardLp);

        // Header Row
        LinearLayout header = new LinearLayout(getContext());
        header.setOrientation(LinearLayout.HORIZONTAL);
        header.setGravity(Gravity.CENTER_VERTICAL);
        header.setPadding(0, 0, 0, dp(14));

        TextView tvTitle = new TextView(getContext());
        tvTitle.setText("Bookmarks & Saved Streams");
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

        // Action Buttons Row
        LinearLayout actionRow = new LinearLayout(getContext());
        actionRow.setOrientation(LinearLayout.HORIZONTAL);
        actionRow.setWeightSum(2f);

        Button btnAddCurrent = new Button(getContext());
        btnAddCurrent.setText("+ Bookmark Page");
        btnAddCurrent.setTextColor(Color.WHITE);
        btnAddCurrent.setTextSize(13f);
        btnAddCurrent.setAllCaps(false);
        btnAddCurrent.setBackground(createButtonBg(mPrefs.getAccentColor(), Color.TRANSPARENT));
        btnAddCurrent.setPadding(dp(12), dp(8), dp(12), dp(8));
        btnAddCurrent.setOnClickListener(v -> promptAddCurrent());
        LinearLayout.LayoutParams btnAddLp = new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f);
        btnAddLp.setMarginEnd(dp(6));
        actionRow.addView(btnAddCurrent, btnAddLp);

        Button btnOpenUrl = new Button(getContext());
        btnOpenUrl.setText("Open Custom URL");
        btnOpenUrl.setTextColor(Color.WHITE);
        btnOpenUrl.setTextSize(13f);
        btnOpenUrl.setAllCaps(false);
        btnOpenUrl.setBackground(createButtonBg(Color.parseColor("#263242"), Color.parseColor("#3B4B61")));
        btnOpenUrl.setPadding(dp(12), dp(8), dp(12), dp(8));
        btnOpenUrl.setOnClickListener(v -> promptOpenUrl());
        LinearLayout.LayoutParams btnOpenLp = new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f);
        btnOpenLp.setMarginStart(dp(6));
        actionRow.addView(btnOpenUrl, btnOpenLp);

        card.addView(actionRow);

        // Divider
        View div = new View(getContext());
        div.setBackgroundColor(Color.parseColor("#252E3B"));
        LinearLayout.LayoutParams divLp = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, dp(1));
        divLp.setMargins(0, dp(14), 0, dp(14));
        card.addView(div, divLp);

        // Scrollable List
        ScrollView scroll = new ScrollView(getContext());
        scroll.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        mListContainer = new LinearLayout(getContext());
        mListContainer.setOrientation(LinearLayout.VERTICAL);
        scroll.addView(mListContainer);

        card.addView(scroll);
        root.addView(card);

        setContentView(root);
        loadBookmarks();
    }

    private void loadBookmarks() {
        mListContainer.removeAllViews();
        List<Bookmark> bookmarks = mPrefs.getBookmarks();

        if (bookmarks.isEmpty()) {
            TextView emptyTv = new TextView(getContext());
            emptyTv.setText("No bookmarks saved yet. Add your favorite websites or direct streams.");
            emptyTv.setTextColor(Color.parseColor("#78879B"));
            emptyTv.setTextSize(14f);
            emptyTv.setGravity(Gravity.CENTER);
            emptyTv.setPadding(dp(20), dp(40), dp(20), dp(40));
            mListContainer.addView(emptyTv);
            return;
        }

        for (final Bookmark b : bookmarks) {
            LinearLayout row = new LinearLayout(getContext());
            row.setOrientation(LinearLayout.HORIZONTAL);
            row.setGravity(Gravity.CENTER_VERTICAL);
            row.setPadding(dp(12), dp(10), dp(12), dp(10));
            row.setBackground(createButtonBg(Color.parseColor("#18202B"), Color.parseColor("#263242")));
            row.setFocusable(true);
            row.setClickable(true);

            LinearLayout.LayoutParams rowLp = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            rowLp.setMargins(0, 0, 0, dp(8));
            row.setLayoutParams(rowLp);

            // Text Info
            LinearLayout textCol = new LinearLayout(getContext());
            textCol.setOrientation(LinearLayout.VERTICAL);
            LinearLayout.LayoutParams textLp = new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1f);

            TextView titleTv = new TextView(getContext());
            titleTv.setText(b.getTitle());
            titleTv.setTextColor(Color.WHITE);
            titleTv.setTextSize(14f);
            titleTv.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
            textCol.addView(titleTv);

            TextView urlTv = new TextView(getContext());
            urlTv.setText(b.getUrl());
            urlTv.setTextColor(Color.parseColor("#7E8E9F"));
            urlTv.setTextSize(12f);
            urlTv.setSingleLine(true);
            textCol.addView(urlTv);

            row.addView(textCol, textLp);

            // Delete Button
            Button btnDel = new Button(getContext());
            btnDel.setText("X");
            btnDel.setTextColor(Color.parseColor("#FF6B6B"));
            btnDel.setTextSize(12f);
            btnDel.setBackground(createButtonBg(Color.parseColor("#291515"), Color.parseColor("#4D2020")));
            btnDel.setPadding(dp(10), dp(4), dp(10), dp(4));
            btnDel.setOnClickListener(v -> {
                mPrefs.removeBookmark(b.getUrl());
                loadBookmarks();
            });
            row.addView(btnDel);

            row.setOnClickListener(v -> {
                dismiss();
                if (mListener != null) {
                    mListener.onBookmarkSelected(b.getUrl());
                }
            });

            mListContainer.addView(row);
        }
    }

    private void promptAddCurrent() {
        if (mCurrentUrl == null || mCurrentUrl.isEmpty() || mCurrentUrl.startsWith("file://")) {
            Toast.makeText(getContext(), "Cannot bookmark local or empty page", Toast.LENGTH_SHORT).show();
            return;
        }

        final EditText titleInput = new EditText(getContext());
        titleInput.setText(mCurrentTitle != null && !mCurrentTitle.isEmpty() ? mCurrentTitle : "Saved Stream");
        titleInput.setTextColor(Color.WHITE);
        titleInput.setSingleLine(true);

        new AlertDialog.Builder(getContext())
            .setTitle("Add Bookmark")
            .setMessage(mCurrentUrl)
            .setView(titleInput)
            .setPositiveButton("Add", (dialog, which) -> {
                String title = titleInput.getText().toString().trim();
                if (title.isEmpty()) title = "Bookmark";
                mPrefs.addBookmark(title, mCurrentUrl);
                loadBookmarks();
                if (mListener != null) {
                    mListener.onBookmarkAdded(title, mCurrentUrl);
                }
            })
            .setNegativeButton("Cancel", null)
            .show();
    }

    private void promptOpenUrl() {
        final EditText urlInput = new EditText(getContext());
        urlInput.setHint("https://... or search query");
        urlInput.setTextColor(Color.WHITE);
        urlInput.setHintTextColor(Color.parseColor("#637083"));
        urlInput.setSingleLine(true);

        new AlertDialog.Builder(getContext())
            .setTitle("Open URL or Stream")
            .setView(urlInput)
            .setPositiveButton("Open", (dialog, which) -> {
                String input = urlInput.getText().toString().trim();
                if (!input.isEmpty()) {
                    String target;
                    if (input.startsWith("http://") || input.startsWith("https://")) {
                        target = input;
                    } else if (input.contains(".") && !input.contains(" ")) {
                        target = "https://" + input;
                    } else {
                        target = "https://duckduckgo.com/?q=" + android.net.Uri.encode(input);
                    }
                    dismiss();
                    if (mListener != null) {
                        mListener.onBookmarkSelected(target);
                    }
                }
            })
            .setNegativeButton("Cancel", null)
            .show();
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
