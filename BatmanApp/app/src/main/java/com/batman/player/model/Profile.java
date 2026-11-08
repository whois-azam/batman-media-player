package com.batman.player.model;

import org.json.JSONException;
import org.json.JSONObject;

public class Profile {
    private String mName;
    private int mAvatarId;
    private long mCreatedAt;

    public Profile(String name, int avatarId) {
        this(name, avatarId, System.currentTimeMillis());
    }

    public Profile(String name, int avatarId, long createdAt) {
        mName = (name != null && !name.trim().isEmpty()) ? name.trim() : "Batman";
        mAvatarId = Math.max(0, Math.min(7, avatarId));
        mCreatedAt = createdAt;
    }

    public String getName() {
        return mName;
    }

    public void setName(String name) {
        mName = (name != null && !name.trim().isEmpty()) ? name.trim() : "Batman";
    }

    public int getAvatarId() {
        return mAvatarId;
    }

    public void setAvatarId(int avatarId) {
        mAvatarId = Math.max(0, Math.min(7, avatarId));
    }

    public long getCreatedAt() {
        return mCreatedAt;
    }

    public JSONObject toJson() {
        JSONObject obj = new JSONObject();
        try {
            obj.put("name", mName);
            obj.put("avatarId", mAvatarId);
            obj.put("createdAt", mCreatedAt);
        } catch (JSONException ignored) {}
        return obj;
    }

    public static Profile fromJson(String jsonStr) {
        if (jsonStr == null || jsonStr.isEmpty()) {
            return new Profile("Batman", 0);
        }
        try {
            JSONObject obj = new JSONObject(jsonStr);
            String name = obj.optString("name", "Batman");
            int avatarId = obj.optInt("avatarId", 0);
            long createdAt = obj.optLong("createdAt", System.currentTimeMillis());
            return new Profile(name, avatarId, createdAt);
        } catch (JSONException e) {
            return new Profile("Batman", 0);
        }
    }
}
