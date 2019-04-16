import React from "react";
import { Provider } from "react-redux";
import { store, history } from "../_helpers/store";
import { ConnectedRouter as Router } from "connected-react-router";
import LocaleProvider from "../components/LocaleProvider/LocaleProvider";
import StyleProvider from "../components/StyleProvider/StyleProvider";
import Root from "./Root";

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <LocaleProvider>
          <StyleProvider>
            <Root/>
          </StyleProvider>
        </LocaleProvider>
      </Router>
    </Provider>
  );
}
