package com.batman.player.theme;

import android.graphics.Color;

import com.batman.player.data.BatmanPreferences;

public class ThemeManager {

    public static class Palette {
        public final int bg;
        public final int header;
        public final int card;
        public final int textPrimary;
        public final int textSecondary;
        public final int textMuted;
        public final int border;
        public final int accent;

        public Palette(int bg, int header, int card, int textPrimary, int textSecondary, int textMuted, int border, int accent) {
            this.bg = bg;
            this.header = header;
            this.card = card;
            this.textPrimary = textPrimary;
            this.textSecondary = textSecondary;
            this.textMuted = textMuted;
            this.border = border;
            this.accent = accent;
        }
    }

    public static final int[] PRESET_ACCENTS = {
        Color.parseColor("#3D9BE9"), // Sky Blue
        Color.parseColor("#38A3A5"), // Soft Teal
        Color.parseColor("#2ECC71"), // Mint Green
        Color.parseColor("#E67E22"), // Amber Gold
        Color.parseColor("#9B59B6"), // Electric Purple
        Color.parseColor("#E74C3C")  // Crimson Red
    };

    public static final String[] PRESET_ACCENT_NAMES = {
        "Sky Blue",
        "Soft Teal",
        "Mint Green",
        "Amber Gold",
        "Electric Purple",
        "Crimson Red"
    };

    public static Palette getPalette(BatmanPreferences prefs) {
        String theme = prefs.getTheme();
        int customAccent = prefs.getAccentColor();

        int bg;
        int header;
        int card;
        int textPrimary = Color.parseColor("#F0F2F5");
        int textSecondary = Color.parseColor("#9AA4B2");
        int textMuted = Color.parseColor("#637083");
        int border = Color.parseColor("#252D3A");

        if (BatmanPreferences.THEME_OCEAN.equals(theme)) {
            bg = Color.parseColor("#0A141D");
            header = Color.parseColor("#12202C");
            card = Color.parseColor("#182A3A");
            border = Color.parseColor("#20384D");
        } else if (BatmanPreferences.THEME_FOREST.equals(theme)) {
            bg = Color.parseColor("#0D1812");
            header = Color.parseColor("#14241B");
            card = Color.parseColor("#1C3226");
            border = Color.parseColor("#254233");
        } else if (BatmanPreferences.THEME_LAVENDER.equals(theme)) {
            bg = Color.parseColor("#15121D");
            header = Color.parseColor("#1E1A29");
            card = Color.parseColor("#292437");
            border = Color.parseColor("#38314B");
        } else if (BatmanPreferences.THEME_GRAPHITE.equals(theme)) {
            bg = Color.parseColor("#171615");
            header = Color.parseColor("#23211F");
            card = Color.parseColor("#2F2C2A");
            border = Color.parseColor("#3F3B37");
        } else if (BatmanPreferences.THEME_AMOLED.equals(theme)) {
            bg = Color.parseColor("#000000");
            header = Color.parseColor("#0A0A0A");
            card = Color.parseColor("#141414");
            border = Color.parseColor("#242424");
            textPrimary = Color.WHITE;
        } else if (BatmanPreferences.THEME_CYBERPUNK.equals(theme)) {
            bg = Color.parseColor("#0D0818");
            header = Color.parseColor("#170E2A");
            card = Color.parseColor("#22153D");
            border = Color.parseColor("#3A2368");
            textPrimary = Color.parseColor("#F9F5FF");
        } else {
            // Default: Midnight Slate
            bg = Color.parseColor("#10141A");
            header = Color.parseColor("#181E26");
            card = Color.parseColor("#1E2530");
            border = Color.parseColor("#283240");
        }

        return new Palette(bg, header, card, textPrimary, textSecondary, textMuted, border, customAccent);
    }
}
