import { assert, assertEquals } from "../../deps.ts";
import { AutocatManager } from "../../../src/Application/Managers/AutocatManager.ts";
import { IGamePage } from "../../../src/KittensGame/Types/IGamePage.ts";
import { Rhum } from "../../deps.ts";
import { GamePageMock } from "../../KittensGame/Types/__mocks__/GamePageMock.ts";

let gamePageStub: IGamePage;

Rhum.beforeAll(() => {
  gamePageStub = Rhum.mock<IGamePage>(GamePageMock).create();
});

Deno.test("New instance should implement IManager", () => {
  const autocatManager = new AutocatManager(gamePageStub);

  assert(autocatManager.hasOwnProperty("game"));
});

Deno.test("Constructor should set properties via DI", () => {
  const autocatManager = new AutocatManager(gamePageStub);

  assertEquals(autocatManager.game, gamePageStub);
});
