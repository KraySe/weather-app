import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temperature={8} state="cloud" />;
export const WeatherSunny = () => <Weather temperature={39} state="sunny" />;
