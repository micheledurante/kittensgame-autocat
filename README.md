# WIP: kittensgame-autocat
Something something automation [cat game](https://kittensgame.com/web/)

[![Build Status](https://travis-ci.com/micheledurante/kittensgame-autocat.svg?branch=main)](https://travis-ci.com/micheledurante/kittensgame-autocat)

New Autocat tab

You can set
1. Astronomical events: auto-observe on/off (if not automated already)
1. Hunts: send all hunts as soon as the set catpower limit is reached (steps of 100)

Written in TypeScript 4 and built with the amazing [Deno](https://deno.land/).

## Setup
`deno` executable is expected to be [installed globally](https://deno.land/#installation). Developed with VS Code using the [Deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno).

- Checkout the repository and its submodule `git submodule update --init --recursive`
- `cd` into the checkout dir
- Generate Deno std lib types `deno types --unstable > ./deno.runtime.d.ts`
- Restore src deps `deno cache --reload --lock=./src/lock.json ./src/deps.ts`
- Restore test deps `deno cache --reload --lock=./test/lock.json ./test/deps.ts`
- Run `./test.ps1`

## Dependency management (no NPM)
Some functionality must be handled manually, compared to NPM.

Define all runtime dependencies in `src/deps.ts` and dev dependencies in `test/deps.ts` as ES6 exports as we don't have a `package.json` to define this.

1. `src/` contains the runtime application and the list of runtime dependencies
1. `test/` contains the test application and the list of dev dependencies
1. After adding a new dependency, run the command below to cache the files

Adding new dependencies should not update the current cache (relies on the lock files):
- Add a runtime dependency `deno cache --lock-write --lock=./src/lock.json ./src/deps.ts`
- Add a dev dependency `deno cache --lock-write --lock=./test/lock.json ./test/deps.ts`

Refresh cached dependencies (when the source might have changed, unlikely I guess):
- Refresh runtime dependencies `deno cache --reload ./src/deps.ts`
- Refresh dev dependencies `deno cache --reload ./test/deps.ts`

## Scripts
Based on Rust naming conventions:
- `check.ps1` Format and lint the project (fmt & check)
- `test.ps1` Test the program (check + test)
- `run.ps1` Run the program (check + run)
- `build.ps1` Build for release into `./dist/autocat.js` (test + bundle)

## CI
`./build.sh` can be used to build Autocat in linux environments, otherwise run `.\build.ps1` for Windows.

## Gotchas!
Remember:
- The project is bundled as a single JS file using Deno's bundler. Import and export ES6 modules as you want, Deno does the rest.
- The project defines dev-time dependencies in `./test/deps.ts` and runtime dependencies in `./src/deps.ts`. This should avoid bundling unwanted libraries in the bundled JS file.
