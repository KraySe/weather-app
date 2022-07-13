import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import { WiCloud } from 'react-icons/wi'

const Weather = ({ temperature }) => {
  return (
    <div>
      <WiCloud></WiCloud>
      <Typography display="inline"  variant="h2">{temperature}</Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
