import React from "react";
import Weather from "./Weather";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Weather render cloud", async () => {
  const { findByRole } = render(<Weather temperature={8} state="cloud" />);

  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent("8");
});

test("Weather render sunny", async () => {
  /// AAA Arrange, Act, Assert
  const { findByRole } = render(<Weather temperature={39} state="sunny" />);

  const temp = await findByRole("heading");

  expect(temp).toHaveTextContent("39");
});
