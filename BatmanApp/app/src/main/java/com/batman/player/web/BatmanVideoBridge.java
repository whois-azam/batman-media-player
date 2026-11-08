package com.batman.player.web;

import android.webkit.JavascriptInterface;

public class BatmanVideoBridge {

    public interface VideoDetectionListener {
        void onVideoDetected(String mediaUrl, String title, float currentTime);
        void onNonVideoPageDetected();
    }

    private final VideoDetectionListener mListener;

    public BatmanVideoBridge(VideoDetectionListener listener) {
        mListener = listener;
    }

    @JavascriptInterface
    public void onVideoDetected(String mediaUrl, String title, float currentTime) {
        if (mListener != null) {
            mListener.onVideoDetected(mediaUrl, title, currentTime);
        }
    }

    @JavascriptInterface
    public void onNonVideoPageDetected() {
        if (mListener != null) {
            mListener.onNonVideoPageDetected();
        }
    }
}
