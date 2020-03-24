import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import { Router } from "react-router-dom";
import history from "./history";
import store from "./store";
import ErrorBoundry from "./components/error-boundry";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <Router history={history}>
        <App />
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
