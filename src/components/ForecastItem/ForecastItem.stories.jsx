import React from "react";
import ForecastItem from "./ForecastItem";

export default {
  title: "ForecastItem",
  component: ForecastItem,
};

export const SunnyMonday = () => (
  <ForecastItem
    weekDay={"Monday"}
    hour={09}
    state={"sunny"}
    temperature={23}
  />
);
