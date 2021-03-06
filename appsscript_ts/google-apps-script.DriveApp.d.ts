/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: DriveApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class DriveApp {
  static addFile(child: DriveApp.File): DriveApp.Folder;
  static addFolder(child: DriveApp.Folder): DriveApp.Folder;
  static continueFileIterator(continuationToken: string): DriveApp.FileIterator;
  static continueFolderIterator(continuationToken: string): DriveApp.FolderIterator;
  static createFile(blob: CommonModule.BlobSource): DriveApp.File;
  static createFile(name: string, content: string): DriveApp.File;
  static createFile(name: string, content: string, mimeType: string): DriveApp.File;
  static createFolder(name: string): DriveApp.Folder;
  static getFileById(id: string): DriveApp.File;
  static getFiles(): DriveApp.FileIterator;
  static getFilesByName(name: string): DriveApp.FileIterator;
  static getFilesByType(mimeType: string): DriveApp.FileIterator;
  static getFolderById(id: string): DriveApp.Folder;
  static getFolders(): DriveApp.FolderIterator;
  static getFoldersByName(name: string): DriveApp.FolderIterator;
  static getRootFolder(): DriveApp.Folder;
  static getStorageLimit(): number;
  static getStorageUsed(): number;
  static getTrashedFiles(): DriveApp.FileIterator;
  static getTrashedFolders(): DriveApp.FolderIterator;
  static removeFile(child: DriveApp.File): DriveApp.Folder;
  static removeFolder(child: DriveApp.Folder): DriveApp.Folder;
  static searchFiles(params: string): DriveApp.FileIterator;
  static searchFolders(params: string): DriveApp.FolderIterator;
  static continueRevisionIterator(continuationToken: string): DriveApp.RevisionIterator;
}

declare namespace DriveApp {

  export enum Access {

    ANYONE,
    ANYONE_WITH_LINK,
    DOMAIN,
    DOMAIN_WITH_LINK,
    PRIVATE

  }


  export interface File {

    addCommenter(emailAddress: string): DriveApp.File;
    addCommenter(user: CommonModule.User): DriveApp.File;
    addCommenters(emailAddresses: string[]): DriveApp.File;
    addEditor(emailAddress: string): DriveApp.File;
    addEditor(user: CommonModule.User): DriveApp.File;
    addEditors(emailAddresses: string[]): DriveApp.File;
    addViewer(emailAddress: string): DriveApp.File;
    addViewer(user: CommonModule.User): DriveApp.File;
    addViewers(emailAddresses: string[]): DriveApp.File;
    getAccess(email: string): DriveApp.Permission;
    getAccess(user: CommonModule.User): DriveApp.Permission;
    getAs(contentType: string): CommonModule.Blob;
    getBlob(): CommonModule.Blob;
    getDateCreated(): Date;
    getDescription(): string;
    getDownloadUrl(): string;
    getEditors(): DriveApp.User[];
    getId(): string;
    getLastUpdated(): Date;
    getMimeType(): string;
    getName(): string;
    getOwner(): DriveApp.User;
    getParents(): DriveApp.FolderIterator;
    getSharingAccess(): DriveApp.Access;
    getSharingPermission(): DriveApp.Permission;
    getSize(): number;
    getThumbnail(): CommonModule.Blob;
    getUrl(): string;
    getViewers(): DriveApp.User[];
    isShareableByEditors(): boolean;
    isStarred(): boolean;
    isTrashed(): boolean;
    makeCopy(): DriveApp.File;
    makeCopy(destination: DriveApp.Folder): DriveApp.File;
    makeCopy(name: string): DriveApp.File;
    makeCopy(name: string, destination: DriveApp.Folder): DriveApp.File;
    removeCommenter(emailAddress: string): DriveApp.File;
    removeCommenter(user: CommonModule.User): DriveApp.File;
    removeEditor(emailAddress: string): DriveApp.File;
    removeEditor(user: CommonModule.User): DriveApp.File;
    removeViewer(emailAddress: string): DriveApp.File;
    removeViewer(user: CommonModule.User): DriveApp.File;
    revokePermissions(user: string): DriveApp.File;
    revokePermissions(user: CommonModule.User): DriveApp.File;
    setContent(content: string): DriveApp.File;
    setDescription(description: string): DriveApp.File;
    setName(name: string): DriveApp.File;
    setOwner(emailAddress: string): DriveApp.File;
    setOwner(user: CommonModule.User): DriveApp.File;
    setShareableByEditors(shareable: boolean): DriveApp.File;
    setSharing(accessType: DriveApp.Access, permissionType: DriveApp.Permission): DriveApp.File;
    setStarred(starred: boolean): DriveApp.File;
    setTrashed(trashed: boolean): DriveApp.File;
    getRevisions(): DriveApp.RevisionIterator;

  }


  export interface FileIterator {

    getContinuationToken(): string;
    hasNext(): boolean;
    next(): DriveApp.File;

  }


  export interface Folder {

    addEditor(emailAddress: string): DriveApp.Folder;
    addEditor(user: CommonModule.User): DriveApp.Folder;
    addEditors(emailAddresses: string[]): DriveApp.Folder;
    addFile(child: DriveApp.File): DriveApp.Folder;
    addFolder(child: DriveApp.Folder): DriveApp.Folder;
    addViewer(emailAddress: string): DriveApp.Folder;
    addViewer(user: CommonModule.User): DriveApp.Folder;
    addViewers(emailAddresses: string[]): DriveApp.Folder;
    createFile(blob: CommonModule.BlobSource): DriveApp.File;
    createFile(name: string, content: string): DriveApp.File;
    createFile(name: string, content: string, mimeType: string): DriveApp.File;
    createFolder(name: string): DriveApp.Folder;
    getAccess(email: string): DriveApp.Permission;
    getAccess(user: CommonModule.User): DriveApp.Permission;
    getDateCreated(): Date;
    getDescription(): string;
    getEditors(): DriveApp.User[];
    getFiles(): DriveApp.FileIterator;
    getFilesByName(name: string): DriveApp.FileIterator;
    getFilesByType(mimeType: string): DriveApp.FileIterator;
    getFolders(): DriveApp.FolderIterator;
    getFoldersByName(name: string): DriveApp.FolderIterator;
    getId(): string;
    getLastUpdated(): Date;
    getName(): string;
    getOwner(): DriveApp.User;
    getParents(): DriveApp.FolderIterator;
    getSharingAccess(): DriveApp.Access;
    getSharingPermission(): DriveApp.Permission;
    getSize(): number;
    getUrl(): string;
    getViewers(): DriveApp.User[];
    isShareableByEditors(): boolean;
    isStarred(): boolean;
    isTrashed(): boolean;
    removeEditor(emailAddress: string): DriveApp.Folder;
    removeEditor(user: CommonModule.User): DriveApp.Folder;
    removeFile(child: DriveApp.File): DriveApp.Folder;
    removeFolder(child: DriveApp.Folder): DriveApp.Folder;
    removeViewer(emailAddress: string): DriveApp.Folder;
    removeViewer(user: CommonModule.User): DriveApp.Folder;
    revokePermissions(user: string): DriveApp.Folder;
    revokePermissions(user: CommonModule.User): DriveApp.Folder;
    searchFiles(params: string): DriveApp.FileIterator;
    searchFolders(params: string): DriveApp.FolderIterator;
    setDescription(description: string): DriveApp.Folder;
    setName(name: string): DriveApp.Folder;
    setOwner(emailAddress: string): DriveApp.Folder;
    setOwner(user: CommonModule.User): DriveApp.Folder;
    setShareableByEditors(shareable: boolean): DriveApp.Folder;
    setSharing(accessType: DriveApp.Access, permissionType: DriveApp.Permission): DriveApp.Folder;
    setStarred(starred: boolean): DriveApp.Folder;
    setTrashed(trashed: boolean): DriveApp.Folder;

  }


  export interface FolderIterator {

    getContinuationToken(): string;
    hasNext(): boolean;
    next(): DriveApp.Folder;

  }


  export enum Permission {

    COMMENT,
    EDIT,
    NONE,
    OWNER,
    VIEW

  }


  export interface User {

    getDomain(): string;
    getEmail(): string;
    getName(): string;
    getPhotoUrl(): string;
    getUserLoginId(): string;

  }


  export interface Revision {

    getId(): string;
    getLastEditor(): DriveApp.User;
    getModifiedDate(): Date;
    getSize(): number;

  }


  export interface RevisionIterator {

    getContinuationToken(): string;
    hasNext(): boolean;
    next(): DriveApp.Revision;

  }


}