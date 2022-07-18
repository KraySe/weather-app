import React from "react";
import { Grid, Typography } from "@mui/material";
import WelcomeScreen from "./../components/WelcomeScreen";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

const WelcomePage = () => {
  return (
    <WelcomeScreen>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        className={"full"}
      >
        <div className="highlight">
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <IconContext.Provider value={{ size: "6em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Grid>
            <Grid
              item
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant={"h4"} color={"inherit"}>
                  Weather App
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </WelcomeScreen>
  );
};

export default WelcomePage;
