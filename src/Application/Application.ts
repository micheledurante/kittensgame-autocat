import { IApplication } from "./IApplication.ts";
import { ITemplate } from "../Templates/ITemplate.ts";
import { IGamePage } from "../KittensGame/Types/IGamePage.ts";
import { AutocatTab } from "../Templates/AutocatTab.ts";
import { AutocatManager } from "./Managers/AutocatManager.ts";
import { Autocat } from "./Ui/Tab/Autocat.ts";
import { Document } from "../deps.ts";

export class Application implements IApplication {
  public TIMEOUT = 1000;
  public TAB_DIV_ID = "gameContainerId";
  public TAB_DIV_CLASS = "tabsContainer";

  private autoCatTab: ITemplate;
  private game: IGamePage;
  private document: Document;

  public constructor(gamePage: IGamePage, document: Document) {
    this.autoCatTab = new AutocatTab();
    this.game = gamePage;
    this.document = document;
  }

  /**
   * Append an entry for configuring autocat to the main tabbed menu
   */
  public appendAutocatTab(): void {
    // tabsContainer.innerHTML = tabsContainer.innerHTML + this.autoCatTab.getHtml();
    this.autoCatTab.getHtml();

    this.game.managers.push(new AutocatManager(this.game));

    const autocat = new Autocat(this.game);
    this.game.autocatTab = autocat;
    this.game.addTab(autocat);
  }

  /**
   * Create the UI for autocat
   */
  public createUi(): void {
    this.appendAutocatTab();
  }

  /**
   * Run autocat. Should be run as a timeout function after calling createUi()
   */
  public run(): void {
    setInterval(() => this.run(), this.TIMEOUT);
  }
}
