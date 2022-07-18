import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, List, ListItem } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry, weather) => {
  const { city, country } = cityAndCoutry;
  const { temperature, state } = weather;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justifyItems={"center"} alignItems={"center"}>
        <Grid item xs={12} md={9}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather temperature={temperature} state={state} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const weather = { temperature: 10, state: "sunny" };
  return (
    <List>
      {cities.map((cityAndCoutry) =>
        renderCityAndCountry(onClickCity)(cityAndCoutry, weather)
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
