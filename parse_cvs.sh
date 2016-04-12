#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
while read a b c d e f g h i j
 do
   DDIR=$DIR/$a
mkdir -p $DDIR
img=$(ls $DDIR|grep jpg)
echo $img|wc
echo -e "---\n\
associatedFilesRelative:\t true\n\
associatedFilesPath:\t './'\n\
lastname:\t $a \n\
firstname:\t $b\n\
fathername:\t $c\n\
birthday:\t $d\n\
tags:\t ['$f']\n\
class:\t $g\n\
since:\t $i $h\n\
layout:\t faces \n\
appointment:\t $j" > $DDIR/index.html
img_f=$DDIR/$img
if [ -f $img_f ];then
  echo -e "img:\t /faces/$a/$img" >> $DDIR/index.html;
fi
echo -e "---" >> $DDIR/index.html
 done < $1
 IFS=$OLDIFS
