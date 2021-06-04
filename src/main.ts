import { IGamePage } from "./KittensGame/Types/IGamePage.ts";
import { Autocat } from "./Application/Autocat.ts";

declare var gamePage: IGamePage;

var autocat = new Autocat(gamePage);
autocat.createUi();
