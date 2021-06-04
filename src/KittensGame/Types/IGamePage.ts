import { IUi } from "./IUi.ts";
import { IManager } from "./Managers/IManager.ts";

export interface IGamePage {
  ui: IUi;
  managers: IManager[];
  togglePause(): void;
}
