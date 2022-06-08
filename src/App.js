import "tailwindcss/dist/base.css";
import "vendor/treact/styles/globalStyles.css";
import React from "react";

import MainLandingPage from "Home.js";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
