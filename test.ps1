deno fmt ./src/;

if (!$?)
{
	exit 1;
}

deno fmt ./test/;

if (!$?) 
{
	exit 1;
}

deno lint ./src/;

if (!$?) 
{
	exit 1;
}

deno lint ./test/;

if (!$?) 
{
	exit 1;
}

deno test ./test/;

if (!$?) 
{
	exit 1;
}

exit 0;
