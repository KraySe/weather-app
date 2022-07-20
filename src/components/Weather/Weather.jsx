import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Skeleton } from "@mui/material";
import { IconContext } from "react-icons/lib";
import IconState, { validValues } from "../IconState";

const Weather = ({ temperature, state }) => {
  return (
    <Grid
      container
      item
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={1}
    >
      <IconContext.Provider value={{ size: "5em" }}>
        {state ? (
          <IconState state={state} />
        ) : (
          <Skeleton variant={"circular"} height={80} width={80} />
        )}
      </IconContext.Provider>
      {temperature ? (
        <Typography display="inline" variant="h2">
          {temperature}
        </Typography>
      ) : (
        <Skeleton variant={"rectangular"} height={80} width={80} />
      )}
    </Grid>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number,
  state: PropTypes.oneOf(validValues),
};

export default Weather;
