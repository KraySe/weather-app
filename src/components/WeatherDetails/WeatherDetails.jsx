import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const WeatherDetails = ({ humidity, wind }) => {
  return (
    <>
      <Typography>Humidity: {humidity}%</Typography>
      <Typography>Wind: {wind} km/h</Typography>
    </>
  );
};

WeatherDetails.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
};

export default WeatherDetails;
