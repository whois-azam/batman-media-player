package com.batman.player.views;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
import android.text.format.DateFormat;
import android.util.AttributeSet;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class BatClockView extends LinearLayout implements Runnable {

    private TextView mTimeView;
    private TextView mDateView;
    private final Handler mHandler = new Handler(Looper.getMainLooper());
    private boolean mIsRunning = false;

    private SimpleDateFormat mTimeFormat;
    private SimpleDateFormat mDateFormat;

    private final BroadcastReceiver mTimezoneReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            updateFormats();
            updateTime();
        }
    };

    public BatClockView(Context context) {
        super(context);
        init(context);
    }

    public BatClockView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context);
    }

    private void init(Context context) {
        setOrientation(VERTICAL);
        setGravity(Gravity.CENTER_VERTICAL | Gravity.END);

        mTimeView = new TextView(context);
        mTimeView.setTextSize(14f);
        mTimeView.setTextColor(android.graphics.Color.WHITE);
        mTimeView.setGravity(Gravity.END);
        mTimeView.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        addView(mTimeView);

        mDateView = new TextView(context);
        mDateView.setTextSize(10f);
        mDateView.setTextColor(android.graphics.Color.parseColor("#9AA4B2"));
        mDateView.setGravity(Gravity.END);
        addView(mDateView);

        updateFormats();
        updateTime();
    }

    public void setTextColor(int primaryColor, int secondaryColor) {
        if (mTimeView != null) {
            mTimeView.setTextColor(primaryColor);
        }
        if (mDateView != null) {
            mDateView.setTextColor(secondaryColor);
        }
    }

    private void updateFormats() {
        boolean is24 = DateFormat.is24HourFormat(getContext());
        mTimeFormat = new SimpleDateFormat(is24 ? "HH:mm" : "h:mm a", Locale.getDefault());
        mDateFormat = new SimpleDateFormat("EEE, MMM d", Locale.getDefault());
    }

    private void updateTime() {
        Date now = new Date();
        if (mTimeView != null && mTimeFormat != null) {
            mTimeView.setText(mTimeFormat.format(now));
        }
        if (mDateView != null && mDateFormat != null) {
            mDateView.setText(mDateFormat.format(now));
        }
    }

    public void startUpdates() {
        if (!mIsRunning) {
            mIsRunning = true;
            IntentFilter filter = new IntentFilter();
            filter.addAction(Intent.ACTION_TIME_TICK);
            filter.addAction(Intent.ACTION_TIME_CHANGED);
            filter.addAction(Intent.ACTION_TIMEZONE_CHANGED);
            getContext().registerReceiver(mTimezoneReceiver, filter);

            updateTime();
            scheduleNextTick();
        }
    }

    public void stopUpdates() {
        if (mIsRunning) {
            mIsRunning = false;
            try {
                getContext().unregisterReceiver(mTimezoneReceiver);
            } catch (Exception ignored) {}
            mHandler.removeCallbacks(this);
        }
    }

    private void scheduleNextTick() {
        if (!mIsRunning) return;
        long now = System.currentTimeMillis();
        long delay = 60000 - (now % 60000) + 50;
        mHandler.postDelayed(this, delay);
    }

    @Override
    public void run() {
        if (mIsRunning) {
            updateTime();
            scheduleNextTick();
        }
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        startUpdates();
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        stopUpdates();
    }
}
