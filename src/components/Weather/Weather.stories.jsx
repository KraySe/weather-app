import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

export const WeatherCloud = () => <Weather temperature={8} state="clouds" />;
export const WeatherSunny = () => <Weather temperature={39} state="clear" />;
