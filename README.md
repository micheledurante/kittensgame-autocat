# WIP: kittensgame-autocat
Something something automation [cat game](https://kittensgame.com/web/)

[![Build Status](https://travis-ci.com/micheledurante/kittensgame-autocat.svg?branch=main)](https://travis-ci.com/micheledurante/kittensgame-autocat)

New Autocat tab

You can set
1. Astronomical events: auto-observe on/off
1. Hunts: send all hunts as soon as the set catpower limit is reached (steps of 100)

---

To setup
1. `git submodule update --init --recursive`
1. `npm i`
1. `npm run test`

---

Remember
1. The `src` app uses TypeScript's namespaced, path reference [imports](https://www.typescriptlang.org/docs/handbook/namespaces.html#splitting-across-files). Stick to it
1. Manually add imports for each .ts file here `src/debug.ts`
1. Tests are witten in JS. They depend on the compiled TS -> JS out file, expected in `dist/autocat.js`
1. In tests, require the whole `src` app, CommonJS style `const autocat = require('../dist/autocat');` and use its namespaces like `autocat.Templates...`
