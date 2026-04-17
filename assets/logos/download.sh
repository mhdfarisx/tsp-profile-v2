#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

echo "Downloading brand logos (SVG)..."

curl -sL "https://cdn.simpleicons.org/honda" -o honda.svg && echo "✓ Honda"
curl -sL "https://cdn.simpleicons.org/sony" -o sony.svg && echo "✓ Sony"
curl -sL "https://cdn.simpleicons.org/samsung" -o samsung.svg && echo "✓ Samsung"
curl -sL "https://cdn.simpleicons.org/hitachi" -o hitachi.svg && echo "✓ Hitachi"
curl -sL "https://cdn.simpleicons.org/toyota" -o toyota.svg && echo "✓ Toyota"
curl -sL "https://cdn.simpleicons.org/panasonic" -o panasonic.svg && echo "✓ Panasonic"

echo "Done. Check the logos folder."
ls -lh "$DIR"/*.svg 2>/dev/null || echo "No SVG files found — check your internet connection."
