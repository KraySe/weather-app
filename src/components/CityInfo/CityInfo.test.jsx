import React from "react";
import { render } from "@testing-library/react";
import CityInfo from "./CityInfo"; // SUT: Subject under Testing (objeto del testeo)

test("CityInfo render", async () => {
  // Estándar AAA
  // Arrange (arreglar, preparar, organizar todo lo que necesitamos)

  // Act (ejecutamos el test)

  // Render: renderiza el componente y retorna una serie de funciones de utilidad
  // En este caso 'findAllByRole'
  const { findAllByRole } = render(
    <CityInfo city="Badajoz" country="España" />
  );

  // Assert (evaluar , preguntar)
  // findAllByRole nos va a buscar  ( en este caso ) todos los componentes que sean
  // "heading" => H1, H2, H3, H4, H5, H6
  // El resultado es un array de componentes. (cityAndCountryComponents)
  const cityAndCountryComponents = await findAllByRole("heading");

  console.log(cityAndCountryComponents);
});
