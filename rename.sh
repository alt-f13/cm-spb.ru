#!/bin/bash
find -L . -type f -name *.md -print0 | while IFS= read -r -d '' FNAME; do
    echo mv -- "$FNAME" "${FNAME/.md/.html.md}"
done


find . -type f \( -iname "*.pdf" -o -iname "*.doc" \) -exec cp '{}' ../documents \;
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -exec cp '{}' ../images \;
find . -type f \( -iname "*.png" -o -iname "*.gif" \) -exec cp '{}' ../images \;
