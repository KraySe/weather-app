import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import AppFrame from "../components/AppFrame";
import CityInfo from "./../components/CityInfo";
import Weather from "./../components/Weather";
import WeatherDetails from "./../components/WeatherDetails";
import ForecastChart from "./../components/ForecastChart";
import Forecast from "./../components/Forecast";
import moment from "moment";

const dataExample = [
  { dayHour: "Jue 18", min: 14, max: 22 },
  { dayHour: "Vie 06", min: 18, max: 27 },
  { dayHour: "Vie 12", min: 18, max: 28 },
  { dayHour: "Vie 18", min: 18, max: 25 },
  { dayHour: "Sab 06", min: 15, max: 22 },
  { dayHour: "Sab 12", min: 12, max: 19 },
];

const forecastItemListExample = [
  { hour: 18, state: "clear", temperature: 17, weekDay: "Thursday" },
  { hour: 6, state: "clouds", temperature: 18, weekDay: "Friday" },
  { hour: 12, state: "drizzle", temperature: 18, weekDay: "Friday" },
  { hour: 16, state: "clouds", temperature: 19, weekDay: "Friday" },
  { hour: 14, state: "rain", temperature: 17, weekDay: "Saturday" },
  { hour: 19, state: "rain", temperature: 17, weekDay: "Saturday" },
];

const CityPage = () => {
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const appid = "8548ce8ec745e1ea8db3cfed3bcbadd6";
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;

      try {
        const { data } = await axios.get(url);
        console.log(data);

        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((d) => moment().add(d, "d"));
        const dataAux = days.map((d) => {
          return {
            dayHour: d.format("ddd"),
            min: 20,
            max: 40,
          };
        });

        setData(dataAux);
        setForecastItemList(forecastItemListExample);
      } catch (error) {
        console.log(error);
      }
    };

    getForecast();
  }, [city, countryCode]);

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
        <Grid item>{data && <ForecastChart data={data} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
