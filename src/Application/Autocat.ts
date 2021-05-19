/// <reference path="../Templates/ITemplate.ts" />
/// <reference path="../Templates/AutocatTab.ts" />
/// <reference path="../KittensGame/Types/IGamePage.ts" />
/// <reference path="./Managers/AutocatManager.ts" />

namespace Application {
    export class Autocat implements IApplication {
        public TIMEOUT: number = 1000;
        public TAB_DIV_ID: string = 'gameContainerId';
        public TAB_DIV_CLASS: string = 'tabsContainer';

        private autoCatTab: Templates.ITemplate;
        private gamePage: KittensGame.Types.IGamePage;

        public constructor(gamePage: KittensGame.Types.IGamePage) {
            this.autoCatTab = new Templates.AutocatTab();
            this.gamePage = gamePage;
        }
        
        /**
         * Append an entry for configuring autocat to the main tabbed menu
         */
        public appendAutocatTab(): void {
            // tabsContainer.innerHTML = tabsContainer.innerHTML + this.autoCatTab.getHtml();
            this.autoCatTab.getHtml();
            
            const autocatManager = new Managers.AutocatManager(this.gamePage);
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
}
