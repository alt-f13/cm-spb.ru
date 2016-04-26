#!/bin/bash
IFS=$'\n'
DIR="src/raw/pages/info/documents/locals"
for f in $(ls $DIR); do
  #mv $DIR/$f/JPEG/*.jpg $DIR/$f;
  #rm -rf $DIR/$f/JPEG
	#mv "$DIR/$f" $DIR/${f// /-}
  echo "<li><a class=\"link-icon\" href=\"/pages/info/documents/locals/$f\">${f/-/--}</a></li>"
done
