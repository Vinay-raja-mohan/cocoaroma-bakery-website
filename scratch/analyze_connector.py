import numpy as np
from PIL import Image

img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png").convert("RGBA")
arr = np.array(img)

# Let's inspect alpha and green color
# The green color is roughly R: ~20-30, G: ~90-100, B: ~65-75 (or #165b40 approx)
# Let's see unique colors or alpha channel
alpha = arr[:, :, 3]

# Where is the connector between bottom stroke of C and the 'o'?
# In crop_co.png:
# The bottom stroke of C comes up towards (x=280, y=370)
# 'o' has an inner loop and outer loop.
# Let's visualize with coordinate marks.
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(10, 10))
ax.imshow(arr)
ax.set_xlim(200, 360)
ax.set_ylim(450, 250) # inverted for image coords
ax.grid(True, which='both', color='red', linestyle='-', linewidth=0.5)
plt.xticks(np.arange(200, 360, 20))
plt.yticks(np.arange(250, 450, 20))
plt.savefig(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\connector_grid.png", bbox_inches='tight')
print("Saved grid")
