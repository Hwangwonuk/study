import {CheckingAccount} from "./CheckingAccount";
import {AmountChecker} from "./AmountChecker";

export class PersonalCheckingAccount extends CheckingAccount {

  open(initialAmount: number) {
    // this.checkAmount(initialAmount);
    if (initialAmount < 0) {
      throw new Error('0 이상이어야 함.')
    }
    super.open(initialAmount);
  }
  //
  // checkAmount(amount: number): void {
  //   if (amount < 0) {
  //     throw new Error('0 이상이어야 함.')
  //   }
  // }

}