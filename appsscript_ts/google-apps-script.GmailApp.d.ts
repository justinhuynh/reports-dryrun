/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: GmailApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class GmailApp {
  static createLabel(name: string): GmailApp.GmailLabel;
  static deleteLabel(label: GmailApp.GmailLabel): GmailApp;
  static getAliases(): string[];
  static getChatThreads(): GmailApp.GmailThread[];
  static getChatThreads(start: number, max: number): GmailApp.GmailThread[];
  static getDraftMessages(): GmailApp.GmailMessage[];
  static getInboxThreads(): GmailApp.GmailThread[];
  static getInboxThreads(start: number, max: number): GmailApp.GmailThread[];
  static getInboxUnreadCount(): number;
  static getMessageById(id: string): GmailApp.GmailMessage;
  static getMessagesForThread(thread: GmailApp.GmailThread): GmailApp.GmailMessage[];
  static getMessagesForThreads(threads: GmailApp.GmailThread[]): GmailApp.GmailMessage[][];
  static getPriorityInboxThreads(): GmailApp.GmailThread[];
  static getPriorityInboxThreads(start: number, max: number): GmailApp.GmailThread[];
  static getPriorityInboxUnreadCount(): number;
  static getSpamThreads(): GmailApp.GmailThread[];
  static getSpamThreads(start: number, max: number): GmailApp.GmailThread[];
  static getSpamUnreadCount(): number;
  static getStarredThreads(): GmailApp.GmailThread[];
  static getStarredThreads(start: number, max: number): GmailApp.GmailThread[];
  static getStarredUnreadCount(): number;
  static getThreadById(id: string): GmailApp.GmailThread;
  static getTrashThreads(): GmailApp.GmailThread[];
  static getTrashThreads(start: number, max: number): GmailApp.GmailThread[];
  static getUserLabelByName(name: string): GmailApp.GmailLabel;
  static getUserLabels(): GmailApp.GmailLabel[];
  static markMessageRead(message: GmailApp.GmailMessage): GmailApp;
  static markMessageUnread(message: GmailApp.GmailMessage): GmailApp;
  static markMessagesRead(messages: GmailApp.GmailMessage[]): GmailApp;
  static markMessagesUnread(messages: GmailApp.GmailMessage[]): GmailApp;
  static markThreadImportant(thread: GmailApp.GmailThread): GmailApp;
  static markThreadRead(thread: GmailApp.GmailThread): GmailApp;
  static markThreadUnimportant(thread: GmailApp.GmailThread): GmailApp;
  static markThreadUnread(thread: GmailApp.GmailThread): GmailApp;
  static markThreadsImportant(threads: GmailApp.GmailThread[]): GmailApp;
  static markThreadsRead(threads: GmailApp.GmailThread[]): GmailApp;
  static markThreadsUnimportant(threads: GmailApp.GmailThread[]): GmailApp;
  static markThreadsUnread(threads: GmailApp.GmailThread[]): GmailApp;
  static moveMessageToTrash(message: GmailApp.GmailMessage): GmailApp;
  static moveMessagesToTrash(messages: GmailApp.GmailMessage[]): GmailApp;
  static moveThreadToArchive(thread: GmailApp.GmailThread): GmailApp;
  static moveThreadToInbox(thread: GmailApp.GmailThread): GmailApp;
  static moveThreadToSpam(thread: GmailApp.GmailThread): GmailApp;
  static moveThreadToTrash(thread: GmailApp.GmailThread): GmailApp;
  static moveThreadsToArchive(threads: GmailApp.GmailThread[]): GmailApp;
  static moveThreadsToInbox(threads: GmailApp.GmailThread[]): GmailApp;
  static moveThreadsToSpam(threads: GmailApp.GmailThread[]): GmailApp;
  static moveThreadsToTrash(threads: GmailApp.GmailThread[]): GmailApp;
  static refreshMessage(message: GmailApp.GmailMessage): GmailApp;
  static refreshMessages(messages: GmailApp.GmailMessage[]): GmailApp;
  static refreshThread(thread: GmailApp.GmailThread): GmailApp;
  static refreshThreads(threads: GmailApp.GmailThread[]): GmailApp;
  static search(query: string): GmailApp.GmailThread[];
  static search(query: string, start: number, max: number): GmailApp.GmailThread[];
  static sendEmail(recipient: string, subject: string, body: string): GmailApp;
  static sendEmail(recipient: string, subject: string, body: string, options: any): GmailApp;
  static starMessage(message: GmailApp.GmailMessage): GmailApp;
  static starMessages(messages: GmailApp.GmailMessage[]): GmailApp;
  static unstarMessage(message: GmailApp.GmailMessage): GmailApp;
  static unstarMessages(messages: GmailApp.GmailMessage[]): GmailApp;
  static continueMessageIterator(continuationToken: string): GmailApp.GmailMessageIterator;
  static continueThreadIterator(continuationToken: string): GmailApp.GmailThreadIterator;
  static createDraft(recipient: string, subject: string, body: string): GmailApp.GmailDraft;
  static createDraft(recipient: string, subject: string, body: string, options: any): GmailApp.GmailDraft;
  static getDraft(draftId: string): GmailApp.GmailDraft;
  static getDrafts(): GmailApp.GmailDraft[];
  static getMessages(): GmailApp.GmailMessageIterator;
  static getThreads(): GmailApp.GmailThreadIterator;
  static getThreads(label: GmailApp.LabelType): GmailApp.GmailThreadIterator;
  static searchMessages(query: string): GmailApp.GmailMessageIterator;
  static searchThreads(query: string): GmailApp.GmailThreadIterator;
}

declare namespace GmailApp {

  export interface GmailAttachment {

    copyBlob(): CommonModule.Blob;
    getAllBlobs(): CommonModule.Blob[];
    getAs(contentType: string): CommonModule.Blob;
    getBytes(): number[];
    getContentType(): string;
    getDataAsString(): string;
    getDataAsString(charset: string): string;
    getName(): string;
    getSize(): number;
    isGoogleType(): boolean;
    setBytes(data: number[]): CommonModule.Blob;
    setContentType(contentType: string): CommonModule.Blob;
    setContentTypeFromExtension(): CommonModule.Blob;
    setDataFromString(string: string): CommonModule.Blob;
    setDataFromString(string: string, charset: string): CommonModule.Blob;
    setName(name: string): CommonModule.Blob;

  }


  export interface GmailLabel {

    addToThread(thread: GmailApp.GmailThread): GmailApp.GmailLabel;
    addToThreads(threads: GmailApp.GmailThread[]): GmailApp.GmailLabel;
    deleteLabel(): void;
    getName(): string;
    getThreads(): GmailApp.GmailThread[];
    getThreads(start: number, max: number): GmailApp.GmailThread[];
    getUnreadCount(): number;
    removeFromThread(thread: GmailApp.GmailThread): GmailApp.GmailLabel;
    removeFromThreads(threads: GmailApp.GmailThread[]): GmailApp.GmailLabel;
    getMessageCount(): number;
    getThreadCount(): number;
    getThreadsIterator(): GmailApp.GmailThreadIterator;
    getUnreadMessageCount(): number;
    getUnreadThreadCount(): number;

  }


  export interface GmailMessage {

    forward(recipient: string): GmailApp.GmailMessage;
    forward(recipient: string, options: any): GmailApp.GmailMessage;
    getAttachments(): GmailApp.GmailAttachment[];
    getBcc(): string;
    getBody(): string;
    getCc(): string;
    getDate(): Date;
    getFrom(): string;
    getId(): string;
    getPlainBody(): string;
    getRawContent(): string;
    getReplyTo(): string;
    getSubject(): string;
    getThread(): GmailApp.GmailThread;
    getTo(): string;
    isDraft(): boolean;
    isInChats(): boolean;
    isInInbox(): boolean;
    isInTrash(): boolean;
    isStarred(): boolean;
    isUnread(): boolean;
    markRead(): GmailApp.GmailMessage;
    markUnread(): GmailApp.GmailMessage;
    moveToTrash(): GmailApp.GmailMessage;
    refresh(): GmailApp.GmailMessage;
    reply(body: string): GmailApp.GmailMessage;
    reply(body: string, options: any): GmailApp.GmailMessage;
    replyAll(body: string): GmailApp.GmailMessage;
    replyAll(body: string, options: any): GmailApp.GmailMessage;
    star(): GmailApp.GmailMessage;
    unstar(): GmailApp.GmailMessage;
    addLabels(labels: GmailApp.GmailLabel[]): GmailApp.GmailMessage;
    getThreadId(): string;
    removeLabels(labels: GmailApp.GmailLabel[]): GmailApp.GmailMessage;

  }


  export interface GmailThread {

    addLabel(label: GmailApp.GmailLabel): GmailApp.GmailThread;
    getFirstMessageSubject(): string;
    getId(): string;
    getLabels(): GmailApp.GmailLabel[];
    getLastMessageDate(): Date;
    getMessageCount(): number;
    getMessages(): GmailApp.GmailMessage[];
    getPermalink(): string;
    hasStarredMessages(): boolean;
    isImportant(): boolean;
    isInChats(): boolean;
    isInInbox(): boolean;
    isInSpam(): boolean;
    isInTrash(): boolean;
    isUnread(): boolean;
    markImportant(): GmailApp.GmailThread;
    markRead(): GmailApp.GmailThread;
    markUnimportant(): GmailApp.GmailThread;
    markUnread(): GmailApp.GmailThread;
    moveToArchive(): GmailApp.GmailThread;
    moveToInbox(): GmailApp.GmailThread;
    moveToSpam(): GmailApp.GmailThread;
    moveToTrash(): GmailApp.GmailThread;
    refresh(): GmailApp.GmailThread;
    removeLabel(label: GmailApp.GmailLabel): GmailApp.GmailThread;
    reply(body: string): GmailApp.GmailThread;
    reply(body: string, options: any): GmailApp.GmailThread;
    replyAll(body: string): GmailApp.GmailThread;
    replyAll(body: string, options: any): GmailApp.GmailThread;
    addLabels(labels: GmailApp.GmailLabel[]): GmailApp.GmailThread;
    createDraft(body: string): GmailApp.GmailThread;
    createDraft(body: string, options: any): GmailApp.GmailThread;
    listDrafts(): GmailApp.GmailDraft[];
    removeLabels(labels: GmailApp.GmailLabel[]): GmailApp.GmailThread;

  }


  export interface GmailDraft {

    deleteDraft(): void;
    getId(): string;
    getMessage(): GmailApp.GmailMessage;
    send(): GmailApp.GmailMessage;
    setMessage(message: GmailApp.GmailMessage): void;
    update(recipient: string, subject: string, body: string): GmailApp.GmailDraft;
    update(recipient: string, subject: string, body: string, options: any): GmailApp.GmailDraft;
    updateAndSend(recipient: string, subject: string, body: string): GmailApp.GmailMessage;
    updateAndSend(recipient: string, subject: string, body: string, options: any): GmailApp.GmailMessage;

  }


  export interface GmailMessageIterator {

    getContinuationToken(): string;
    hasNext(): boolean;
    next(): GmailApp.GmailMessage;

  }


  export interface GmailThreadIterator {

    getContinuationToken(): string;
    hasNext(): boolean;
    next(): GmailApp.GmailThread;

  }


  export enum LabelType {

    CHAT,
    INBOX,
    SPAM,
    STARRED,
    TRASH

  }


}