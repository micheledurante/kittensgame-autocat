import { IGamePage } from "../../KittensGame/Types/IGamePage.ts";
import { IManager } from "../../KittensGame/Types/Managers/IManager.ts";

export class AutocatManager implements IManager {
  public id = "autocat";
  public game: IGamePage;

  public constructor(gamePage: IGamePage) {
    this.game = gamePage;
  }
}
