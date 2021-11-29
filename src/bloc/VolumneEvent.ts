export abstract class VolumneEvent {}

export class IncreaseVolumneEvent extends VolumneEvent {
  private _increment: number;

  constructor(increment: number) {
    super();
    this._increment = increment;
  }

  get increment(): number {
    return this._increment;
  }
}

export class DecreaseVolumneEvent extends VolumneEvent {
  private _decrement: number;

  constructor(decrement: number) {
    super();
    this._decrement = decrement;
  }

  get decrement(): number {
    return this._decrement;
  }
}

export class MuteEvent extends VolumneEvent {}
export class InitEvent extends VolumneEvent {}
