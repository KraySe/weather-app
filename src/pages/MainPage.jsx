import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";
import { getCities } from "../utils/cities.service";

const MainPage = ({ data, actions }) => {
  const history = useHistory();
  const cities = getCities();

  const onClickHandler = useCallback((city, countryCode) => {
    history.push(`/city/${countryCode}/${city}`);
  }, [history]);

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList
          cities={cities}
          onClickCity={onClickHandler}
          data={data}
          actions={actions}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
