import cv2
import numpy as np
from PIL import Image

img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png").convert("RGBA")
arr = np.array(img, dtype=np.uint8)

# The stroke angle: dx=1, dy=-0.85
# Angle theta = atan2(-0.85, 1) = -40.3 degrees
# Normal vector: (0.648, 0.761)
# Stroke vector: (0.761, -0.648)
#
# Let's cut the stroke at P = (248, 340) perpendicular to stroke direction:
# Any point Q = (x, y) with y >= 240:
# Vector v = Q - P
# Along stroke: dot_along = v_x * 0.761 - v_y * 0.648
# Perpendicular: dot_perp = v_x * 0.648 + v_y * 0.761
# Half-width R = 8.5
# If dot_along <= 0: keep if original alpha > 0
# If dot_along > 0: keep if dot_along^2 + dot_perp^2 <= R^2

P = np.array([246.0, 342.0])
u_along = np.array([0.761, -0.648])
u_perp = np.array([0.648, 0.761])
R = 8.5

# High-resolution rendering (4x) for supersampled anti-aliasing
scale = 4
h, w = arr.shape[:2]
hi_h, hi_w = h * scale, w * scale

# Find average green color from inside the stroke:
sample_pixels = arr[(arr[:, :, 3] > 240) & (arr[:, :, 1] > 80) & (arr[:, :, 1] < 110)]
avg_color = np.median(sample_pixels[:, :3], axis=0).astype(np.uint8)
print("Detected brand color:", avg_color)

mask_hi = np.zeros((hi_h, hi_w), dtype=np.uint8)

# Populate mask
for y in range(h):
    for x in range(w):
        if y < 240 and arr[y, x, 3] > 0:
            mask_hi[y*scale:(y+1)*scale, x*scale:(x+1)*scale] = arr[y, x, 3]

# Stroke region
y_indices, x_indices = np.mgrid[0:hi_h, 0:hi_w]
# Convert to float coords in original space
pts_x = x_indices / scale
pts_y = y_indices / scale

# Condition for stroke
cond_y = pts_y >= 240
vx = pts_x - P[0]
vy = pts_y - P[1]

dot_along = vx * u_along[0] + vy * u_along[1]
dot_perp = vx * u_perp[0] + vy * u_perp[1]

# In original stroke (before cut)
# We can sample original alpha with nearest or linear
orig_alpha_interp = cv2.resize(arr[:, :, 3], (hi_w, hi_h), interpolation=cv2.INTER_LINEAR)

# Keep region:
keep_body = (dot_along <= 0) & (orig_alpha_interp > 20) & cond_y
keep_cap = (dot_along > 0) & ((dot_along**2 + dot_perp**2) <= (R**2)) & cond_y

mask_hi[keep_body] = orig_alpha_interp[keep_body]
mask_hi[keep_cap] = 255

# Downscale with area averaging
final_alpha = cv2.resize(mask_hi, (w, h), interpolation=cv2.INTER_AREA)

final_img = np.zeros((h, w, 4), dtype=np.uint8)
final_img[:, :, :3] = avg_color
final_img[:, :, 3] = final_alpha

# For pixels that were in the original C and have alpha, preserve original anti-aliased edges
orig_c_mask = (arr[:, :, 3] > 0) & (final_alpha > 0)
final_img[orig_c_mask, :3] = arr[orig_c_mask, :3]

# Crop tightly around bounding box of non-zero alpha
bbox = cv2.boundingRect(final_alpha)
x, y, bw, bh = bbox
print(f"Bounding box: x={x}, y={y}, w={bw}, h={bh}")

cropped_c = Image.fromarray(final_img[y:y+bh, x:x+bw])
cropped_c.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\c_standalone.png")
print("Saved c_standalone.png")
