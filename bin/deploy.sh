#!/bin/bash
DIR=./output/
docpad generate --env=static -o $DIR --force
cat <<EOF
  TIP!!!
  cd $DIR
  git add .
  git commit -m
  git push
EOF

##cd $DIR && git add . && git commit -m ""
