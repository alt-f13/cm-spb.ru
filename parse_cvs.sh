#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
while read a b c d e f g h i j
 do
   DDIR=$DIR/$a
mkdir -p $DDIR
echo ${g/./ }
since=$(./datejs.cmd.js ${g/./ })
edusince=$(./datejs.cmd.js ${h/./ })

img=$(ls $DDIR|grep jpg)
echo $img|wc
echo -e "---\n\
associatedFilesRelative:\t true\n\
associatedFilesPath:\t './'\n\
lastname:\t $a \n\
firstname:\t $b\n\
fathername:\t $c\n\
education:\t $d\n\
category:\t $e\n\
appointment:\t $f\n\
since:\t $since\n\
layout:\t faces" > $DDIR/index.html
img_f=$DDIR/$img
echo $since

if [ -f $img_f ];then
  echo -e "img:\t /faces/$a/$img" >> $DDIR/index.html;
fi
if [ "$h" != " " ]; then
echo -e "edusince:\t $edusince\n" >> $DDIR/index.html;
echo $edusince
fi

echo -e "---" >> $DDIR/index.html
 done < $1
 IFS=$OLDIFS
