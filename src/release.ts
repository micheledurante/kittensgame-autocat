/**
 * Entry point for the release app.
 */
/// <reference path="Application/Autocat.ts" />
/// <reference path="Templates/AutocatTab.ts" />

var autocat = new Application.Autocat(window.document, new Templates.AutocatTab());
autocat.createUi();
