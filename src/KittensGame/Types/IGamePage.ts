import { ITab } from "../../Application/Ui/Tab/ITab.ts";
import { IUi } from "./IUi.ts";
import { IManager } from "./Managers/IManager.ts";

export interface IGamePage {
  ui: IUi;
  managers: IManager[];
  autocatTab: ITab;

  togglePause(): void;

  addTab(tab: ITab): void;
}
