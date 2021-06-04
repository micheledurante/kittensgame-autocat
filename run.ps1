deno fmt ./src/;
deno lint ./src/;
deno run --cached-only --lock=./src/lock.json ./src/main.ts