import { IApplication } from "./IApplication.ts";
import { ITemplate } from "../Templates/ITemplate.ts";
import { IGamePage } from "../KittensGame/Types/IGamePage.ts";
import { AutocatTab } from "../Templates/AutocatTab.ts";
import { AutocatManager } from "./Managers/AutocatManager.ts";

export class Autocat implements IApplication {
  public TIMEOUT = 1000;
  public TAB_DIV_ID = "gameContainerId";
  public TAB_DIV_CLASS = "tabsContainer";

  private autoCatTab: ITemplate;
  private gamePage: IGamePage;

  public constructor(gamePage: IGamePage) {
    this.autoCatTab = new AutocatTab();
    this.gamePage = gamePage;
  }

  /**
       * Append an entry for configuring autocat to the main tabbed menu
       */
  public appendAutocatTab(): void {
    // tabsContainer.innerHTML = tabsContainer.innerHTML + this.autoCatTab.getHtml();
    this.autoCatTab.getHtml();

    const autocatManager = new AutocatManager(this.gamePage);
    this.gamePage.managers.push(autocatManager);
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
