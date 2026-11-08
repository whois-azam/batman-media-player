package com.batman.player.web;

import android.view.View;
import android.webkit.WebChromeClient;

public class BatmanWebChromeClient extends WebChromeClient {

    public interface FullscreenCallback {
        void onEnterFullscreen(View view, CustomViewCallback callback);
        void onExitFullscreen();
        void onProgressChanged(int progress);
        void onReceivedTitle(String title);
    }

    private final FullscreenCallback mCallback;
    private View mCustomView;
    private CustomViewCallback mCustomViewCallback;

    public BatmanWebChromeClient(FullscreenCallback callback) {
        mCallback = callback;
    }

    @Override
    public void onProgressChanged(android.webkit.WebView view, int newProgress) {
        super.onProgressChanged(view, newProgress);
        if (mCallback != null) {
            mCallback.onProgressChanged(newProgress);
        }
    }

    @Override
    public void onReceivedTitle(android.webkit.WebView view, String title) {
        super.onReceivedTitle(view, title);
        if (mCallback != null) {
            mCallback.onReceivedTitle(title);
        }
    }

    @Override
    public void onShowCustomView(View view, CustomViewCallback callback) {
        if (mCustomView != null) {
            callback.onCustomViewHidden();
            return;
        }
        mCustomView = view;
        mCustomViewCallback = callback;
        if (mCallback != null) {
            mCallback.onEnterFullscreen(view, callback);
        }
    }

    @Override
    public void onHideCustomView() {
        if (mCustomView == null) return;
        if (mCallback != null) {
            mCallback.onExitFullscreen();
        }
        if (mCustomViewCallback != null) {
            mCustomViewCallback.onCustomViewHidden();
            mCustomViewCallback = null;
        }
        mCustomView = null;
    }

    public boolean isFullscreen() {
        return mCustomView != null;
    }
}
