#!/bin/bash

SOURCE=/mnt/w/Sync/Mojo/
DEST=$PWD/media/

mkdir -p DEST

cd $SOURCE
find . -type f -name '*.jpg' -exec cp --parents '{}' $DEST \;
