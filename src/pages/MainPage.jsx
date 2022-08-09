import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import { getCities } from "../utils/cities.service";

const MainPage = () => {
  const navigate = useNavigate();
  const cities = getCities();

  const onClickHandler = useCallback((city, countryCode) => {
    navigate(`/city/${countryCode}/${city}`);
  }, [navigate]);

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
