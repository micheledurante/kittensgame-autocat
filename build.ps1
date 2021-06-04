# Setup
$VERSION="0.0.1";
$OS=(Get-CimInstance -ClassName CIM_OperatingSystem).Caption;
$ARCH=(Get-CimInstance -ClassName CIM_OperatingSystem).OSArchitecture;
$DATETIME=Get-Date -Format "yyyy-MM-dd HH:mm:ssK";
$MESSAGE='/* Version {0} built on "{1} {2}" at {3} */' -f $VERSION, $OS, $ARCH, $DATETIME;

# Build project
deno fmt ./src/;
deno fmt ./test/;
deno lint ./src/;
deno lint ./test/;
deno test ./test/;
Remove-Item -LiteralPath "./dist/" -Force -Recurse -ErrorAction Ignore;
New-Item -Path "./dist/" -ItemType directory;
deno bundle --lock=./src/lock.json ./src/main.ts ./dist/autocat.js

# Add build info
Add-Content ./dist/autocat.js $MESSAGE
