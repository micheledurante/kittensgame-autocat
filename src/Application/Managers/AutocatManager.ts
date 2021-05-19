/// <reference path="./IAutocatManager.ts" />
/// <reference path="../../KittensGame/Types/IGamePage.ts" />

namespace Application.Managers {
    export class AutocatManager implements IAutocatManager {
        game: KittensGame.Types.IGamePage;

        public constructor(gamePage: KittensGame.Types.IGamePage) {
            this.game = gamePage;
        }
    }
}