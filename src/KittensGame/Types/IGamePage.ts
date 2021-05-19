/// <reference path="./IUi.ts" />
/// <reference path="./Managers/IManager.ts" />

namespace KittensGame.Types {
    export interface IGamePage {
        ui: IUi;
        managers: Managers.IManager[];

        togglePause(): void;
    }
}