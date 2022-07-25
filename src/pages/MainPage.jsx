import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";

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

const MainPage = () => {
  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };
  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
