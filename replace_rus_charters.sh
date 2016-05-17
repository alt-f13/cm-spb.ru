#!/bin/bash
IFS=$'\n'
DIR=$1
for f in $(ls -R . | awk '
                                  	/:$/&&f{s=$0;f=0}
                                    /:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
                                    NF&&f{ print s"/"$0 }'|grep JPG); do
  #mv $DIR/$f/JPEG/*.jpg $DIR/$f;
  #rm -rf $DIR/$f/JPEG
  mv $DIR/$f $DIR/${f/.JPG/.jpg}
done
