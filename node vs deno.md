nodejs pros:
tl;dr
Proven Makita drill

- Super extensive tooling. NPM is a one-line affair
- Can search for any problem, plenty of examples, great copy/paste-driven development
- Higher expected productivity
- Battle tested
- Compatible everywhere
- Easier learning curve

nodejs cons
- Toolchain is very complex, prefer to reduce dev features to avoid complex setup and troubleshooting
- Outdated architecture, every part of the dev pipeline requires a specialised library. Higher risk of incompatibility

deno pros
tl;dr
Futuristic Typescript, Tesla Roadster 1

- Fully integrated dev environment. TypeScript, unit tests, package management, linting (like rust, amazing)
- Lower overall project complexity
- Fewer dependencies
- Higher expected stability
- The server is written in rust and learning this part is beneficial for wasm

deno cons
- Limited std library (but it's easy to re-use nodejs code)
- No browser-specific features support. Might need lots of workarounds for things that normally are taken for granted
- No NPM packages
- Searching the web yields limited results
- Enforces ES6 imports
- Might not have an open source CI offering yet (need to check)
