from PIL import Image

img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\public\images\logo\logo-transparent.png").convert("RGBA")
# Let's crop from 0 to 500 width, 0 to 500 height
test_crop = img.crop((0, 0, 480, 500))
test_crop.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_co.png")
