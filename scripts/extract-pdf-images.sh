#!/usr/bin/env bash
# Extract every embedded image from the company profile PDF into .pdf-extract/ (gitignored).
# Usage: scripts/extract-pdf-images.sh "2026_Cam Ninh Profile.pdf"
set -euo pipefail
pdf="${1:?path to the profile PDF}"
out=".pdf-extract"
mkdir -p "$out/raw" "$out/pages"
pdfimages -all -p "$pdf" "$out/raw/img"
pdfimages -list "$pdf" > "$out/list.txt"
pdftoppm -r 60 -png "$pdf" "$out/pages/page"
echo "Extracted $(ls "$out/raw" | wc -l | tr -d ' ') files. Curate them in scripts/images.manifest.tsv"
