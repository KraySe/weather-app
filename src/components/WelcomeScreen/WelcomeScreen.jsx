import React, { useRef } from "react";
import PropTypes from "prop-types";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null); // initial value, first render

  console.log("myRefDiv.current", myRefDiv.current);

  return <div ref={myRefDiv}>WelcomeScreen</div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
