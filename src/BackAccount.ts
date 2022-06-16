export  class BackAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  // 예금
  deposit(amount: number): number {
    return this._balance += amount;
  }

  withdraw(amount: number): number {
    if (amount < this._balance) {
      return this._balance -= amount;
    } else {
      throw new Error('잔액 부족');
    }
  }

}