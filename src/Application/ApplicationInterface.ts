namespace Application {
    export interface ApplicationInterface {
        TIMEOUT: number;
        TAB_DIV_ID: string;
        TAB_DIV_CLASS: string;

        /**
         * Create a tab entry for configuring autocat
         */
        addAutoCatTab(): void;

        /**
         * Initialises the autocat application
         */
        init(): void;

        /**
         * Run autocat. Should be run as a timeout function after calling init()
         */
        run(): void;
    }
}
