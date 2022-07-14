import React from "react";
import ForecastItem from "./ForecastItem";
import { render } from "@testing-library/react";

test("ForecastItem render", async () => {
  const { findByText } = render(
    <ForecastItem weekDay={"Monday"} hour={11} state="sunny" temperature={25} />
  );

  const weekDay = await findByText("Monday");
  const hour = await findByText(/11/);
  const temperature = await findByText(/25/);

  expect(weekDay).toHaveTextContent("Monday");
  expect(hour).toHaveTextContent("11");
  expect(temperature).toHaveTextContent("25 º");
});
