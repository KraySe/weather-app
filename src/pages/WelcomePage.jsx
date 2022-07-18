import React from "react";
import { Grid } from "@mui/material";
import WelcomeScreen from "./../components/WelcomeScreen";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        className={"full"}
      >
        <div className="highlight"></div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
