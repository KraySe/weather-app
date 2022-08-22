import React from "react";
import { render } from "@testing-library/react";
import CityList from "./CityList";
import { fireEvent } from "@storybook/testing-library";

const cities = [
  {
    city: "Badajoz",
    country: "España",
    countryCode: "ES"
  },
  {
    city: "Cáceres",
    country: "España",
    countryCode: "ES"
  },
  {
    city: "Barcelona",
    country: "España",
    countryCode: "ES"
  },
];

test("CityList renders", async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}} />
  );

  const items = await findAllByRole("button");

  expect(items).toHaveLength(3);
});

test("CityList click on item", async () => {
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("button");

  fireEvent.click(items[0]);

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
