/// <reference path="Application/Autocat.ts" />
/// <reference path="Templates/AutocatTab.ts" />

const autocat = new Application.Autocat(window.document, new Templates.AutocatTab());
autocat.init();
// const timeout = setInterval(function () { autoCat.run(); }, autoCat.TIMEOUT);
