import React from "react";

import WeatherResult from "./WeatherResult";

export default () => {
  const cities = [];
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
        {cities.map(city => (
          <WeatherResult
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <div>Average: 0</div>
    </div>
  );
};
