import { IGamePage } from "../../../../src/KittensGame/Types/IGamePage.ts";
import { IUi } from "../../../../src/KittensGame/Types/IUi.ts";
import { IManager } from "../../../../src/KittensGame/Types/Managers/IManager.ts";

export class GamePageMock implements IGamePage {
  ui!: IUi;
  managers!: IManager[];

  togglePause(): void {
    throw new Error("Method not implemented.");
  }
}
