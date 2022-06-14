import {Agent} from "./Agent";

export class Player {

  private _name: string;
  private _team: string = 'FA';
  private _contractPeriodMonth: number = 0;
  private _agent: Agent;

  constructor(name: string, team: string, contractPeriodMonth: number, agent: Agent) {
    this._name = name;
    this._team = team;
    this._contractPeriodMonth = contractPeriodMonth;
    this._agent = agent;
  }

  introduce(): void {
    console.log(`name: ${this._name}`);
    console.log(`team: ${this._team}`);
    console.log(`contractPeriodMonth: ${this._contractPeriodMonth}`);
    console.log(`agent: ${this._agent}`);
  }

  join(team: string, contractMonth: number): void {
    this._team = team;
    this._contractPeriodMonth = contractMonth;
  }

  leave(): void {
    this._team = 'FA';
  }

  extendContract(periodMonth: number): void {
    this._contractPeriodMonth = this._contractPeriodMonth + periodMonth;
  }

  managedBy(agent: Agent): void {
    this._agent = agent;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get team(): string {
    return this._team;
  }

  set team(value: string) {
    this._team = value;
  }

  get contractPeriodMonth(): number {
    return this._contractPeriodMonth;
  }

  set contractPeriodMonth(value: number) {
    this._contractPeriodMonth = value;
  }

  get agent(): Agent {
    return this._agent;
  }

  set agent(value: Agent) {
    this._agent = value;
  }
}