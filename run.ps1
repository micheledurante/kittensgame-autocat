deno fmt ./src/;

if (!$?)
{
	exit 1;
}

deno lint ./src/;

if (!$?) 
{
	exit 1;
}

deno run --config ./tsconfig.json --cached-only --lock=./src/lock.json ./src/main.ts;

exit 0;
