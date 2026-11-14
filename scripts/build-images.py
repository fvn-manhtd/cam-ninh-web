#!/usr/bin/env python3
"""Build the curated WebP images in public/images from the raw PDF extraction.

Run scripts/extract-pdf-images.sh first, then:  python3 scripts/build-images.py "2026_Cam Ninh Profile.pdf"

Manifest columns (tab separated): source, mask, dest, max_width, quality, trim
  source  img-PPP-NNN.ext from .pdf-extract/raw, or page:N:x,y,w,h (crop of page N, in points*100/72 px)
  mask    soft-mask file to use as alpha, or -
  quality 1-100, or "lossless"
  trim    "trim" to cut a dark frame baked into the image, else -
"""
import csv, json, subprocess, sys
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / ".pdf-extract" / "raw"
PAGES = ROOT / ".pdf-extract" / "hires"
OUT = ROOT / "public" / "images"
DPI = 200

def page_image(pdf, n):
    PAGES.mkdir(parents=True, exist_ok=True)
    target = PAGES / f"page-{n:02d}.png"
    if not target.exists():
        subprocess.run(["pdftoppm", "-r", str(DPI), "-f", str(n), "-l", str(n), "-png", "-singlefile",
                        pdf, str(target.with_suffix(""))], check=True)
    return Image.open(target).convert("RGB")

def trim_dark(im):
    rgb = im.convert("RGB")
    bg = Image.new("RGB", rgb.size, (0, 0, 0))
    box = ImageChops.difference(rgb, bg).point(lambda v: 255 if v > 40 else 0).getbbox()
    return im.crop(box) if box else im

def main():
    pdf = sys.argv[1] if len(sys.argv) > 1 else None
    sizes = {}
    with open(ROOT / "scripts" / "images.manifest.tsv", newline="") as fh:
        rows = [r for r in csv.reader(fh, delimiter="\t") if r and not r[0].startswith("#")]
    for source, mask, dest, max_w, quality, trim in rows:
        if source.startswith("page:"):
            if not pdf:
                sys.exit("page: sources need the PDF path as the first argument")
            _, n, box = source.split(":")
            x, y, w, h = (int(int(v) * DPI / 100) for v in box.split(","))
            im = page_image(pdf, int(n)).crop((x, y, x + w, y + h))
        else:
            im = Image.open(RAW / source)
            im = im.convert("RGBA" if mask != "-" else "RGB")
            if mask != "-":
                im.putalpha(Image.open(RAW / mask).convert("L").resize(im.size))
        if trim == "trim":
            im = trim_dark(im)
        if im.width > int(max_w):
            im = im.resize((int(max_w), round(im.height * int(max_w) / im.width)), Image.LANCZOS)
        target = OUT / f"{dest}.webp"
        target.parent.mkdir(parents=True, exist_ok=True)
        if quality == "lossless":
            im.save(target, "WEBP", lossless=True, method=6)
        else:
            im.save(target, "WEBP", quality=int(quality), method=6)
        sizes[f"/images/{dest}.webp"] = {"width": im.width, "height": im.height}
    out = ROOT / "content" / "data" / "images.generated.json"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(sizes, indent=2, sort_keys=True) + "\n")
    print(f"wrote {len(sizes)} images")

if __name__ == "__main__":
    main()
