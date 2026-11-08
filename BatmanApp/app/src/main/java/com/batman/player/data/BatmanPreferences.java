package com.batman.player.data;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Color;

import com.batman.player.model.Bookmark;
import com.batman.player.model.Profile;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class BatmanPreferences {

    private static final String PREF_NAME = "batman_universal_prefs";

    private static final String KEY_ONBOARDING_DONE = "onboarding_done";
    private static final String KEY_HOME_URL = "home_url";
    private static final String KEY_PROFILE_NAME = "profile_name";
    private static final String KEY_PROFILE_AVATAR = "profile_avatar";
    private static final String KEY_THEME = "theme_key";
    private static final String KEY_ACCENT = "accent_color";
    private static final String KEY_LAYOUT_MODE = "layout_mode";
    private static final String KEY_USER_AGENT_MODE = "user_agent_mode";
    private static final String KEY_ASPECT_RATIO = "aspect_ratio";
    private static final String KEY_HW_ACCEL = "hw_accel";
    private static final String KEY_BOOKMARKS = "bookmarks_json";
    private static final String KEY_HISTORY = "history_json";
    private static final String KEY_PLAYER_ENGINE = "player_engine";
    private static final String KEY_SEEK_DURATION = "seek_duration_seconds";

    public static final String PLAYER_EXP = "exp_player";
    public static final String PLAYER_WEBSITE = "website_default";
    public static final int DEFAULT_SEEK_SECONDS = 10;

    public static final String DEFAULT_URL = "https://archive.org/details/movies";
    public static final String THEME_MIDNIGHT = "midnight";
    public static final String THEME_OCEAN = "ocean";
    public static final String THEME_FOREST = "forest";
    public static final String THEME_LAVENDER = "lavender";
    public static final String THEME_GRAPHITE = "graphite";
    public static final String THEME_AMOLED = "amoled";
    public static final String THEME_CYBERPUNK = "cyberpunk";

    public static final int DEFAULT_ACCENT = Color.parseColor("#3D9BE9");

    private final SharedPreferences mPrefs;

    public BatmanPreferences(Context context) {
        mPrefs = context.getApplicationContext().getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
    }

    public boolean isOnboardingDone() {
        return mPrefs.getBoolean(KEY_ONBOARDING_DONE, false);
    }

    public void setOnboardingDone(boolean done) {
        mPrefs.edit().putBoolean(KEY_ONBOARDING_DONE, done).apply();
    }

    public String getHomeUrl() {
        return mPrefs.getString(KEY_HOME_URL, DEFAULT_URL);
    }

    public void setHomeUrl(String url) {
        if (url == null || url.trim().isEmpty()) {
            url = DEFAULT_URL;
        } else {
            url = url.trim();
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }
        mPrefs.edit().putString(KEY_HOME_URL, url).apply();
    }

    public Profile getProfile() {
        String name = mPrefs.getString(KEY_PROFILE_NAME, "Batman");
        int avatar = mPrefs.getInt(KEY_PROFILE_AVATAR, 0);
        return new Profile(name, avatar);
    }

    public void saveProfile(Profile profile) {
        if (profile == null) return;
        mPrefs.edit()
            .putString(KEY_PROFILE_NAME, profile.getName())
            .putInt(KEY_PROFILE_AVATAR, profile.getAvatarId())
            .apply();
    }

    public String getTheme() {
        return mPrefs.getString(KEY_THEME, THEME_MIDNIGHT);
    }

    public void setTheme(String theme) {
        mPrefs.edit().putString(KEY_THEME, theme).apply();
    }

    public int getAccentColor() {
        return mPrefs.getInt(KEY_ACCENT, DEFAULT_ACCENT);
    }

    public void setAccentColor(int color) {
        mPrefs.edit().putInt(KEY_ACCENT, color).apply();
    }

    public String getLayoutMode() {
        return mPrefs.getString(KEY_LAYOUT_MODE, "auto");
    }

    public void setLayoutMode(String mode) {
        mPrefs.edit().putString(KEY_LAYOUT_MODE, mode).apply();
    }

    public String getUserAgentMode() {
        return mPrefs.getString(KEY_USER_AGENT_MODE, "auto");
    }

    public void setUserAgentMode(String mode) {
        mPrefs.edit().putString(KEY_USER_AGENT_MODE, mode).apply();
    }

    public int getAspectRatioMode() {
        return mPrefs.getInt(KEY_ASPECT_RATIO, 0); // 0=Fit, 1=Fill, 2=16:9, 3=Stretch
    }

    public void setAspectRatioMode(int mode) {
        mPrefs.edit().putInt(KEY_ASPECT_RATIO, mode).apply();
    }

    public boolean isHardwareAccelerationEnabled() {
        return mPrefs.getBoolean(KEY_HW_ACCEL, true);
    }

    public void setHardwareAccelerationEnabled(boolean enabled) {
        mPrefs.edit().putBoolean(KEY_HW_ACCEL, enabled).apply();
    }

    public String getPlayerEngine() {
        return mPrefs.getString(KEY_PLAYER_ENGINE, PLAYER_EXP);
    }

    public void setPlayerEngine(String engine) {
        mPrefs.edit().putString(KEY_PLAYER_ENGINE, engine).apply();
    }

    public boolean isExpPlayerEnabled() {
        return PLAYER_EXP.equals(getPlayerEngine());
    }

    public int getSeekDurationSeconds() {
        return mPrefs.getInt(KEY_SEEK_DURATION, DEFAULT_SEEK_SECONDS);
    }

    public void setSeekDurationSeconds(int seconds) {
        mPrefs.edit().putInt(KEY_SEEK_DURATION, seconds).apply();
    }

    // Bookmarks Management
    public List<Bookmark> getBookmarks() {
        List<Bookmark> list = new ArrayList<>();
        String jsonStr = mPrefs.getString(KEY_BOOKMARKS, null);
        if (jsonStr == null || jsonStr.isEmpty()) {
            // Default starter bookmarks
            list.add(new Bookmark("Internet Archive Movies", "https://archive.org/details/movies"));
            list.add(new Bookmark("Public Domain Movies", "https://publicdomainmovie.net/"));
            list.add(new Bookmark("Open Culture Films", "https://www.openculture.com/freemoviesonline"));
            return list;
        }
        try {
            JSONArray arr = new JSONArray(jsonStr);
            for (int i = 0; i < arr.length(); i++) {
                Bookmark b = Bookmark.fromJson(arr.getJSONObject(i));
                if (b != null) list.add(b);
            }
        } catch (JSONException ignored) {}
        return list;
    }

    public void saveBookmarks(List<Bookmark> bookmarks) {
        JSONArray arr = new JSONArray();
        if (bookmarks != null) {
            for (Bookmark b : bookmarks) {
                arr.put(b.toJson());
            }
        }
        mPrefs.edit().putString(KEY_BOOKMARKS, arr.toString()).apply();
    }

    public void addBookmark(String title, String url) {
        List<Bookmark> list = getBookmarks();
        // Avoid duplicate URLs
        for (Bookmark b : list) {
            if (b.getUrl().equalsIgnoreCase(url)) return;
        }
        list.add(0, new Bookmark(title, url));
        saveBookmarks(list);
    }

    public void removeBookmark(String url) {
        List<Bookmark> list = getBookmarks();
        List<Bookmark> updated = new ArrayList<>();
        for (Bookmark b : list) {
            if (!b.getUrl().equalsIgnoreCase(url)) {
                updated.add(b);
            }
        }
        saveBookmarks(updated);
    }

    // Browsing History
    public List<String> getHistory() {
        List<String> list = new ArrayList<>();
        String jsonStr = mPrefs.getString(KEY_HISTORY, null);
        if (jsonStr != null && !jsonStr.isEmpty()) {
            try {
                JSONArray arr = new JSONArray(jsonStr);
                for (int i = 0; i < arr.length(); i++) {
                    list.add(arr.getString(i));
                }
            } catch (JSONException ignored) {}
        }
        return list;
    }

    public void addHistory(String url) {
        if (url == null || url.isEmpty() || url.equals("about:blank")) return;
        List<String> list = getHistory();
        list.remove(url);
        list.add(0, url);
        if (list.size() > 50) {
            list = list.subList(0, 50);
        }
        JSONArray arr = new JSONArray(list);
        mPrefs.edit().putString(KEY_HISTORY, arr.toString()).apply();
    }

    public void clearHistory() {
        mPrefs.edit().remove(KEY_HISTORY).apply();
    }

    public void resetAll() {
        mPrefs.edit().clear().apply();
    }
}
