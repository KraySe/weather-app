import React from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@mui/material";
import {
  WiCloud,
  WiDayCloudy,
  WiDayFog,
  WiDaySunny,
  WiRain,
} from "react-icons/wi";
import { IconContext } from "react-icons/lib";

const validValues = ["cloud", "cloudy", "fog", "sunny", "rain"];

const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain,
};

const renderState = (state) => {
  const Icon = stateByName[state];

  return <Icon style={{ verticalAlign: "bottom" }} />;
};

const ForecastItem = ({ weekDay, hour, state, temperature }) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{ size: "5em" }}>
          {renderState(state)}
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} º</Typography>
      </Grid>
    </Grid>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
  temperature: PropTypes.number.isRequired,
};

export default ForecastItem;
