package com.batman.player.device;

public final class DeviceCategory {
    public static final int PHONE = 0;
    public static final int TABLET = 1;
    public static final int TV = 2;
    public static final int FOLDABLE = 3;
    public static final int CHROMEBOOK_DESKTOP = 4;

    private DeviceCategory() {}

    public static String getLabel(int category) {
        switch (category) {
            case PHONE: return "Phone";
            case TABLET: return "Tablet";
            case TV: return "Television";
            case FOLDABLE: return "Foldable";
            case CHROMEBOOK_DESKTOP: return "Chromebook / Desktop";
            default: return "Unknown";
        }
    }
}
