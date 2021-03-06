/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: UrlFetchApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class UrlFetchApp {
  static fetch(url: string): UrlFetchApp.HTTPResponse;
  static fetch(url: string, params: any): UrlFetchApp.HTTPResponse;
  static getRequest(url: string): any;
  static getRequest(url: string, params: any): any;
}

declare namespace UrlFetchApp {

  export interface HTTPResponse {

    getAllHeaders(): any;
    getAs(contentType: string): CommonModule.Blob;
    getBlob(): CommonModule.Blob;
    getContent(): number[];
    getContentText(): string;
    getContentText(charset: string): string;
    getHeaders(): any;
    getResponseCode(): number;

  }


}