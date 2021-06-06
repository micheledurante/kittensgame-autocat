#!/usr/bin/env bash

# Setup
DATETIME=`date --rfc-3339=seconds`;
VERSION="0.0.1";

# Build project
if ! deno fmt ./src; then exit 1; fi

if ! deno fmt ./test; then exit 1; fi

if ! deno lint ./src; then exit 1; fi

if ! deno lint ./test; then exit 1; fi

if ! deno test ./test; then exit 1; fi

rm -rf ./dist;
mkdir ./dist;

if ! deno bundle --config ./tsconfig.json --lock=./src/lock.json ./src/main.ts ./dist/autocat.js; then exit 1; fi

# Add build info
echo "/* Version ${VERSION} built on \"${OSTYPE} ${HOSTTYPE}\" at ${DATETIME} */" >> ./dist/autocat.js;

exit 0;
