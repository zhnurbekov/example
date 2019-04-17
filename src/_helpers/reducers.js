import { combineReducers } from "redux";
import { module as locale } from "../LocaleProvider/locale.constants";
import localeReducer from "../LocaleProvider/locale.reducer";
import { connectRouter } from "connected-react-router";
import sortReducers from "../utils/sortReducers";

export default history => combineReducers(sortReducers({
  router: connectRouter(history),
  [locale]: localeReducer
}));
