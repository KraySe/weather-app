import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import convertUnits from "convert-units";
import { Grid, List, ListItem } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry, weather) => {
  const { city, country } = cityAndCoutry;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
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

  useEffect(() => {
    const setWeather = (city, country, countryCode) => {
      const appid = "8548ce8ec745e1ea8db3cfed3bcbadd6";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`;
      axios.get(url).then((response) => {
        const { data } = response;
        const temperature = Number(
          convertUnits(data.main.temp).from("K").to("C").toFixed(0)
        );
        const state = data.weather[0].main.toLowerCase();

        const propName = `${city}-${country}`;
        const propValue = { temperature, state };

        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
      });
    };

    cities.forEach(({ city, country, countryCode }) => {
      setWeather(city, country, countryCode);
    });
  }, [cities]);

  return (
    <List>
      {cities.map((cityAndCoutry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCoutry,
          allWeather[`${cityAndCoutry.city}-${cityAndCoutry.country}`]
        )
      )}
    </List>
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
