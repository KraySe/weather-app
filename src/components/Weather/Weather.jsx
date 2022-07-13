import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";
import { IconContext } from "react-icons/lib";

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = state => {
  // TODO: implement function to render state by type
}

const Weather = ({ temperature }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "5em" }}>
        <WiCloud style={{ verticalAlign: "bottom" }}></WiCloud>
      </IconContext.Provider>
      <Typography display="inline" variant="h3">
        {temperature}
      </Typography>
    </div>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Weather;
