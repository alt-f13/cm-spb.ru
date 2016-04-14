#!/bin/bash
IFS=$'\n'
DIR="src/render/faces"
for f in $(ls $DIR); do
  #mv $DIR/$f/JPEG/*.jpg $DIR/$f;
  rm -rf $DIR/$f/JPEG
done
