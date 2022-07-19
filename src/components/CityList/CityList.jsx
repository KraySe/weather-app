import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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
          {weather ? (
            <Weather temperature={weather.temperature} state={weather.state} />
          ) : (
            "data not found"
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});

  useEffect(() => {
    const setWeather = (city, country) => {
      const appid = "8548ce8ec745e1ea8db3cfed3bcbadd6";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
      axios.get(url).then((response) => {
        const { data } = response;
        const temperature = data.main.temp;
        const state = "sunny";

        const propName = `${city}-${country}`;
        const propValue = { temperature, state };

        setAllWeather((allWeather) => {
          const result = {
            ...allWeather,
            [propName]: propValue,
          };

          console.log("allWeather [result]", result);
          return result;
        });
      });
    };

    cities.forEach(({ city, country }) => {
      setWeather(city, country);
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
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
