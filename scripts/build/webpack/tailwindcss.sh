#!/bin/bash

SRC=$(dirname $BASH_SOURCE)
ROOT=$HOME/Projects/Web-Extensions/Quick-Notes/current
BROWSER=$1
DEST=$ROOT/dev/$BROWSER
IN=$ROOT/src/Assets/tailwind.css
OUT=$DEST/notate.css

# Traverse to project root
until [ $PWD = $ROOT ]; do 
	cd ..

	if [ $PWD = / ]; then 
		echo 'FATAL:  could not find root project directory. exitting...'
		exit 1
	fi
done



npx tailwindcss -i $IN -o $OUT
