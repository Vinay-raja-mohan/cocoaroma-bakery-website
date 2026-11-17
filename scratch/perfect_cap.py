import cv2
import numpy as np
from PIL import Image

# Let's inspect the stroke around P=(246, 342) in crop_co
img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png").convert("RGBA")
arr = np.array(img, dtype=np.uint8)

# Instead of adding a separate circle, we can just mask along the stroke direction with a rounded cap!
# Specifically, in the stroke coordinate system (u_along, u_perp):
# Let P = (244, 343)
# The stroke top edge is at dot_perp ~ -7.5, bottom edge at dot_perp ~ +7.5.
# Total width is 15.0 px!
# So R should be 7.5 px!

scale = 4
P = np.array([244.0, 343.0])
u_along = np.array([0.761, -0.648]) # points along stroke direction (up-right)
u_perp = np.array([0.648, 0.761])  # points across stroke direction
R = 7.5

h, w = arr.shape[:2]
hi_h, hi_w = h * scale, w * scale

# Sample brand color
sample_pixels = arr[(arr[:, :, 3] > 240) & (arr[:, :, 1] > 80) & (arr[:, :, 1] < 110)]
avg_color = np.median(sample_pixels[:, :3], axis=0).astype(np.uint8)

# Create high-res grid
y_idx, x_idx = np.mgrid[0:hi_h, 0:hi_w]
pts_x = x_idx / scale
pts_y = y_idx / scale

vx = pts_x - P[0]
vy = pts_y - P[1]

dot_along = vx * u_along[0] + vy * u_along[1]
dot_perp = vx * u_perp[0] + vy * u_perp[1]

# Resize original alpha
orig_alpha_hi = cv2.resize(arr[:, :, 3], (hi_w, hi_h), interpolation=cv2.INTER_LINEAR)

mask_hi = np.zeros((hi_h, hi_w), dtype=np.uint8)

# 1. Everything with y < 240
mask_hi[pts_y < 240] = orig_alpha_hi[pts_y < 240]

# 2. For y >= 240:
# keep stroke body before cut (dot_along <= 0)
cond_body = (pts_y >= 240) & (dot_along <= 0)
mask_hi[cond_body] = orig_alpha_hi[cond_body]

# 3. Rounded cap at end: for dot_along > 0, inside semicircle of radius R
cond_cap = (pts_y >= 240) & (dot_along > 0) & ((dot_along**2 + dot_perp**2) <= (R**2))
mask_hi[cond_cap] = 255

final_alpha = cv2.resize(mask_hi, (w, h), interpolation=cv2.INTER_AREA)

final_img = np.zeros((h, w, 4), dtype=np.uint8)
final_img[:, :, :3] = avg_color
final_img[:, :, 3] = final_alpha

# Preserve interior colors
orig_mask = (arr[:, :, 3] > 0) & (final_alpha > 0)
final_img[orig_mask, :3] = arr[orig_mask, :3]

# Crop bounding box
bbox = cv2.boundingRect(final_alpha)
x, y, bw, bh = bbox
cropped_c = Image.fromarray(final_img[y:y+bh, x:x+bw])
cropped_c.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\c_smooth_cap.png")
print("Saved c_smooth_cap.png")
