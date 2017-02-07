#!/bin/bash

find . -print0 | while read -d $'\0' i
do
	filename=$(basename "$i")
	file="${filename%.*}"
	echo $filename
  pandoc "${filename}"re -o "${file}.pdf"
	mv "${file}.pdf" "${file// /-}.pdf"

done
