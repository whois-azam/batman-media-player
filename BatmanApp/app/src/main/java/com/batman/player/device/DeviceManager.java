package com.batman.player.device;

import android.app.UiModeManager;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.WindowManager;

public class DeviceManager {

    private final Context mContext;
    private final int mCategory;
    private final int mDefaultNavMode;
    private final boolean mHasTouchscreen;
    private final boolean mIsTelevision;
    private final int mSmallestWidthDp;
    private final int mWidthDp;
    private final int mHeightDp;

    public DeviceManager(Context context) {
        mContext = context.getApplicationContext();
        Configuration config = context.getResources().getConfiguration();
        mSmallestWidthDp = config.smallestScreenWidthDp;
        mWidthDp = config.screenWidthDp;
        mHeightDp = config.screenHeightDp;

        PackageManager pm = mContext.getPackageManager();
        mHasTouchscreen = pm.hasSystemFeature(PackageManager.FEATURE_TOUCHSCREEN);

        UiModeManager uiModeManager = (UiModeManager) mContext.getSystemService(Context.UI_MODE_SERVICE);
        boolean uiModeTv = (uiModeManager != null && 
            uiModeManager.getCurrentModeType() == Configuration.UI_MODE_TYPE_TELEVISION);
        boolean featureLeanback = pm.hasSystemFeature("android.software.leanback");
        mIsTelevision = uiModeTv || featureLeanback || !mHasTouchscreen;

        mCategory = detectCategory();
        mDefaultNavMode = detectNavigationMode();
    }

    private int detectCategory() {
        if (mIsTelevision) {
            return DeviceCategory.TV;
        }

        // Chromebook or Android Desktop check
        boolean isChromeOs = Build.DEVICE != null && Build.DEVICE.matches(".*(cheets|arc).*");
        boolean isPcFeature = Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && 
            mContext.getPackageManager().hasSystemFeature("android.hardware.type.pc");
        if (isChromeOs || isPcFeature) {
            return DeviceCategory.CHROMEBOOK_DESKTOP;
        }

        // Foldable detection: Unfolded screens typically have width >= 600dp and squarish aspect ratio
        float aspectRatio = (float) Math.max(mWidthDp, mHeightDp) / Math.max(1, Math.min(mWidthDp, mHeightDp));
        if (mSmallestWidthDp >= 600 && aspectRatio < 1.45f) {
            return DeviceCategory.FOLDABLE;
        }

        // Tablet: 7 inch (600dp+) or 10 inch (720dp+)
        if (mSmallestWidthDp >= 600) {
            return DeviceCategory.TABLET;
        }

        return DeviceCategory.PHONE;
    }

    private int detectNavigationMode() {
        if (mCategory == DeviceCategory.TV) {
            return NavigationMode.TV_HEADER;
        }
        if (mCategory == DeviceCategory.TABLET || 
            mCategory == DeviceCategory.CHROMEBOOK_DESKTOP || 
            mCategory == DeviceCategory.FOLDABLE) {
            return NavigationMode.NAVIGATION_RAIL;
        }
        return NavigationMode.BOTTOM_NAV;
    }

    public int getCategory() {
        return mCategory;
    }

    public int getNavigationMode() {
        return mDefaultNavMode;
    }

    public boolean isTelevision() {
        return mIsTelevision;
    }

    public boolean isTabletOrLarger() {
        return mCategory == DeviceCategory.TABLET || 
               mCategory == DeviceCategory.CHROMEBOOK_DESKTOP || 
               mCategory == DeviceCategory.FOLDABLE;
    }

    public boolean isLandscape() {
        return mContext.getResources().getConfiguration().orientation == Configuration.ORIENTATION_LANDSCAPE;
    }

    public int getSmallestWidthDp() {
        return mSmallestWidthDp;
    }

    public int getWidthDp() {
        return mWidthDp;
    }

    public int getHeightDp() {
        return mHeightDp;
    }

    public String getDeviceSummary() {
        return "Category=" + DeviceCategory.getLabel(mCategory) + ", Nav=" + NavigationMode.getLabel(mDefaultNavMode) + 
               ", sw=" + mSmallestWidthDp + "dp, " + mWidthDp + "x" + mHeightDp + "dp, Touch=" + mHasTouchscreen;
    }
}
