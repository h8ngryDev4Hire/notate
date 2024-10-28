#!/bin/bash

SRC=$(dirname $BASH_SOURCE)
ROOT=$HOME/Projects/Web-Extensions/Quick-Notes/current
BROWSER_TARGET=chrome
DESTINATION=./dev/$BROWSER_TARGET
WEBPACK_CONF=./webpack.dev.js
TW_OUTPUT=$DESTINATION/notate.css
TW_INPUT=$ROOT/src/Assets/tailwind.css



# Traverse to project root
until [ $PWD = $ROOT ]; do 
	cd ..

	if [ $PWD = / ]; then 
		echo 'FATAL:  could not find root project directory. exitting...'
		exit 1
	fi
done


# Wipe prev dev build if present
if ls $DESTINATION > /dev/null 2>&1; then
	rm -rf $DESTINATION 
fi


# run webpack build cmd & tailwind build cmd for chrome
npx webpack --watch --config $WEBPACK_CONF --env browser=$BROWSER_TARGET & \
	npx tailwindcss -i $TW_INPUT -o $TW_OUTPUT --watch 
