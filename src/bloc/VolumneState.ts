export class VolumneState {
  private _volumne: number;
  constructor(volumne: number) {
    this._volumne = volumne;
  }

  get volumne(): number {
    return this._volumne;
  }
}
