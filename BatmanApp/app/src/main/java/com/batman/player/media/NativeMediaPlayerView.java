package com.batman.player.media;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.media.AudioAttributes;
import android.media.AudioFocusRequest;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.os.Looper;
import android.util.AttributeSet;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.VideoView;

import com.batman.player.R;

import java.util.Locale;
import java.util.Map;

public class NativeMediaPlayerView extends FrameLayout implements
        MediaPlayer.OnPreparedListener,
        MediaPlayer.OnCompletionListener,
        MediaPlayer.OnErrorListener,
        MediaPlayer.OnInfoListener,
        AudioManager.OnAudioFocusChangeListener {

    public interface PlayerListener {
        void onCloseRequested();
        void onFullscreenToggleRequested(boolean isFullscreen);
        void onPlaybackError(String error);
    }

    public static final class AspectRatioMode {
        public static final int FIT_CENTER = 0;
        public static final int ZOOM_FILL = 1;
        public static final int STRETCH = 2;
        public static final int SIXTEEN_BY_NINE = 3;

        public static final String[] LABELS = {"Fit", "Fill", "Stretch", "16:9"};

        public static String getLabel(int mode) {
            if (mode >= 0 && mode < LABELS.length) return LABELS[mode];
            return "Fit";
        }
    }

    private VideoView mVideoView;
    private RelativeLayout mControlsOverlay;
    private LinearLayout mTopBar;
    private LinearLayout mCenterControls;
    private LinearLayout mBottomBar;
    private ProgressBar mBufferingBar;

    private TextView mTitleView;
    private ImageButton mBtnClose;
    private ImageButton mBtnAspectRatio;
    private TextView mAspectLabel;

    private ImageButton mBtnRewind;
    private ImageButton mBtnPlayPause;
    private ImageButton mBtnForward;

    private TextView mCurrentTimeView;
    private SeekBar mSeekBar;
    private TextView mDurationView;
    private ImageButton mBtnFullscreen;

    private PlayerListener mListener;
    private AudioManager mAudioManager;
    private AudioFocusRequest mFocusRequest;

    private final Handler mHandler = new Handler(Looper.getMainLooper());
    private boolean mIsControlsVisible = true;
    private boolean mIsDraggingSeekBar = false;
    private boolean mIsFullscreen = false;
    private int mAspectRatioMode = AspectRatioMode.FIT_CENTER;
    private int mSeekDurationSeconds = 10;
    private String mCurrentUrl;
    private int mSavedPosition = 0;

    private final Runnable mHideControlsRunnable = new Runnable() {
        @Override
        public void run() {
            hideControls();
        }
    };

    private final Runnable mProgressUpdateRunnable = new Runnable() {
        @Override
        public void run() {
            updateProgress();
            if (mVideoView != null && mVideoView.isPlaying()) {
                mHandler.postDelayed(this, 500);
            }
        }
    };

    public NativeMediaPlayerView(Context context) {
        super(context);
        init(context);
    }

    public NativeMediaPlayerView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    private void init(Context context) {
        setBackgroundColor(Color.BLACK);
        mAudioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);

        // 1. VideoView
        mVideoView = new VideoView(context);
        LayoutParams vlp = new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT, Gravity.CENTER);
        addView(mVideoView, vlp);

        mVideoView.setOnPreparedListener(this);
        mVideoView.setOnCompletionListener(this);
        mVideoView.setOnErrorListener(this);
        mVideoView.setOnInfoListener(this);

        // 2. Buffering spinner
        mBufferingBar = new ProgressBar(context);
        mBufferingBar.setIndeterminate(true);
        LayoutParams blp = new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT, Gravity.CENTER);
        addView(mBufferingBar, blp);
        mBufferingBar.setVisibility(View.GONE);

        // 3. Custom Controls Overlay
        buildControlsOverlay(context);

        // Touch listener on container to toggle controls
        setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                toggleControls();
            }
        });
    }

    private void buildControlsOverlay(Context context) {
        mControlsOverlay = new RelativeLayout(context);
        mControlsOverlay.setBackgroundColor(Color.parseColor("#4D000000")); // Subtle dark scrim
        addView(mControlsOverlay, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));

        int pad = dp(16);

        // --- TOP BAR ---
        mTopBar = new LinearLayout(context);
        mTopBar.setId(View.generateViewId());
        mTopBar.setOrientation(LinearLayout.HORIZONTAL);
        mTopBar.setGravity(Gravity.CENTER_VERTICAL);
        mTopBar.setPadding(pad, dp(12), pad, dp(12));

        GradientDrawable topBg = new GradientDrawable(
                GradientDrawable.Orientation.TOP_BOTTOM,
                new int[]{Color.parseColor("#CC10141A"), Color.TRANSPARENT}
        );
        mTopBar.setBackground(topBg);

        mBtnClose = createIconButton(context, R.drawable.ic_home, "Close player");
        mBtnClose.setOnClickListener(v -> {
            if (mListener != null) mListener.onCloseRequested();
        });
        mTopBar.addView(mBtnClose);

        mTitleView = new TextView(context);
        mTitleView.setTextColor(Color.WHITE);
        mTitleView.setTextSize(16f);
        mTitleView.setSingleLine(true);
        mTitleView.setPadding(dp(12), 0, dp(12), 0);
        LinearLayout.LayoutParams tlp = new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1f);
        mTopBar.addView(mTitleView, tlp);

        mAspectLabel = new TextView(context);
        mAspectLabel.setTextColor(Color.parseColor("#3D9BE9"));
        mAspectLabel.setTextSize(13f);
        mAspectLabel.setText(AspectRatioMode.getLabel(mAspectRatioMode));
        mAspectLabel.setPadding(dp(8), dp(4), dp(8), dp(4));
        mAspectLabel.setBackground(createButtonBorder());
        mAspectLabel.setFocusable(true);
        mAspectLabel.setOnClickListener(v -> cycleAspectRatio());
        mTopBar.addView(mAspectLabel);

        RelativeLayout.LayoutParams rlpTop = new RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        rlpTop.addRule(RelativeLayout.ALIGN_PARENT_TOP);
        mControlsOverlay.addView(mTopBar, rlpTop);

        // --- CENTER CONTROLS ---
        mCenterControls = new LinearLayout(context);
        mCenterControls.setOrientation(LinearLayout.HORIZONTAL);
        mCenterControls.setGravity(Gravity.CENTER);

        mBtnRewind = createIconButton(context, R.drawable.ic_refresh, "Rewind " + mSeekDurationSeconds + "s");
        mBtnRewind.setOnClickListener(v -> seekRelative(-mSeekDurationSeconds * 1000));
        mCenterControls.addView(mBtnRewind);

        View spacer1 = new View(context);
        mCenterControls.addView(spacer1, new LinearLayout.LayoutParams(dp(24), 1));

        mBtnPlayPause = createIconButton(context, R.drawable.ic_refresh, "Play/Pause");
        mBtnPlayPause.setPadding(dp(16), dp(16), dp(16), dp(16));
        mBtnPlayPause.setOnClickListener(v -> togglePlayPause());
        mCenterControls.addView(mBtnPlayPause);

        View spacer2 = new View(context);
        mCenterControls.addView(spacer2, new LinearLayout.LayoutParams(dp(24), 1));

        mBtnForward = createIconButton(context, R.drawable.ic_refresh, "Forward " + mSeekDurationSeconds + "s");
        mBtnForward.setOnClickListener(v -> seekRelative(mSeekDurationSeconds * 1000));
        mCenterControls.addView(mBtnForward);

        RelativeLayout.LayoutParams rlpCenter = new RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        rlpCenter.addRule(RelativeLayout.CENTER_IN_PARENT);
        mControlsOverlay.addView(mCenterControls, rlpCenter);

        // --- BOTTOM BAR ---
        mBottomBar = new LinearLayout(context);
        mBottomBar.setOrientation(LinearLayout.HORIZONTAL);
        mBottomBar.setGravity(Gravity.CENTER_VERTICAL);
        mBottomBar.setPadding(pad, dp(12), pad, dp(16));

        GradientDrawable botBg = new GradientDrawable(
                GradientDrawable.Orientation.BOTTOM_TOP,
                new int[]{Color.parseColor("#CC10141A"), Color.TRANSPARENT}
        );
        mBottomBar.setBackground(botBg);

        mCurrentTimeView = new TextView(context);
        mCurrentTimeView.setTextColor(Color.WHITE);
        mCurrentTimeView.setTextSize(13f);
        mCurrentTimeView.setText("00:00");
        mBottomBar.addView(mCurrentTimeView);

        mSeekBar = new SeekBar(context);
        mSeekBar.setMax(1000);
        mSeekBar.setPadding(dp(12), 0, dp(12), 0);
        LinearLayout.LayoutParams skLp = new LinearLayout.LayoutParams(0, LayoutParams.WRAP_CONTENT, 1f);
        mBottomBar.addView(mSeekBar, skLp);

        mDurationView = new TextView(context);
        mDurationView.setTextColor(Color.parseColor("#9AA4B2"));
        mDurationView.setTextSize(13f);
        mDurationView.setText("00:00");
        mBottomBar.addView(mDurationView);

        mBtnFullscreen = createIconButton(context, R.drawable.ic_settings, "Toggle fullscreen");
        mBtnFullscreen.setOnClickListener(v -> toggleFullscreen());
        mBottomBar.addView(mBtnFullscreen);

        RelativeLayout.LayoutParams rlpBottom = new RelativeLayout.LayoutParams(
                RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
        rlpBottom.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM);
        mControlsOverlay.addView(mBottomBar, rlpBottom);

        // SeekBar events
        mSeekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                if (fromUser && mVideoView != null) {
                    int duration = mVideoView.getDuration();
                    if (duration > 0) {
                        int newPos = (int) ((progress / 1000f) * duration);
                        mCurrentTimeView.setText(formatTime(newPos));
                    }
                }
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                mIsDraggingSeekBar = true;
                mHandler.removeCallbacks(mHideControlsRunnable);
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                mIsDraggingSeekBar = false;
                if (mVideoView != null) {
                    int duration = mVideoView.getDuration();
                    if (duration > 0) {
                        int newPos = (int) ((seekBar.getProgress() / 1000f) * duration);
                        mVideoView.seekTo(newPos);
                    }
                }
                scheduleControlsHide();
            }
        });
    }

    private ImageButton createIconButton(Context context, int resId, String contentDesc) {
        ImageButton btn = new ImageButton(context);
        btn.setImageResource(resId);
        btn.setContentDescription(contentDesc);
        btn.setBackground(createButtonBorder());
        btn.setPadding(dp(10), dp(10), dp(10), dp(10));
        btn.setScaleType(ImageView.ScaleType.FIT_CENTER);
        btn.setFocusable(true);
        btn.setLayoutParams(new LinearLayout.LayoutParams(dp(44), dp(44)));
        return btn;
    }

    private GradientDrawable createButtonBorder() {
        GradientDrawable gd = new GradientDrawable();
        gd.setColor(Color.parseColor("#331E2530"));
        gd.setCornerRadius(dp(8));
        gd.setStroke(dp(1), Color.parseColor("#4D3D9BE9"));
        return gd;
    }

    public void setSeekDurationSeconds(int seconds) {
        if (seconds > 0) {
            mSeekDurationSeconds = seconds;
            if (mBtnRewind != null) {
                mBtnRewind.setContentDescription("Rewind " + seconds + "s");
            }
            if (mBtnForward != null) {
                mBtnForward.setContentDescription("Forward " + seconds + "s");
            }
        }
    }

    public int getSeekDurationSeconds() {
        return mSeekDurationSeconds;
    }

    public void setPlayerListener(PlayerListener listener) {
        mListener = listener;
    }

    public void playMedia(String url, String title) {
        playMedia(url, title, null, 0);
    }

    public void playMedia(String url, String title, Map<String, String> headers) {
        playMedia(url, title, headers, 0);
    }

    public void playMedia(String url, String title, Map<String, String> headers, int startPositionMs) {
        if (url == null || url.trim().isEmpty()) return;
        mCurrentUrl = url.trim();
        String displayTitle = (title != null && !title.isEmpty()) ? title : "EXP PLAYER";
        mTitleView.setText(displayTitle);
        mBufferingBar.setVisibility(View.VISIBLE);

        requestAudioFocus();
        if (headers != null && !headers.isEmpty()) {
            mVideoView.setVideoURI(Uri.parse(mCurrentUrl), headers);
        } else {
            mVideoView.setVideoURI(Uri.parse(mCurrentUrl));
        }
        if (startPositionMs > 0) {
            mVideoView.seekTo(startPositionMs);
        }
        mVideoView.start();

        showControls();
        scheduleControlsHide();
    }

    public void pause() {
        if (mVideoView != null && mVideoView.isPlaying()) {
            mSavedPosition = mVideoView.getCurrentPosition();
            mVideoView.pause();
        }
    }

    public void resume() {
        if (mVideoView != null && !mVideoView.isPlaying()) {
            requestAudioFocus();
            mVideoView.start();
            mHandler.post(mProgressUpdateRunnable);
        }
    }

    public void stop() {
        if (mVideoView != null) {
            mVideoView.stopPlayback();
        }
        abandonAudioFocus();
        mHandler.removeCallbacksAndMessages(null);
    }

    public void togglePlayPause() {
        if (mVideoView == null) return;
        if (mVideoView.isPlaying()) {
            mVideoView.pause();
        } else {
            requestAudioFocus();
            mVideoView.start();
            mHandler.post(mProgressUpdateRunnable);
        }
        scheduleControlsHide();
    }

    public void seekRelative(int deltaMs) {
        if (mVideoView == null) return;
        int current = mVideoView.getCurrentPosition();
        int target = Math.max(0, Math.min(mVideoView.getDuration(), current + deltaMs));
        mVideoView.seekTo(target);
        updateProgress();
        scheduleControlsHide();
    }

    private void updateProgress() {
        if (mVideoView == null || mIsDraggingSeekBar) return;
        int current = mVideoView.getCurrentPosition();
        int duration = mVideoView.getDuration();

        if (duration > 0) {
            int progress = (int) (((float) current / duration) * 1000);
            mSeekBar.setProgress(progress);
            mCurrentTimeView.setText(formatTime(current));
            mDurationView.setText(formatTime(duration));
        }
    }

    public void cycleAspectRatio() {
        mAspectRatioMode = (mAspectRatioMode + 1) % 4;
        mAspectLabel.setText(AspectRatioMode.getLabel(mAspectRatioMode));
        applyAspectRatio();
        scheduleControlsHide();
    }

    private void applyAspectRatio() {
        LayoutParams lp = (LayoutParams) mVideoView.getLayoutParams();
        if (mAspectRatioMode == AspectRatioMode.ZOOM_FILL) {
            lp.width = LayoutParams.MATCH_PARENT;
            lp.height = LayoutParams.MATCH_PARENT;
        } else if (mAspectRatioMode == AspectRatioMode.STRETCH) {
            lp.width = LayoutParams.MATCH_PARENT;
            lp.height = LayoutParams.MATCH_PARENT;
        } else {
            lp.width = LayoutParams.MATCH_PARENT;
            lp.height = LayoutParams.MATCH_PARENT;
        }
        mVideoView.setLayoutParams(lp);
    }

    public void toggleFullscreen() {
        mIsFullscreen = !mIsFullscreen;
        if (mListener != null) {
            mListener.onFullscreenToggleRequested(mIsFullscreen);
        }
        scheduleControlsHide();
    }

    public void showControls() {
        mIsControlsVisible = true;
        mControlsOverlay.setVisibility(View.VISIBLE);
        scheduleControlsHide();
    }

    public void hideControls() {
        if (mIsDraggingSeekBar) return;
        mIsControlsVisible = false;
        mControlsOverlay.setVisibility(View.GONE);
    }

    public void toggleControls() {
        if (mIsControlsVisible) {
            hideControls();
        } else {
            showControls();
        }
    }

    private void scheduleControlsHide() {
        mHandler.removeCallbacks(mHideControlsRunnable);
        mHandler.postDelayed(mHideControlsRunnable, 4000);
    }

    // Audio Focus Handling
    private void requestAudioFocus() {
        if (mAudioManager == null) return;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            AudioAttributes attrs = new AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_MOVIE)
                    .build();
            mFocusRequest = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
                    .setAudioAttributes(attrs)
                    .setOnAudioFocusChangeListener(this)
                    .build();
            mAudioManager.requestAudioFocus(mFocusRequest);
        } else {
            mAudioManager.requestAudioFocus(this, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN);
        }
    }

    private void abandonAudioFocus() {
        if (mAudioManager == null) return;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && mFocusRequest != null) {
            mAudioManager.abandonAudioFocusRequest(mFocusRequest);
        } else {
            mAudioManager.abandonAudioFocus(this);
        }
    }

    @Override
    public void onAudioFocusChange(int focusChange) {
        if (focusChange == AudioManager.AUDIOFOCUS_LOSS ||
            focusChange == AudioManager.AUDIOFOCUS_LOSS_TRANSIENT) {
            pause();
        } else if (focusChange == AudioManager.AUDIOFOCUS_GAIN) {
            resume();
        }
    }

    // MediaPlayer Callbacks
    @Override
    public void onPrepared(MediaPlayer mp) {
        mBufferingBar.setVisibility(View.GONE);
        mDurationView.setText(formatTime(mp.getDuration()));
        mHandler.post(mProgressUpdateRunnable);
    }

    @Override
    public void onCompletion(MediaPlayer mp) {
        showControls();
        mHandler.removeCallbacks(mProgressUpdateRunnable);
    }

    @Override
    public boolean onError(MediaPlayer mp, int what, int extra) {
        mBufferingBar.setVisibility(View.GONE);
        if (mListener != null) {
            mListener.onPlaybackError("Video error code: " + what + " (extra: " + extra + ")");
        }
        return true;
    }

    @Override
    public boolean onInfo(MediaPlayer mp, int what, int extra) {
        if (what == MediaPlayer.MEDIA_INFO_BUFFERING_START) {
            mBufferingBar.setVisibility(View.VISIBLE);
        } else if (what == MediaPlayer.MEDIA_INFO_BUFFERING_END ||
                   what == MediaPlayer.MEDIA_INFO_VIDEO_RENDERING_START) {
            mBufferingBar.setVisibility(View.GONE);
        }
        return true;
    }

    private String formatTime(int ms) {
        int seconds = (ms / 1000) % 60;
        int minutes = (ms / (1000 * 60)) % 60;
        int hours = ms / (1000 * 60 * 60);
        if (hours > 0) {
            return String.format(Locale.US, "%d:%02d:%02d", hours, minutes, seconds);
        }
        return String.format(Locale.US, "%02d:%02d", minutes, seconds);
    }

    private String extractFilename(String url) {
        try {
            Uri uri = Uri.parse(url);
            String last = uri.getLastPathSegment();
            return (last != null && !last.isEmpty()) ? last : "Media Stream";
        } catch (Exception e) {
            return "Media Stream";
        }
    }

    private int dp(int value) {
        return (int) (value * getResources().getDisplayMetrics().density + 0.5f);
    }
}
