import React from "react";
import WeatherDetails from "./WeatherDetails";
import { render } from "@testing-library/react";

test("WeatherDetails render", async () => {
  const { findByText } = render(<WeatherDetails humidity={10} wind={19} />);

  // Al utilizar las barras utilizamos un REGEXP, expresión regular
  const humidity = await findByText(/10/);
  const wind = await findByText(/19/);

  expect(humidity).toHaveTextContent("Humidity: 10%");
  expect(wind).toHaveTextContent("Wind: 19 km/h");
});
