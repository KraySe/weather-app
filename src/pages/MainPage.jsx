import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import { getCities } from "../utils/cities.service";

const MainPage = ({ allWeather, onSetAllWeather }) => {
  const history = useHistory();
  const cities = getCities();

  const onClickHandler = (city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          onClickCity={onClickHandler}
          allWeather={allWeather}
          onSetAllWeather={onSetAllWeather}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
