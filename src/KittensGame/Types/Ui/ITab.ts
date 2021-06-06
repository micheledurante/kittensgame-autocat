import { IGamePage } from "../IGamePage.ts";

// com.nuclearunicorn.game.ui.tab
export interface ITab {
  game?: IGamePage;
  buttons?: Array<unknown>;
  tabId: string;
  tabName: string;
  domNode?: unknown;
  visible: boolean;
}
