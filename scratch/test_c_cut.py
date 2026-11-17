import cv2
import numpy as np
from PIL import Image

# Load crop_co
img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png").convert("RGBA")
arr = np.array(img)

# We want to keep all of the C:
# - Left of x=250: keep everything
# - Between x=250 and 275: smooth rounded cap for the stroke (which has thickness ~30px, centered around y=340)
# - Above y=240 and right of x=260: that is part of the 'o', remove it!
# Wait, what about the top of the C?
# In crop_co.png, the top loop of the C:
# let's check its bounds: x up to ~325, y from ~60 to ~220.
# The 'o' only starts below y=260!
# So for y < 240, the C extends up to x=330!
# For y >= 240, the 'o' starts around x=260.

# Let's verify this!
mask = np.ones((arr.shape[0], arr.shape[1]), dtype=bool)

# For y >= 250:
# Stroke center is roughly y = 370 - (x - 220) * 0.75
# At x=260, y ~ 340.
# We can create a mask:
# Remove all pixels where y >= 250 and x > 265
# And let's make a nice rounded cap at the end of the stroke (centered around x=260, y=340)

# Let's test this mask:
for y in range(arr.shape[0]):
    for x in range(arr.shape[1]):
        if y >= 240:
            if x > 265:
                mask[y, x] = False

# Apply mask to alpha channel
arr[~mask, 3] = 0

result = Image.fromarray(arr)
result.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\c_cut_test.png")
print("Saved c_cut_test.png")
