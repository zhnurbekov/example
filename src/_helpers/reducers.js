import { combineReducers } from "redux";
import localeReducer, { module as locale } from "../components/LocaleProvider/LocaleDucks";
import { connectRouter } from "connected-react-router";
import sortReducers from "../utils/sortReducers";

export default history => combineReducers(sortReducers({
  router: connectRouter(history),
  [locale]: localeReducer
}));
