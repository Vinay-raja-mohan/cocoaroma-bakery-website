import cv2
import numpy as np
from PIL import Image

# Load c_smooth_cap.png
c_img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\c_smooth_cap.png").convert("RGBA")

# Let's create:
# Option A: Circular cream badge (#FFF8E7) with delicate dark green border or shadow, and the C centered
# Option B: Clean transparent with C centered

def make_badge(c_img, size=512, bg_mode="cream_circle"):
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw_canvas = canvas.copy()
    
    # Scale C to fit comfortably inside badge (~68% of size)
    target_h = int(size * 0.70)
    aspect = c_img.width / c_img.height
    target_w = int(target_h * aspect)
    
    c_resized = c_img.resize((target_w, target_h), Image.LANCZOS)
    
    if bg_mode == "cream_circle":
        # Draw anti-aliased cream circle
        scale = 2
        hi_size = size * scale
        hi_bg = np.zeros((hi_size, hi_size, 4), dtype=np.uint8)
        
        center = hi_size // 2
        radius = int(hi_size * 0.47)
        # Fill circle with #FFF8E7 (255, 248, 231)
        cv2.circle(hi_bg, (center, center), radius, (255, 248, 231, 255), -1, cv2.LINE_AA)
        # Optional delicate subtle border #0D5E3D with low opacity
        cv2.circle(hi_bg, (center, center), radius, (13, 94, 61, 60), int(2*scale), cv2.LINE_AA)
        
        bg_pil = Image.fromarray(cv2.resize(hi_bg, (size, size), interpolation=cv2.INTER_AREA))
        canvas.paste(bg_pil, (0, 0), bg_pil)
    elif bg_mode == "cream_rounded":
        # Rounded rectangle
        scale = 2
        hi_size = size * scale
        hi_bg = np.zeros((hi_size, hi_size, 4), dtype=np.uint8)
        # Draw rounded rect
        rad = int(hi_size * 0.22)
        # fill
        cv2.rectangle(hi_bg, (rad, 0), (hi_size - rad, hi_size), (255, 248, 231, 255), -1)
        cv2.rectangle(hi_bg, (0, rad), (hi_size, hi_size - rad), (255, 248, 231, 255), -1)
        cv2.circle(hi_bg, (rad, rad), rad, (255, 248, 231, 255), -1, cv2.LINE_AA)
        cv2.circle(hi_bg, (hi_size - rad, rad), rad, (255, 248, 231, 255), -1, cv2.LINE_AA)
        cv2.circle(hi_bg, (rad, hi_size - rad), rad, (255, 248, 231, 255), -1, cv2.LINE_AA)
        cv2.circle(hi_bg, (hi_size - rad, hi_size - rad), rad, (255, 248, 231, 255), -1, cv2.LINE_AA)
        bg_pil = Image.fromarray(cv2.resize(hi_bg, (size, size), interpolation=cv2.INTER_AREA))
        canvas.paste(bg_pil, (0, 0), bg_pil)
    elif bg_mode == "transparent":
        pass
        
    # Center C
    x_off = (size - target_w) // 2
    y_off = (size - target_h) // 2
    canvas.paste(c_resized, (x_off, y_off), c_resized)
    return canvas

badge_circle = make_badge(c_img, 512, "cream_circle")
badge_circle.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\badge_circle.png")

badge_rounded = make_badge(c_img, 512, "cream_rounded")
badge_rounded.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\badge_rounded.png")

badge_transparent = make_badge(c_img, 512, "transparent")
badge_transparent.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\badge_transparent.png")

print("Created badges")
