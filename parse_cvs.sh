#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
while read a b c d e f g h i j
 do
mkdir -p $DIR/$a
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
---\n\
  " > $DIR/$a/index.html
 done < $1
 IFS=$OLDIFS
