from PIL import Image

circle = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\badge_circle.png")
c32 = circle.resize((32, 32), Image.LANCZOS)
c16 = circle.resize((16, 16), Image.LANCZOS)

# Save multi-res ICO for favicon
ico_paths = [
    r"C:\College\cocoaroma bakery website\cocoaroma\src\app\favicon.ico",
    r"C:\College\cocoaroma bakery website\cocoaroma\public\favicon.ico",
]
for p in ico_paths:
    c32.save(p, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"Saved {p}")

# Also save icon.png in src/app/ (Next.js automatically serves /icon.png for app router)
c32.save(r"C:\College\cocoaroma bakery website\cocoaroma\src\app\icon.png", format='PNG')
circle.resize((192, 192), Image.LANCZOS).save(r"C:\College\cocoaroma bakery website\cocoaroma\public\icon-192.png", format='PNG')
circle.resize((512, 512), Image.LANCZOS).save(r"C:\College\cocoaroma bakery website\cocoaroma\public\icon-512.png", format='PNG')
circle.resize((192, 192), Image.LANCZOS).save(r"C:\College\cocoaroma bakery website\cocoaroma\public\icon.png", format='PNG')

# Apple touch icon:
rounded = Image.open(r"C:\College\cocoaroma bakery website\cocoaroma\scratch\badge_rounded.png")
rounded.resize((180, 180), Image.LANCZOS).save(r"C:\College\cocoaroma bakery website\cocoaroma\public\apple-touch-icon.png", format='PNG')
rounded.resize((180, 180), Image.LANCZOS).save(r"C:\College\cocoaroma bakery website\cocoaroma\src\app\apple-icon.png", format='PNG')

print("All favicon assets generated and saved!")
