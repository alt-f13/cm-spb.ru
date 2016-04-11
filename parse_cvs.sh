#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
while read a b c d e f g h i j
 do
   DDIR=$DIR/$a
mkdir -p $DDIR
img=$(ls $DDIR|grep jpg)
echo $img
echo -e "---\n\
lastname:\t $a \n\
firstname:\t $b\n\
fathername:\t $c\n\
birthday:\t $d\n\
tags:\t ['$f']\n\
class:\t $g\n\
since:\t $i $h\n\
layout:\t faces \n\
appointment:\t $j\n\
img:\t $img\n\
---\n\
  " > $DDIR/index.html
  img=""
 done < $1
 IFS=$OLDIFS
