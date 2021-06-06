import { IGamePage } from "./KittensGame/Types/IGamePage.ts";
import { Application } from "./Application/Application.ts";
import { Document } from "./deps.ts";

declare var gamePage: IGamePage; // This is the global that at runtime holds the complete game
declare var document: Document;

if (typeof gamePage === "undefined" || !gamePage) {
  alert("Autocat: KittensGame is not correctly initialised. Load it again");
} else {
  const application = new Application(gamePage, document);
  application.createUi();
}
