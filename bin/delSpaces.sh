#!/bin/bash
rm ~*
rm Thumbs.*

echo "converto PDF"
soffice --headless --convert-to pdf "*.doc"

rm *.doc
rm *.docx

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
	echo "<a href=${filename} class=\"list-group-item link-icon\">${filename//-/ }</a>"
done
oldParent=""
find . -print0 | while read -d $'\0' i;
do
	filename=$(basename "$i");
	parent=$(dirname "$i")
	if [ "$parent" == "$oldParent" ]; then
		echo "</div><h6>${parent//-/ }</h6><div class=\"list-group\">"
	fi
	echo "<a href=\"${i}\" class=\"list-group-item link-icon\">${filename//-/ }</a>"
	oldParent=parent
done
