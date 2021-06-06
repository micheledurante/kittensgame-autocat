import { ITab as KittensGameITab } from "../../../KittensGame/Types/Ui/ITab.ts";
import { Node } from "../../../deps.ts";

export interface ITab extends KittensGameITab {
  prop: string;
  domNode?: Node;
}
