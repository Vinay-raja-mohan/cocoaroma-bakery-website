from PIL import Image

img = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\public\images\logo\logo-transparent.png").convert("RGBA")
w, h = img.size
print(f"Dimensions: {w} x {h}")

# Let's save a crop of the first 400x400 with a grid / coordinate markings or just crop x: 0..350, y: 0..500
test_crop = img.crop((0, 0, 360, 500))
test_crop.save(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\crop_test.png")
