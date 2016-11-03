#!/bin/bash
cNAME=crud-sp
docker build -t $cNAME .

docker rm -f $cNAME
docker run -d \
--restart=always \
  --name=$cNAME \
  -p 3040:8080 \
  -v /docker/sh.2d-it.ru:/usr/src/app/out \
  -e VIRTUAL_HOST=sh.2d-it.ru \
  $cNAME
