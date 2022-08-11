import React from "react";
import Weather from "./Weather";

export default {
  title: "Weather",
  component: Weather,
};

const Template = (args) => <Weather {...args} />;

export const WeatherCloud = Template.bind({});
WeatherCloud.args = { temperature: 8, state: "clouds" };
export const WeatherSunny = Template.bind({});
WeatherSunny.args = { temperature: 39, state: "clear" };
