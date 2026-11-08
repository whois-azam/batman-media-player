package com.batman.player.views;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Path;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.View;

public class AvatarView extends View {

    public static final String[] AVATAR_NAMES = {
        "Classic Bat",
        "Dark Knight",
        "Wayne Crest",
        "Nightwing",
        "Batgirl",
        "Robin",
        "Oracle",
        "Alfred"
    };

    private int mAvatarId = 0;
    private int mAccentColor = Color.parseColor("#3D9BE9");
    private boolean mSelected = false;

    private final Paint mBgPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint mSymbolPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Paint mRingPaint = new Paint(Paint.ANTI_ALIAS_FLAG);
    private final Path mPath = new Path();
    private final RectF mBounds = new RectF();

    public AvatarView(Context context) {
        super(context);
        init();
    }

    public AvatarView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public AvatarView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        mBgPaint.setStyle(Paint.Style.FILL);
        mSymbolPaint.setStyle(Paint.Style.FILL);
        mSymbolPaint.setColor(Color.WHITE);
        mRingPaint.setStyle(Paint.Style.STROKE);
        mRingPaint.setStrokeWidth(6f);
    }

    public void setAvatarId(int id) {
        mAvatarId = Math.max(0, Math.min(AVATAR_NAMES.length - 1, id));
        invalidate();
    }

    public int getAvatarId() {
        return mAvatarId;
    }

    public void setAccentColor(int color) {
        mAccentColor = color;
        invalidate();
    }

    public void setSelectedRing(boolean selected) {
        mSelected = selected;
        invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        int w = getWidth();
        int h = getHeight();
        if (w <= 0 || h <= 0) return;

        float cx = w / 2f;
        float cy = h / 2f;
        float radius = Math.min(cx, cy) - 8f;

        // Background Circle
        mBgPaint.setColor(Color.parseColor("#1E2530"));
        canvas.drawCircle(cx, cy, radius, mBgPaint);

        // Selection or Focus Ring
        if (mSelected || hasFocus()) {
            mRingPaint.setColor(mAccentColor);
            mRingPaint.setStrokeWidth(Math.max(4f, radius * 0.1f));
            canvas.drawCircle(cx, cy, radius + 2f, mRingPaint);
        }

        // Draw Avatar Silhouette
        mPath.reset();
        float scale = radius * 0.55f;

        canvas.save();
        canvas.translate(cx, cy);

        switch (mAvatarId) {
            case 0: // Classic Bat
                drawBatPath(mPath, scale);
                break;
            case 1: // Dark Knight Cowl
                drawKnightPath(mPath, scale);
                break;
            case 2: // Wayne W
                drawWaynePath(mPath, scale);
                break;
            case 3: // Nightwing
                drawNightwingPath(mPath, scale);
                break;
            case 4: // Batgirl
                drawBatgirlPath(mPath, scale);
                break;
            case 5: // Robin R
                drawRobinPath(mPath, scale);
                break;
            case 6: // Oracle Eye
                drawOraclePath(mPath, scale);
                break;
            case 7: // Alfred Bowtie
                drawAlfredPath(mPath, scale);
                break;
        }

        mSymbolPaint.setColor(mSelected ? mAccentColor : Color.WHITE);
        canvas.drawPath(mPath, mSymbolPaint);
        canvas.restore();
    }

    private void drawBatPath(Path p, float s) {
        p.moveTo(0, s * 0.45f);
        p.lineTo(-s * 0.25f, s * 0.1f);
        p.cubicTo(-s * 0.6f, s * 0.4f, -s * 0.9f, 0, -s, -s * 0.2f);
        p.cubicTo(-s * 0.7f, -s * 0.5f, -s * 0.4f, -s * 0.4f, -s * 0.2f, -s * 0.3f);
        p.lineTo(-s * 0.15f, -s * 0.7f); // ear tip
        p.lineTo(-s * 0.05f, -s * 0.4f);
        p.lineTo(s * 0.05f, -s * 0.4f);
        p.lineTo(s * 0.15f, -s * 0.7f); // ear tip
        p.lineTo(s * 0.2f, -s * 0.3f);
        p.cubicTo(s * 0.4f, -s * 0.4f, s * 0.7f, -s * 0.5f, s, -s * 0.2f);
        p.cubicTo(s * 0.9f, 0, s * 0.6f, s * 0.4f, s * 0.25f, s * 0.1f);
        p.close();
    }

    private void drawKnightPath(Path p, float s) {
        p.moveTo(-s * 0.5f, -s * 0.8f); // left ear
        p.lineTo(-s * 0.3f, -s * 0.2f);
        p.lineTo(s * 0.3f, -s * 0.2f);
        p.lineTo(s * 0.5f, -s * 0.8f); // right ear
        p.lineTo(s * 0.6f, s * 0.3f);
        p.lineTo(s * 0.3f, s * 0.7f);
        p.lineTo(0, s * 0.9f);
        p.lineTo(-s * 0.3f, s * 0.7f);
        p.lineTo(-s * 0.6f, s * 0.3f);
        p.close();
    }

    private void drawWaynePath(Path p, float s) {
        p.moveTo(-s * 0.7f, -s * 0.6f);
        p.lineTo(-s * 0.4f, s * 0.7f);
        p.lineTo(0, -s * 0.1f);
        p.lineTo(s * 0.4f, s * 0.7f);
        p.lineTo(s * 0.7f, -s * 0.6f);
        p.lineTo(s * 0.45f, -s * 0.6f);
        p.lineTo(s * 0.25f, s * 0.2f);
        p.lineTo(0, -s * 0.4f);
        p.lineTo(-s * 0.25f, s * 0.2f);
        p.lineTo(-s * 0.45f, -s * 0.6f);
        p.close();
    }

    private void drawNightwingPath(Path p, float s) {
        p.moveTo(0, -s * 0.2f);
        p.lineTo(-s * 0.8f, -s * 0.7f);
        p.lineTo(-s * 0.3f, s * 0.1f);
        p.lineTo(-s * 0.5f, s * 0.6f);
        p.lineTo(0, s * 0.3f);
        p.lineTo(s * 0.5f, s * 0.6f);
        p.lineTo(s * 0.3f, s * 0.1f);
        p.lineTo(s * 0.8f, -s * 0.7f);
        p.close();
    }

    private void drawBatgirlPath(Path p, float s) {
        p.moveTo(0, s * 0.7f);
        p.lineTo(-s * 0.2f, s * 0.2f);
        p.lineTo(-s * 0.7f, s * 0.3f);
        p.lineTo(-s * 0.35f, -s * 0.1f);
        p.lineTo(-s * 0.6f, -s * 0.6f);
        p.lineTo(-s * 0.15f, -s * 0.3f);
        p.lineTo(-s * 0.08f, -s * 0.75f);
        p.lineTo(0, -s * 0.4f);
        p.lineTo(s * 0.08f, -s * 0.75f);
        p.lineTo(s * 0.15f, -s * 0.3f);
        p.lineTo(s * 0.6f, -s * 0.6f);
        p.lineTo(s * 0.35f, -s * 0.1f);
        p.lineTo(s * 0.7f, s * 0.3f);
        p.lineTo(s * 0.2f, s * 0.2f);
        p.close();
    }

    private void drawRobinPath(Path p, float s) {
        // Robin R Insignia
        p.moveTo(-s * 0.4f, -s * 0.7f);
        p.lineTo(s * 0.2f, -s * 0.7f);
        p.cubicTo(s * 0.6f, -s * 0.7f, s * 0.6f, -s * 0.1f, s * 0.2f, -s * 0.1f);
        p.lineTo(s * 0.5f, s * 0.7f);
        p.lineTo(s * 0.15f, s * 0.7f);
        p.lineTo(-s * 0.1f, 0);
        p.lineTo(-s * 0.1f, s * 0.7f);
        p.lineTo(-s * 0.4f, s * 0.7f);
        p.close();
    }

    private void drawOraclePath(Path p, float s) {
        // Digital Eye / Glyph
        mBounds.set(-s * 0.8f, -s * 0.45f, s * 0.8f, s * 0.45f);
        p.arcTo(mBounds, 0, 180, true);
        p.arcTo(mBounds, 180, 180, true);
        p.addCircle(0, 0, s * 0.28f, Path.Direction.CW);
    }

    private void drawAlfredPath(Path p, float s) {
        // Bowtie
        p.moveTo(-s * 0.7f, -s * 0.45f);
        p.lineTo(0, -s * 0.1f);
        p.lineTo(s * 0.7f, -s * 0.45f);
        p.lineTo(s * 0.7f, s * 0.45f);
        p.lineTo(0, s * 0.1f);
        p.lineTo(-s * 0.7f, s * 0.45f);
        p.close();
        p.addCircle(0, 0, s * 0.15f, Path.Direction.CW);
    }
}
