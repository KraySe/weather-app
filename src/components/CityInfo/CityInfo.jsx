import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const CityInfo = ({ city, country }) => {
  return (
    <>
      <Typography>{city}</Typography>
      <Typography>{country}</Typography>
    </>
  );
};

CityInfo.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default CityInfo;
