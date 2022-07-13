import React from "react";
import { render } from "@testing-library/react";
import CityList from "./CityList";
import { fireEvent } from "@storybook/testing-library";

const cities = [
  {
    city: "Badajoz",
    country: "España",
  },
  {
    city: "Cáceres",
    country: "España",
  },
  {
    city: "Barcelona",
    country: "España",
  },
];

test("CityList renders", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);

  const items = await findAllByRole("listitem");

  expect(items).toHaveLength(3);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("listitem");

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
