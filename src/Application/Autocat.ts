/// <reference path="../Templates/TemplateInterface.ts" />

namespace Application {
    export class Autocat implements ApplicationInterface {
        public TIMEOUT: number = 1000;

        private document: Document;
        private autoCatTab: Templates.TemplateInterface;

        public constructor(document: Document, autoCatTab: Templates.TemplateInterface) {
            this.document = document;
            this.autoCatTab = autoCatTab;
        }

        public addAutoCatTab(): void {
            const gameContainerId = this.document.getElementById('gameContainerId');

            if (gameContainerId === null) {
                return;
            }

            const tabsContainer = gameContainerId.getElementsByClassName('tabsContainer')[0];

            if (!tabsContainer) {
                return;
            }

            tabsContainer.innerHTML = tabsContainer.innerHTML + this.autoCatTab.getHtml();
        }

        public init(): void {
            this.addAutoCatTab();
        }

        public run(): void {

            // read game object
        }
    }
}
