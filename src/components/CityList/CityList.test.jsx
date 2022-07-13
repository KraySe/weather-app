import React from "react";
import { render } from "@testing-library/react";
import CityList from "./CityList";

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

test("CityList render", async () => {
  const { findAllByRole } = render(<CityList cities={cities} />);

  const temp = await findAllByRole("listitem");

  expect(temp).toHaveLength(3);
});
