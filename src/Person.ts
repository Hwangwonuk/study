import {Occupation} from "./Occupation";

export class Person {
  /* 이름 */
  private _name: string;
  /* 직업 */
  private _occupation: Occupation;

  constructor(name: string, occupation: Occupation) {
    this._name = name;
    this._occupation = occupation;
  }

  /**
   * 정보 출력
   */
  print(): void {
    console.log('printing...');
    console.log(`name: ${this._name}`); // 변수를 사용할때는 따옴표 대신 이걸 사용
    console.log(`occupation: ${this._occupation}`);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get occupation(): Occupation {
    return this._occupation;
  }

  set occupation(value: Occupation) {
    this._occupation = value;
  }

  foo(value1: string, value2 = 'default'): void {
    console.log(`value1: ${value1}`);

    if (value2) {
      console.log(`value2: ${value2}`);
    }
  }

  callee(printName: string, callback: Function): Function {
    return function () {
      console.log(printName);
      callback();
    };
  }
}