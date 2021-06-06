import { IGamePage } from "../../../KittensGame/Types/IGamePage.ts";
import { IChildrenAware } from "../../../KittensGame/Types/Ui/IChildrenAware.ts";
import { IContentRowRenderer } from "../../../KittensGame/Types/Ui/IContentRowRenderer.ts";
import { ITab } from "./ITab.ts";
import { Node } from "../../../deps.ts";

const TAB_NAME = "autocat";
const TAB_ID = "Autocat";

export class Autocat implements ITab, IChildrenAware, IContentRowRenderer {
  public prop = "autocatTab";
  public domNode?: Node;

  // com.nuclearunicorn.game.ui.tab
  public game?: IGamePage;
  public buttons?: Array<unknown>;
  public tabId: string;
  public tabName: string;
  public visible: boolean;

  // mixin.IChildrenAware
  public children?: unknown[];

  // com.nuclearunicorn.game.ui.ContentRowRenderer
  public twoRows: boolean;
  public leftRow?: boolean;
  public rightRow?: boolean;
  public content: unknown;

  public constructor(gamePage: IGamePage) {
    this.game = gamePage;
    this.twoRows = false;
    this.children = new Array<unknown>();
    this.visible = true;
    this.tabId = TAB_ID;
    this.tabName = TAB_NAME;
    this.buttons = new Array<unknown>();
  }

  public addChild(child: unknown): void {
    if (!child) {
      throw "Child can't be null";
    }

    this.children?.push(child);
  }

  public render(container: unknown): void {
    this.initRenderer(container);
  }

  public update(): void {
    throw new Error("Method not implemented.");
  }

  public initRenderer(content: unknown): void {
    this.content = content;
  }

  public getElementContainer(id: number): unknown {
    if (!this.twoRows) {
      return this.content;
    }

    if (id % 2 === 0) {
      return this.leftRow;
    } else {
      return this.rightRow;
    }
  }
}
