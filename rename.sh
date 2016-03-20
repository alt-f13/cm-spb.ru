#!/bin/bash
find -L . -type f -name *.markdown -print0 | while IFS= read -r -d '' FNAME; do
    echo mv -- "$FNAME" "${FNAME/markdown/md}"
done
