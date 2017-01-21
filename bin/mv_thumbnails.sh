#!/bin/bash
for f in $(ls|grep '[0-9][0-9][0-9]x[0-9][0-9][0-9]'); do
  echo "rm  $f"
done
