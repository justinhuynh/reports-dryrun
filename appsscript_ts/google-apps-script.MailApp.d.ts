/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: MailApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class MailApp {
  static getRemainingDailyQuota(): number;
  static sendEmail(message: any): void;
  static sendEmail(recipient: string, subject: string, body: string): void;
  static sendEmail(recipient: string, subject: string, body: string, options: any): void;
  static sendEmail(to: string, replyTo: string, subject: string, body: string): void;
}

