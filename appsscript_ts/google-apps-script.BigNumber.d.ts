/**
 * @fileoverview TypeScript type definitions for Apps Script namespace: BigNumber.
 * This file was autogenerated by the Apps Script SDK.
 */


declare class BigNumber {
  static abs(): any;
  static add(augend: any): any;
  static add(augend: number): any;
  static compareTo(value: any): number;
  static compareTo(value: number): number;
  static divide(divisor: any): any;
  static divide(divisor: number): any;
  static divideAndRemainder(divisor: any): BigNumber[];
  static divideAndRemainder(divisor: number): BigNumber[];
  static divideToIntegralValue(divisor: any): any;
  static divideToIntegralValue(divisor: number): any;
  static max(value: any): any;
  static max(value: number): any;
  static min(value: any): any;
  static min(value: number): any;
  static movePointLeft(shift: number): any;
  static movePointRight(shift: number): any;
  static multiply(multiplicand: any): any;
  static multiply(multiplicand: number): any;
  static negate(): any;
  static newInstance(): any;
  static parse(value: string): any;
  static parse(value: string, radix: number): any;
  static plus(): any;
  static pow(exponent: number): any;
  static precision(): number;
  static remainder(divisor: any): any;
  static remainder(divisor: number): any;
  static sign(): number;
  static subtract(subtrahend: any): any;
  static subtract(subtrahend: number): any;
  static toExponential(): string;
  static toFixed(): string;
  static toPrecision(): string;
  static toString(): string;
  static unitInTheLastPlaces(): any;
  static valueOf(): number;
  static valueOf(value: number): any;
}

