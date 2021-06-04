export interface IApplication {
  TIMEOUT: number;
  TAB_DIV_ID: string;
  TAB_DIV_CLASS: string;

  appendAutocatTab(): void;
  createUi(): void;
  run(): void;
}
