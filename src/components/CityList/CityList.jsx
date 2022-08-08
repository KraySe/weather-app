import React from "react";
import PropTypes from "prop-types";
import { Grid, List, ListItem, Alert } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";
import useCityList from "../../hooks/useCityList";
import { getCityCode } from "../../utils/utils";

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

const CityList = ({ cities, onClickCity, data, actions }) => {
  const { allWeather } = data;
  // const { onSetAllWeather } = actions;
  const { error, setError } = useCityList(cities, allWeather, actions);
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
