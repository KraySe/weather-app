import React from "react";
import ForecastItem from "./ForecastItem";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const SunnyMonday = () => (
  <ForecastItem
    weekDay={"Monday"}
    hour={11}
    state={"sunny"}
    temperature={23}
  />
);
