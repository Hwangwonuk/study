// import {Person} from "./Person";
//
// const wonuk: Person = new Person('wonuk', 'Programmer');
//
// const callback: Function = function () {
//   console.log("i'm callback.");
// }
//
// const callee = wonuk.callee('wonuk', callback);
// console.log(callee());
//
// import {BackAccount} from "./BackAccount";
// import {SavingAccount} from "./SavingAccount";
//
// const account: BackAccount = new BackAccount();
// let money: number = 0;
//
// account.deposit(1000);
// console.log(`balance: ${account.balance}`);
//
// money = account.withdraw(100);
// console.log(`money: ${money}`);
//
//
// const savings: SavingAccount = new SavingAccount();
// savings.deposit(1000);
// console.log(`balance: ${savings.balance}`);
// console.log(`interest applied: ${savings.calculateInterestRate()}`);
//
// import {BusinessCheckingAccount} from "./BusinessCheckingAccount";
// import {PersonalCheckingAccount} from "./PersonalCheckingAccount";
//
// const bca: BusinessCheckingAccount = new BusinessCheckingAccount();
// try {
//   bca.open(1001); // error
// } catch (e){
//   console.log(e);
// }
// bca.open(1001);
// console.log(bca.chargeFee());
//
// const pca: PersonalCheckingAccount = new PersonalCheckingAccount();
// try {
//   pca.open(-1); // error
// } catch (e){
//   console.log(e);
// }
// pca.open(1001);
// console.log(pca.chargeFee());

import {Person} from "./Person";
import {Occupation} from "./Occupation";

const wonuk: Person = new Person('Wonuk', Occupation.BUSINESSMAN);
wonuk.print();

const tom: Person = new Person('Tom', Occupation.HOMELESS);
tom.print();