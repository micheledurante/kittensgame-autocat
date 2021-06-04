#!/usr/bin/env bash
# Setup
DATETIME=`date --rfc-3339=seconds`;
VERSION="0.0.1";

# Build project
deno fmt ./src;
deno fmt ./test;
deno lint ./src;
deno lint ./test;
deno test ./test;
rm -rf ./dist;
mkdir ./dist;
deno bundle --lock=./src/lock.json ./src/main.ts ./dist/autocat.js

# Add build info
echo "/* Version ${VERSION} built on \"${OSTYPE} ${HOSTTYPE}\" at ${DATETIME} */" >> ./dist/autocat.js
