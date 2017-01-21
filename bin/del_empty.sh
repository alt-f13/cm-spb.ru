#!/bin/bash
OLDIFS=$IFS
DIR="src/render/faces"
IFS=";"
for i in $(ls); do
  img=$(ls $i|grep jpg)
  if [ -f "$i/$img" ];then
    echo "####$i"
    echo $img
  else
    rm -rf $i

  fi

done




img=$(ls $DDIR|grep jpg)
echo $img|wc
# echo -e "---\n\
# associatedFilesRelative:\t true\n\
# associatedFilesPath:\t './files'\n\
# title:\t $g $a $b $c \n\
# lastname:\t $a \n\
# firstname:\t $b\n\
# fathername:\t $c\n\
# education:\t $d\n\
# category:\t $e\n\
# appointment:\t $g\n\
# since:\t $since\n\
# layout:\t faces" > $DDIR/index.html
img_f=$DDIR/$img
echo $since

if [ -f $img_f ];then
  echo -e "img:\t /faces/${trans/\'/}/$img" #>> $DDIR/index.html;
else
	rm -rf $DDIR
fi
# if [ "$i" != " " ]; then
# echo -e "edusince:\t $edusince\n" #>> $DDIR/index.html;
# echo $edusince
# fi

# echo -e "---" >> $DDIR/index.html
done
#  IFS=$OLDIFS
