import React, { useEffect } from "react";
import { useObservable } from "hookdafish";

import VolumneBloc from "./bloc/VolumneBloc";
import {
  DecreaseVolumneEvent,
  IncreaseVolumneEvent,
  InitEvent,
  MuteEvent,
} from "./bloc/VolumneEvent";

const bloc = new VolumneBloc();

function App() {
  const state = useObservable(bloc.state);
  useEffect(() => {
    bloc.emit(new InitEvent());
  }, []);

  return (
    <div className="App">
      <div>{state?.volumne}</div>
      <div>
        <button onClick={() => bloc.emit(new IncreaseVolumneEvent(10))}>
          Increase
        </button>
        <button onClick={() => bloc.emit(new DecreaseVolumneEvent(10))}>
          Decrease
        </button>
        <button onClick={() => bloc.emit(new MuteEvent())}>Mute</button>
      </div>
    </div>
  );
}

export default App;
