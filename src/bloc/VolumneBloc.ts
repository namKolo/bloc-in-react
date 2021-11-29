import { Subject } from "rxjs";
import {
  DecreaseVolumneEvent,
  IncreaseVolumneEvent,
  MuteEvent,
  VolumneEvent,
} from "./VolumneEvent";
import { VolumneState } from "./VolumneState";

class VolumneBloc {
  private _state: VolumneState;

  private _eventStream: Subject<VolumneEvent>;
  private _stateStream: Subject<VolumneState>;

  constructor() {
    this._state = new VolumneState(69);
    this._eventStream = new Subject();
    this._stateStream = new Subject();

    this._stateStream.next(this._state);

    this._eventStream.subscribe((e: VolumneEvent) => {
      if (e instanceof IncreaseVolumneEvent) {
        this._state = new VolumneState(this._state.volumne + e.increment);
      }
      if (e instanceof DecreaseVolumneEvent) {
        this._state = new VolumneState(this._state.volumne - e.decrement);
      }
      if (e instanceof MuteEvent) {
        this._state = new VolumneState(0);
      }

      this._stateStream.next(this._state);
    });
  }

  emit(event: VolumneEvent) {
    this._eventStream.next(event);
  }

  get state(): Subject<VolumneState> {
    return this._stateStream;
  }

  public close() {
    this._eventStream?.complete();
    this._stateStream?.complete();
  }
}

export default VolumneBloc;
