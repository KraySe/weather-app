import React from "react";
import CityList from "./CityList";

export default {
  title: "CityList",
  component: CityList,
};

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

export const CityListExample = () => <CityList cities={cities} />;
