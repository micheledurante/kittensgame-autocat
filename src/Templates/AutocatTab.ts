import { ITemplate } from "./ITemplate.ts";

export class AutocatTab implements ITemplate {
  public MENU_ITEM_NAME = "Autocat";
  public MENU_ITEM_TPL =
    '<span> | </span><a href="#" class="tab %" style="white-space: nowrap;">%</a>';

  public getHtml() {
    return this.MENU_ITEM_TPL.replace(/%/gi, this.MENU_ITEM_NAME);
  }
}
