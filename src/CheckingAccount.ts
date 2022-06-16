import {BackAccount} from "./BackAccount";

export class CheckingAccount extends BackAccount {
  // 월 수수료
  protected monthlyFeeAmount: number = 5.0;

  chargeFee(): number {
    return this.monthlyFeeAmount;
  }

  open(initialAmount: number) {
    this.monthlyFeeAmount = initialAmount;
  }
}