import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry) => {
  const { city, country } = cityAndCoutry;

  return (
    <li key={city} onClick={eventOnClickCity}>
      <Grid container justifyItems={"center"} alignItems={"center"}>
        <Grid item xs={12} md={8}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {cities.map((cityAndCoutry) =>
        renderCityAndCountry(onClickCity)(cityAndCoutry)
      )}
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
