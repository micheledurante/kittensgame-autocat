# Setup
$VERSION="0.0.1";
$OS=(Get-CimInstance -ClassName CIM_OperatingSystem).Caption;
$ARCH=(Get-CimInstance -ClassName CIM_OperatingSystem).OSArchitecture;
$DATETIME=Get-Date -Format "yyyy-MM-dd HH:mm:ssK";
$MESSAGE='/* Version {0} built on "{1} {2}" at {3} */' -f $VERSION, $OS, $ARCH, $DATETIME;

# Build project
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

Remove-Item -LiteralPath "./dist/" -Force -Recurse -ErrorAction Ignore;
New-Item -Path "./dist/" -ItemType directory;
deno bundle --config ./tsconfig.json --lock=./src/lock.json ./src/main.ts ./dist/autocat.js;

if (!$?) 
{
	exit 1;
}

# Add build info
Add-Content ./dist/autocat.js $MESSAGE

exit 0;
