import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

const history = createBrowserHistory();
const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

// Для расширения ReduxDevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;

const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);

export { store, history };
