package com.batman.player.device;

public final class NavigationMode {
    public static final int BOTTOM_NAV = 0;
    public static final int NAVIGATION_RAIL = 1;
    public static final int TV_HEADER = 2;

    private NavigationMode() {}

    public static String getLabel(int mode) {
        switch (mode) {
            case BOTTOM_NAV: return "Bottom Navigation";
            case NAVIGATION_RAIL: return "Navigation Rail";
            case TV_HEADER: return "TV Header";
            default: return "Auto";
        }
    }
}
