/// <reference path="Application/Autocat.ts" />
/// <reference path="Templates/AutocatTab.ts" />

const autocat = new Application.Autocat(window.document, new Templates.AutocatTab());
autocat.init();
setInterval(function () { autocat.run(); }, autocat.TIMEOUT);
