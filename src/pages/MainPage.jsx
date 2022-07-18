import React from "react";
import { useHistory } from "react-router-dom";
import { Paper } from "@mui/material";
import AppFrame from "./../components/AppFrame";
import CityList from "./../components/CityList";

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

const MainPage = () => {
  const history = useHistory();

  const onClickHandler = () => {
    history.push("/city");
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
