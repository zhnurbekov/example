import React from "react";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { ConnectedRouter as Router } from "connected-react-router";
import LocaleProvider from "../components/Locale/Locale";
import StylesProvider from "./StylesProvider";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LocaleProvider>
          <StylesProvider>
            Application
          </StylesProvider>
        </LocaleProvider>
      </Router>
    </Provider>
  );
}
