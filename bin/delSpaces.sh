#!/bin/bash
find . -print0 | while read -d $'\0' i;
do
 filename=$(basename "$i");
 file="${filename%.*}";
 echo $filename;
	mv "${filename}" "${filename// /-}"
done

find . -print0 | while read -d $'\0' i;
do
	filename=$(basename "$i");
	echo "<a href=${filename} class=list-group-item>${filename//-/ }</a>"
done

find .html -print0 | while read -d $'\0' i;
do
	filename=$(basename "$i");
	echo "<a href=${i} class=list-group-item>${filename//-/ }</a>"
done
