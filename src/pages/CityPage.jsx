import React from "react";
import "moment/locale/es";
import { Grid } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import useCityPage from "../hooks/useCityPage";



const CityPage = () => {
 const { city, chartData, forecastItemList} = useCityPage()

  const country = "España";
  const state = "clouds";
  const temperature = 20;
  const humidity = 80;
  const wind = 5;

  return (
    <AppFrame>
      <Grid
        container
        justifyContent={"space-around"}
        direction={"column"}
        spacing={2}
      >
        <Grid
          container
          item
          xs={12}
          justifyContent={"center"}
          alignItems={"flex-end"}
        >
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item xs={12} justifyContent={"center"}>
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humidity={humidity} wind={wind} />
        </Grid>
        <Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
