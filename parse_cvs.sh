#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
while read a b c d e f g h i j
 do
	 trans=$(echo $a$b|./bin/translit.py)
   oDIR=$DIR/$trans
	 DDIR=$DIR/${trans/\'/}
	 if [ -d "$oDIR" ]; then
		 mv $oDIR $DDIR
	 fi

mkdir -p $DDIR/files
echo ${h/./ } ${i/./ }
since=$(./datejs.cmd.js ${h})
edusince=$(./datejs.cmd.js ${i})
echo $a $b $c $d $e $f $g $since $edusince

img=$(ls $DDIR|grep jpg)
echo $img|wc
echo -e "---\n\
associatedFilesRelative:\t true\n\
associatedFilesPath:\t './files'\n\
title:\t $g $a $b $c \n\
lastname:\t $a \n\
firstname:\t $b\n\
fathername:\t $c\n\
education:\t $d\n\
category:\t $e\n\
appointment:\t $g\n\
since:\t $since\n\
layout:\t faces" > $DDIR/index.html
img_f=$DDIR/$img
echo $since

if [ -f $img_f ];then
  echo -e "img:\t /faces/${trans/\'/}/$img" >> $DDIR/index.html;
fi
if [ "$i" != " " ]; then
echo -e "edusince:\t $edusince\n" >> $DDIR/index.html;
echo $edusince
fi

echo -e "---" >> $DDIR/index.html
 done < $1
 IFS=$OLDIFS
