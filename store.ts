import { proxy, subscribe } from "valtio";

import { subscribeKey } from "valtio/utils";

import getWeather, { WeatherResult } from "./getWeather";

interface ICityWeather {
  name: string;
  weather: WeatherResult;
}

interface IStore {
  city: string;
  cityWeather: ICityWeather[];
  getAverageTemperature: () => number;
}

const store = proxy<IStore>({
  city: "",
  cityWeather: [],
  getAverageTemperature: () =>
    store.cityWeather.reduce(
      (acc, v) => acc + v.weather.temperature.actual,
      0
    ) / store.cityWeather.length
});

export const addCity = async (city: string) => {
  const weather = await getWeather(city);
  if (weather) {
    store.cityWeather.push({
      name: city,
      weather
    });
  }
  store.city = "";
};

// To subscribe to a primitive value of state, consider subscribeKey in utils.
subscribeKey(store, "city", () => {
  console.log("city change!");
});

//You can also subscribe to a portion of state.
subscribe(store.cityWeather, () => {
  console.log("cityWeather change!");
});

export default store;
