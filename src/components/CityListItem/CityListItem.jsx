import React from "react";
// import PropTypes from "prop-types";
import { Grid, ListItem } from "@mui/material";
import CityInfo from "../CityInfo";
import Weather from "../Weather";

const CityListItem = ({city, countryCode, country, weather, eventOnClickCity}) => {
  return (
    <ListItem
      button
      onClick={() => eventOnClickCity(city, countryCode)}
    >
      <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
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

// CityListItem.propTypes = {
// };

export default React.memo(CityListItem);
