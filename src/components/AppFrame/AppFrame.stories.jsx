import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "AppFrame",
  component: AppFrame,
};

export const AppFrameExample = () => (
  <Router>
    <AppFrame>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut veritatis
      recusandae vero. Possimus nemo impedit provident voluptatem assumenda
      excepturi rem tempore explicabo reprehenderit, ab nisi ipsum
      exercitationem culpa, asperiores molestiae?
    </AppFrame>
  </Router>
);
