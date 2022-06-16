import {CheckingAccount} from "./CheckingAccount";
import {AmountChecker} from "./AmountChecker";

export class BusinessCheckingAccount extends CheckingAccount implements AmountChecker{

  checkAmount(amount: number): void {
    if (amount < 1000) {
      throw new Error('1000 이상이어야 함.')
    }
  }

  open(initialAmount: number) {
    this.checkAmount(initialAmount);
    super.open(initialAmount);
  }
}