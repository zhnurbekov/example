import { combineReducers } from 'redux';
import localeReducer, { module as locale } from '../components/LocaleProvider/LocaleDucks';
import { connectRouter } from 'connected-react-router'

export default history => combineReducers({
  router: connectRouter(history),
  [locale]: localeReducer
});
