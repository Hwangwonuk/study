import {BackAccount} from "./BackAccount";
import {InterestRateApplier} from "./InterestRateApplier";

export class SavingAccount extends BackAccount implements InterestRateApplier{
  // 이자율
  private readonly interestRate;

  constructor(interestRate: number = 0.07) {
    super();
    this.interestRate = interestRate;
  }

  setInterestRate(newInterestRate: number) {
    return this.balance = newInterestRate;
  }

  calculateInterestRate(): number {
    return this.balance = (this.balance + this.balance * this.interestRate);
  }
}