import { IGamePage } from "../../KittensGame/Types/IGamePage.ts";
import { IManager } from "../../KittensGame/Types/Managers/IManager.ts";

export class AutocatManager implements IManager {
  game: IGamePage;

  public constructor(gamePage: IGamePage) {
    this.game = gamePage;
  }
}
