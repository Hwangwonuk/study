import {Person} from "./Person";

const wonuk: Person = new Person('wonuk', 'Programmer');

const callback: Function = function () {
  console.log("i'm callback.");
}

const callee = wonuk.callee('wonuk', callback);
console.log(callee());