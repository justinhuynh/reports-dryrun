declare module CommonModule {
  export interface Blob {
    copyBlob(): Blob;
    getAs(contentType: string): Blob;
    getBytes(): number[];
    getContentType(): string;
    getDataAsString(): string;
    getDataAsString(charset: string): string;
    getName(): string;
    isGoogleType(): boolean;
    setBytes(data: number[]): Blob;
    setContentType(contentType: string): Blob;
    setContentTypeFromExtension(): Blob;
    setDataFromString(string: string): Blob;
    setDataFromString(string: string, charset: string): Blob;
    setName(name: string): Blob;
    getAllBlobs(): Blob[];
  }

  export interface BlobSource {
    getAs(contentType: string): Blob;
    getBlob(): Blob;
  }


  export interface Browser {
    Buttons: ButtonSet;
    inputBox(prompt: string): string;
    inputBox(prompt: string, buttons: ButtonSet): string;
    inputBox(title: string, prompt: string, buttons: ButtonSet): string;
    msgBox(prompt: string): string;
    msgBox(prompt: string, buttons: ButtonSet): string;
    msgBox(title: string, prompt: string, buttons: ButtonSet): string;
  }

  export enum Button { CLOSE, OK, CANCEL, YES, NO }

  export enum ButtonSet { OK, OK_CANCEL, YES_NO, YES_NO_CANCEL }

  export interface Logger {
    clear(): void;
    getLog(): string;
    log(data: Object): Logger;
    log(format: string, ...values: Object[]): Logger;
  }

  export interface Menu {
    addItem(caption: string, functionName: string): Menu;
    addSeparator(): Menu;
    addSubMenu(menu: Menu): Menu;
    addToUi(): void;
  }

  export enum MimeType { GOOGLE_APPS_SCRIPT, GOOGLE_DRAWINGS, GOOGLE_DOCS, GOOGLE_FORMS, GOOGLE_SHEETS, GOOGLE_SLIDES, FOLDER, BMP, GIF, JPEG, PNG, SVG, PDF, CSS, CSV, HTML, JAVASCRIPT, PLAIN_TEXT, RTF, OPENDOCUMENT_GRAPHICS, OPENDOCUMENT_PRESENTATION, OPENDOCUMENT_SPREADSHEET, OPENDOCUMENT_TEXT, MICROSOFT_EXCEL, MICROSOFT_EXCEL_LEGACY, MICROSOFT_POWERPOINT, MICROSOFT_POWERPOINT_LEGACY, MICROSOFT_WORD, MICROSOFT_WORD_LEGACY, ZIP }

  export enum Month { JANUARY, FEBRUARY, MARCH, APRIL, MAY, JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER }

  export interface PromptResponse {
    getResponseText(): string;
    getSelectedButton(): Button;
  }

  export interface Session {
    getActiveUser(): User;
    getActiveUserLocale(): string;
    getEffectiveUser(): User;
    getScriptTimeZone(): string;
    getTimeZone(): string;
    getUser(): User;
  }

  export interface Ui {
    Button: Button;
    ButtonSet: ButtonSet;
    alert(prompt: string): Button;
    alert(prompt: string, buttons: ButtonSet): Button;
    alert(title: string, prompt: string, buttons: ButtonSet): Button;
    createAddonMenu(): Menu;
    createMenu(caption: string): Menu;
    prompt(prompt: string): PromptResponse;
    prompt(prompt: string, buttons: ButtonSet): PromptResponse;
    prompt(title: string, prompt: string, buttons: ButtonSet): PromptResponse;
    showModalDialog(userInterface: Object, title: string): void;
    showModelessDialog(userInterface: Object, title: string): void;
    showSidebar(userInterface: Object): void;
    showDialog(userInterface: Object): void;
  }

  export interface User {
    getEmail(): string;
    getUserLoginId(): string;
  }

  export enum Weekday { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY }

  export interface DataTable {}
  export interface DataTableBuilder {}
  export interface DataTableSource {}

  export interface DigestAlgorithm {}
}

declare module ScriptApp {
  export interface CalendarTriggerBuilder {}
}
