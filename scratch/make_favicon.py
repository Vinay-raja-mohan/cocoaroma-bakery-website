from PIL import Image
import os

logo_path = r"C:\College\cocoaroma bakery website\cocoaroma\public\images\logo\logo-transparent.png"
img = Image.open(logo_path).convert("RGBA")
w, h = img.size

# The C: left curl starts at x~0, right tip of C ends around x~235
# Top of the tall C swash starts at y~0, bottom at y~470
crop_left = 0
crop_top = 0
crop_right = int(w * 0.22)   # a bit more to include full C curl
crop_bottom = int(h * 0.80)

c_letter = img.crop((crop_left, crop_top, crop_right, crop_bottom))

# Square canvas with cream background + 12% padding all round
padded = int(max(c_letter.size) * 1.22)
canvas = Image.new("RGBA", (padded, padded), (255, 248, 231, 255))
x_offset = (padded - c_letter.width) // 2
y_offset = (padded - c_letter.height) // 2
canvas.paste(c_letter, (x_offset, y_offset), c_letter)

out_dir = r"C:\College\cocoaroma bakery website\cocoaroma\public"
src_dir = r"C:\College\cocoaroma bakery website\cocoaroma\src\app"

canvas.resize((32,32), Image.LANCZOS).save(os.path.join(src_dir, "favicon.ico"), format='ICO', sizes=[(16,16),(32,32),(48,48)])
canvas.resize((192,192), Image.LANCZOS).save(os.path.join(out_dir, "icon-192.png"))
canvas.resize((512,512), Image.LANCZOS).save(os.path.join(out_dir, "icon-512.png"))
canvas.resize((180,180), Image.LANCZOS).save(os.path.join(out_dir, "apple-touch-icon.png"))
canvas.resize((192,192), Image.LANCZOS).save(r"C:\Users\Vinay\.gemini\antigravity\brain\c7adc4df-dfbc-4bf8-8b7b-3e08c0cadf0c\favicon_preview.png")
print("Done")
