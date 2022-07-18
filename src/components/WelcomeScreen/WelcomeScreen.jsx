import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null); // initial value, first render
  const [vanta, setVanta] = useState(0); // initial value

  console.log("myRefDiv.current", myRefDiv.current);

  useEffect(() => {
    console.log("myRefDiv.current (useEffect)", myRefDiv.current);

    if (!vanta) {
      setVanta(1);
      console.log("set new value to vanta");
    }
  }, [vanta]);

  return <div ref={myRefDiv}>WelcomeScreen</div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
