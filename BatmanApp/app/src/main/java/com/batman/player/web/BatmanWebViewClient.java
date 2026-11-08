package com.batman.player.web;

import android.content.Context;
import android.graphics.Bitmap;
import android.net.Uri;
import android.net.http.SslError;
import android.webkit.SslErrorHandler;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

public class BatmanWebViewClient extends WebViewClient {

    public interface WebEventListener {
        void onPageStarted(String url);
        void onPageFinished(String url);
        void onPageError(String failingUrl, String description);
        void onPageSslError(String url);
        void onDirectMediaDetected(String mediaUrl);
    }

    private final WebEventListener mListener;

    // Performance, Polyfill & Universal Video Interceptor injection
    private static final String STEALTH_AND_PERF_JS = 
        "(function() {" +
        "  if (typeof globalThis === 'undefined') { window.globalThis = window; }" +
        "  if (typeof queueMicrotask === 'undefined') { window.queueMicrotask = function(cb) { Promise.resolve().then(cb); }; }" +
        "  try { Object.defineProperty(navigator, 'webdriver', { get: () => undefined }); } catch(e) {}" +
        "  if (!window.chrome) { window.chrome = { runtime: {} }; }" +
        "  var sid = 'batman-perf-css';" +
        "  if (!document.getElementById(sid)) {" +
        "    var s = document.createElement('style');" +
        "    s.id = sid;" +
        "    s.textContent = '* { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +" +
        "                    'img { content-visibility: auto; }';" +
        "    if (document.head) { document.head.appendChild(s); }" +
        "  }" +
        "  if (window.BatmanBridge && !window.__batman_hooked) {" +
        "    window.__batman_hooked = true;" +
        "    function extractVideoUrl(video) {" +
        "      if (!video) return null;" +
        "      var src = video.currentSrc || video.src;" +
        "      if (!src) {" +
        "        var sources = video.getElementsByTagName('source');" +
        "        for (var i = 0; i < sources.length; i++) {" +
        "          if (sources[i].src) { src = sources[i].src; break; }" +
        "        }" +
        "      }" +
        "      return src;" +
        "    }" +
        "    function handleVideoPlayback(video) {" +
        "      var src = extractVideoUrl(video);" +
        "      if (src && src.indexOf('blob:') !== 0 && src.indexOf('data:') !== 0) {" +
        "        var title = document.title || 'EXP PLAYER Video';" +
        "        var cur = video.currentTime || 0;" +
        "        try {" +
        "          video.pause();" +
        "          video.muted = true;" +
        "        } catch(e) {}" +
        "        window.BatmanBridge.onVideoDetected(src, title, cur);" +
        "        return true;" +
        "      }" +
        "      return false;" +
        "    }" +
        "    var origPlay = HTMLMediaElement.prototype.play;" +
        "    HTMLMediaElement.prototype.play = function() {" +
        "      if (this instanceof HTMLVideoElement) {" +
        "        var intercepted = handleVideoPlayback(this);" +
        "        if (intercepted) { return Promise.resolve(); }" +
        "      }" +
        "      return origPlay.apply(this, arguments);" +
        "    };" +
        "    var observer = new MutationObserver(function(mutations) {" +
        "      var videos = document.getElementsByTagName('video');" +
        "      for (var i = 0; i < videos.length; i++) {" +
        "        var v = videos[i];" +
        "        if (!v.__batman_bound) {" +
        "          v.__batman_bound = true;" +
        "          v.addEventListener('playing', function() { handleVideoPlayback(this); });" +
        "          v.addEventListener('play', function() { handleVideoPlayback(this); });" +
        "          if (!v.paused && v.readyState >= 2) {" +
        "            handleVideoPlayback(v);" +
        "          }" +
        "        }" +
        "      }" +
        "    });" +
        "    if (document.documentElement) {" +
        "      observer.observe(document.documentElement, { childList: true, subtree: true });" +
        "    }" +
        "    setTimeout(function() {" +
        "      var videos = document.getElementsByTagName('video');" +
        "      var iframes = document.getElementsByTagName('iframe');" +
        "      if (videos.length === 0 && iframes.length === 0) {" +
        "        window.BatmanBridge.onNonVideoPageDetected();" +
        "      }" +
        "    }, 4500);" +
        "  }" +
        "})();";

    public BatmanWebViewClient(WebEventListener listener) {
        mListener = listener;
    }

    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
        if (request != null && request.getUrl() != null) {
            WebResourceResponse resp = handleChunkIntercept(view.getContext(), request.getUrl().toString());
            if (resp != null) return resp;
        }
        return super.shouldInterceptRequest(view, request);
    }

    @Override
    public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
        WebResourceResponse resp = handleChunkIntercept(view.getContext(), url);
        if (resp != null) return resp;
        return super.shouldInterceptRequest(view, url);
    }

    private WebResourceResponse handleChunkIntercept(Context context, String url) {
        if (url == null || !url.contains("/_next/static/chunks/")) return null;
        try {
            Uri uri = Uri.parse(url);
            String path = uri.getPath();
            if (path == null) return null;
            String filename = path.substring(path.lastIndexOf('/') + 1);
            if (filename.isEmpty()) return null;

            InputStream is = context.getAssets().open("chunks/" + filename);
            return new WebResourceResponse("application/javascript", "utf-8", is);
        } catch (IOException e) {
            return null;
        }
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        return handleUrl(view, request.getUrl().toString());
    }

    @Override
    public boolean shouldOverrideUrlLoading(WebView view, String url) {
        return handleUrl(view, url);
    }

    private boolean handleUrl(WebView view, String url) {
        if (url == null) return false;

        String lower = url.toLowerCase(Locale.ROOT);

        // Direct media detection
        if (isDirectMediaUrl(lower)) {
            if (mListener != null) {
                mListener.onDirectMediaDetected(url);
                return true; // handled by native player
            }
        }

        Uri uri = Uri.parse(url);
        String host = uri.getHost();
        if (host == null) return true;
        host = host.toLowerCase(Locale.ROOT);

        // Block known malicious ad redirect / scam schemes
        if (host.contains("adsterra") || host.contains("popads") || host.contains("propeller") ||
            host.contains("clickadu") || host.contains("traffic") || host.contains("captcha") ||
            host.contains("robot") || host.contains("push") || host.contains("notify") || 
            host.contains("adserver") || host.contains("trk") || host.contains("track")) {
            return true; // Block ad hijack
        }

        // Allow web schemes
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return false;
        }

        // Block dangerous / non-web schemes (intent:, market:, tel:, mailto:)
        return true;
    }

    public static boolean isDirectMediaUrl(String url) {
        if (url == null) return false;
        String u = url.toLowerCase(Locale.ROOT);
        return u.endsWith(".mp4") || u.endsWith(".mkv") || u.endsWith(".m3u8") ||
               u.endsWith(".mpd") || u.endsWith(".webm") || u.endsWith(".avi") ||
               u.endsWith(".mov") || u.endsWith(".flv") || u.endsWith(".ts") ||
               u.contains(".m3u8?") || u.contains(".mpd?") || u.contains(".mp4?");
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
        if (view != null) {
            view.evaluateJavascript(STEALTH_AND_PERF_JS, null);
        }
        if (mListener != null) {
            mListener.onPageStarted(url);
        }
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        if (view != null) {
            view.evaluateJavascript(STEALTH_AND_PERF_JS, null);
        }
        if (mListener != null) {
            mListener.onPageFinished(url);
        }
    }

    @Override
    public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
        super.onReceivedError(view, request, error);
        if (request != null && request.isForMainFrame()) {
            int code = (error != null) ? error.getErrorCode() : 0;
            String url = request.getUrl() != null ? request.getUrl().toString() : "";
            if (isFatalNetworkError(code)) {
                String desc = (error != null && error.getDescription() != null) ? error.getDescription().toString() : "Connection failed";
                if (mListener != null) {
                    mListener.onPageError(url, desc);
                }
            }
        }
    }

    @Override
    public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        super.onReceivedError(view, errorCode, description, failingUrl);
        if (isFatalNetworkError(errorCode) && view != null && failingUrl != null) {
            String current = view.getUrl();
            if (current == null || failingUrl.equals(current)) {
                if (mListener != null) {
                    mListener.onPageError(failingUrl, description);
                }
            }
        }
    }

    private boolean isFatalNetworkError(int errorCode) {
        return errorCode == ERROR_HOST_LOOKUP || errorCode == ERROR_CONNECT || errorCode == ERROR_TIMEOUT;
    }

    @Override
    public void onReceivedSslError(WebView view, SslErrorHandler handler, SslError error) {
        // Proceed on SSL errors to support older TV firmware and emulators with outdated root CA bundles
        if (handler != null) {
            handler.proceed();
        }
    }
}
