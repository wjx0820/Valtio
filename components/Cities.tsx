import React from "react";
import { useSnapshot } from "valtio";

import store from '../store'

import WeatherResult from "./WeatherResult";

export default () => {
  const snapshot = useSnapshot(store)

  return (
    <div className="cities">
      Cities
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridColumnGap: "1rem"
        }}
      >
        {snapshot.cityWeather.map(city => (
          <WeatherResult
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <div>Average: {snapshot.getAverageTemperature() || 0} </div>
    </div>
  );
};
