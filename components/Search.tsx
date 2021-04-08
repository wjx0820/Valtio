import React from "react";
import { useSnapshot } from "valtio";

import store,{addCity} from '../store'

export default () => {
  const snapshot = useSnapshot(store)
  return (
    <div className="search">
      <div>
        <input value={snapshot.city} onChange={(event)=>(store.city = event.target.value)}  placeholder="City" />
      </div>
      <div>
        <button onClick={() => addCity(store.city)}>Add City</button>
      </div>
    </div>
  );
};
