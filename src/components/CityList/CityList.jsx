import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import convertUnits from "convert-units";
import { Grid, List, ListItem, Alert } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry, weather) => {
  const { city, country, countryCode } = cityAndCoutry;

  return (
    <ListItem
      button
      key={getCityCode(city, countryCode)}
      onClick={() => eventOnClickCity(city, countryCode)}
    >
      <Grid container justifyItems={"center"} alignItems={"center"}>
        <Grid item xs={12} md={9}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const appid = "8548ce8ec745e1ea8db3cfed3bcbadd6";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
      const response = await axios.get(url);

      try {
        const { data } = response;
        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };

        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
      } catch (error) {
        if (error.response) {
          setError("ups!! it seems that an error has occurred");
        } else if (error.request) {
          setError("ups!! check your internet connection");
        } else {
          setError("ups!! problem loading data");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);

  return (
    <>
      {error && (
        <Alert onClose={() => setError(null)} severity={"error"}>
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCoutry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCoutry,
            allWeather[
              getCityCode(cityAndCoutry.city, cityAndCoutry.countryCode)
            ]
          )
        )}
      </List>
    </>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
