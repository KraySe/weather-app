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
  // Debemos simular una acción del usuario: click sobre un item
  // Para eso vamos a utilizar una función "mock"
  const fnClickOnItem = jest.fn();

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole("listitem");

  // Ahora, para simular la acción vamos a utilizar fireEvent
  // fireEvent es parte de la librearía de testing-library/react

  fireEvent.click(items[0]);

  // ¿Ahora que sucede?
  // Se debió llamar a la función fnClickOnItem UNA única vez

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
