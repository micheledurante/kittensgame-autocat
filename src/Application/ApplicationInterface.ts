namespace Application {
    export interface ApplicationInterface {
        TIMEOUT: number;
        TAB_DIV_ID: string;
        TAB_DIV_CLASS: string;

        addAutoCatTab(): void;
        createUi(): void;
        run(): void;
    }
}
