package com.batman.player.model;

import org.json.JSONException;
import org.json.JSONObject;

public class Bookmark {
    private final String mTitle;
    private final String mUrl;
    private final long mAddedAt;

    public Bookmark(String title, String url) {
        this(title, url, System.currentTimeMillis());
    }

    public Bookmark(String title, String url, long addedAt) {
        mTitle = (title != null && !title.trim().isEmpty()) ? title.trim() : "Media";
        mUrl = (url != null) ? url.trim() : "";
        mAddedAt = addedAt;
    }

    public String getTitle() {
        return mTitle;
    }

    public String getUrl() {
        return mUrl;
    }

    public long getAddedAt() {
        return mAddedAt;
    }

    public JSONObject toJson() {
        JSONObject obj = new JSONObject();
        try {
            obj.put("title", mTitle);
            obj.put("url", mUrl);
            obj.put("addedAt", mAddedAt);
        } catch (JSONException ignored) {}
        return obj;
    }

    public static Bookmark fromJson(JSONObject obj) {
        if (obj == null) return null;
        String title = obj.optString("title", "Media");
        String url = obj.optString("url", "");
        long addedAt = obj.optLong("addedAt", System.currentTimeMillis());
        return new Bookmark(title, url, addedAt);
    }
}
