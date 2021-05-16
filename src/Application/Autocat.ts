/// <reference path="../Templates/TemplateInterface.ts" />

namespace Application {
    export class Autocat implements ApplicationInterface {
        public TIMEOUT: number = 1000;
        public TAB_DIV_ID: string = 'gameContainerId';
        public TAB_DIV_CLASS: string = 'tabsContainer';

        private document: Document;
        private autoCatTab: Templates.TemplateInterface;

        public constructor(document: Document, autoCatTab: Templates.TemplateInterface) {
            this.document = document;
            this.autoCatTab = autoCatTab;
        }
        
        /**
         * Create a tab entry for configuring autocat
         */
        public addAutoCatTab(): void {
            const gameContainerId = this.document.getElementById(this.TAB_DIV_ID);

            if (gameContainerId === null) {
                return;
            }

            const tabsContainer = gameContainerId.getElementsByClassName(this.TAB_DIV_CLASS)[0];

            if (!tabsContainer) {
                return;
            }

            tabsContainer.innerHTML = tabsContainer.innerHTML + this.autoCatTab.getHtml();
        }

        /**
         * Create the UI for autocat
         */
        public createUi(): void {
            this.addAutoCatTab();
        }

        /**
         * Run autocat. Should be run as a timeout function after calling createUi()
         */
        public run(): void {
            setInterval(() => this.run(), this.TIMEOUT);
        }
    }
}
