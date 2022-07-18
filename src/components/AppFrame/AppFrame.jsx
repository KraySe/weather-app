import React from "react";
import PropTypes from "prop-types";
import { Link as LinkRouter } from "react-router-dom";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";

const AppFrame = (props) => {
  return (
    <Grid container justifyContent={"center"}>
      <AppBar position={"static"}>
        <Toolbar variant={"dense"}>
          <IconButton color={"inherit"} aria-label={"menu"}>
            <Link
              component={LinkRouter}
              to={"/main"}
              color={"inherit"}
              aria-label={"menu"}
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography variant={"h6"} color={"inherit"}>
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container item xs={12} sm={11} md={10} bg={8}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
        consequuntur dolores tenetur deserunt numquam vitae magnam molestias ea
        et veritatis. Neque consequuntur iure voluptate nesciunt. Cumque totam
        voluptates culpa iusto.
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {};

export default AppFrame;
