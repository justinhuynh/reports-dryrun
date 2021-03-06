/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: GroupsApp.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class GroupsApp {
  static getGroupByEmail(email: string): GroupsApp.Group;
  static getGroups(): GroupsApp.Group[];
}

declare namespace GroupsApp {

  export interface Group {

    getEmail(): string;
    getRole(email: string): GroupsApp.Role;
    getRole(user: CommonModule.User): GroupsApp.Role;
    getUsers(): CommonModule.User[];
    hasUser(email: string): boolean;
    hasUser(user: CommonModule.User): boolean;

  }


  export enum Role {

    INVITED,
    MANAGER,
    MEMBER,
    OWNER,
    PENDING

  }


}