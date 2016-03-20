#!/bin/bash
find -L . -type f -name *.html -print0 | while IFS= read -r -d '' FNAME; do
    echo mv -- "$FNAME" "${FNAME}.eco"
done
