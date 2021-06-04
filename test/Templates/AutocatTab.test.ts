import { assert } from "../deps.ts";
import { AutocatTab } from "../../src/Templates/AutocatTab.ts";

Deno.test("Return HTML string should contain MENU_ITEM_NAME in MENU_ITEM_TPL", () => {
  var autocatTab = new AutocatTab();

  assert(autocatTab.getHtml().includes(autocatTab.MENU_ITEM_NAME));
});
