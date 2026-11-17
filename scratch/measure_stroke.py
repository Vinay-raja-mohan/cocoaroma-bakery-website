import cv2
import numpy as np
from PIL import Image

img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png").convert("RGBA")
arr = np.array(img, dtype=np.uint8)

# The stroke centerline around the cut:
# Around x=230 to 260:
# Let's inspect the stroke profile at x=240..260
# Width of stroke is about 26 pixels.
# Let's cap the stroke at x_cap=258, with a rounded cap of radius R ~ 13.
# The stroke angle theta is about 38 degrees (slope ~ 0.78, dy/dx ~ -0.78 since y goes up in screen space)
# Center of cap: around (x=254, y=346)

# Let's create an alpha mask with high resolution or anti-aliasing:
h, w = arr.shape[:2]
mask = np.zeros((h, w), dtype=np.uint8)

# Pixels with alpha > 0 in original image
orig_alpha = arr[:, :, 3]

# We want:
# 1. Any pixel of the C where y < 240 (all of upper C and top curl)
# 2. For y >= 240:
# We keep pixels where the projection along the stroke is <= end_dist
# Stroke direction vector: u = (cos(theta), -sin(theta)) where theta ~ 35 deg
# u = (0.819, -0.573)
# Perpendicular vector: v = (0.573, 0.819)
# Anchor point: P0 = (200, 388)
# For point P = (x, y):
# dist_along = (x - P0[0])*u[0] + (y - P0[1])*u[1]
# dist_perp = abs((x - P0[0])*v[0] + (y - P0[1])*v[1])

# Let's measure exact stroke center at x=220 and x=250:
for test_x in [210, 220, 230, 240, 250, 260]:
    ys = np.where(arr[:, test_x, 3] > 100)[0]
    # filter for the bottom stroke (y between 300 and 420)
    ys = ys[(ys >= 310) & (ys <= 410)]
    if len(ys) > 0:
        print(f"x={test_x}: y_min={ys.min()}, y_max={ys.max()}, center={np.mean(ys):.1f}, thickness={len(ys)}")
