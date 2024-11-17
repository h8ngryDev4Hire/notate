#!/bin/bash

SRC=$(dirname $BASH_SOURCE)
PROJ_ROOT=$HOME/Projects/Web-Extensions/Quick-Notes/current
TARGET=chrome
PROD=$PROJ_ROOT/dist
DESTINATION=$PROD/$TARGET
BINARY_PATH=./bin
WEBPACK_CONF=./webpack.prod.js
TAILWIND_INPUT=./src/Assets/tailwind.css
TAILWIND_OUTPUT=$DESTINATION/notate.css


# Traverse to project root
until [ $PWD = $PROJ_ROOT ]; do 
	cd ..

	if [ $PWD = / ]; then 
		echo 'FATAL:  could not find root project directory. exitting...'
		exit 1
	fi
done


# Wipe prev dist build if present
if ls $DESTINATION > /dev/null 2>&1; then
	rm -rf $DESTINATION 
fi

# Wipe bin for clean crx build
if ls $BINARY_PATH > /dev/null 2>&1; then
	rm -rf $BINARY_PATH
fi


# setup & export prod build env variables
export BROWSER_TARGET=chrome

# run webpack build cmd. exits script upon failure
npx webpack --bail --config $WEBPACK_CONF --env browser=chrome
if [ $? -ne 0 ]; then 
	echo 'ERROR:  webpack build failed. exitting...'
	exit 1
fi

# run tailwindcss build cmd. exits script upon failure
npx tailwindcss -i $TAILWIND_INPUT -o $TAILWIND_OUTPUT
if [ $? -ne 0 ]; then
	echo 'ERROR:  tailwindcss build failed. exitting...'
	exit 1
fi


# creates bin directory for .crx binary
#if ! ls $BINARY_PATH > /dev/null 2>&1; then 
#	mkdir $BINARY_PATH
#fi


# run crx build script. exits script upon failure
#if ! node $SRC/crx.js; then
#	echo 'ERROR:  crx build script failed. exitting...'
#	exit 1
#fi


# Zip up 'dist' subdirs
echo "Zipping emitted builds..."

if ! zip -r $PROD/chrome.zip $DESTINATION; then 
	echo 'ERROR: zip packing failed. exitting...'
	exit 1
fi


echo "Production build successful."

