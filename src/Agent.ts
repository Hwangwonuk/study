export class Agent {

  private _name: string = 'FA';

  constructor(name: string) {
    this._name = name;
  }

  introduce(): void {
    console.log(`agentName: ${this._name}`);
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

}