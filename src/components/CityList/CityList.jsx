import React from "react";
import PropTypes from "prop-types";
import { Grid, List, ListItem } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const renderCityAndCountry = (eventOnClickCity) => (cityAndCoutry) => {
  const { city, country } = cityAndCoutry;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justifyItems={"center"} alignItems={"center"}>
        <Grid item xs={12} md={9}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {cities.map((cityAndCoutry) =>
        renderCityAndCountry(onClickCity)(cityAndCoutry)
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
