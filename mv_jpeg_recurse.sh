#!/bin/bash
IFS=$'\n'
DIR="src/raw/images"
for f in $(ls $DIR|grep JPG); do
  #mv $DIR/$f/JPEG/*.jpg $DIR/$f;
  #rm -rf $DIR/$f/JPEG
  mv $DIR/$f $DIR/${f/.JPG/.jpg}
done
