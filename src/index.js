import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Modal from "react-modal";

import {AppContext, initialState} from "./state";

Modal.setAppElement("#root");

ReactDOM.render(
  <AppContext.Provider value={initialState}>
    <App />
  </AppContext.Provider>,
  document.getElementById("root")
);
