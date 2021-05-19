/**
 * Entry point for the release app.
 */
/// <reference path="Application/Autocat.ts" />
/// <reference path="KittensGame/Types/IGamePage.ts"/>

declare var gamePage: KittensGame.Types.IGamePage;

var autocat = new Application.Autocat(gamePage);
autocat.createUi();
