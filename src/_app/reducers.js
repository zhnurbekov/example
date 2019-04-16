import { combineReducers } from 'redux';
import locale from '../components/Locale/LocaleDucks';
import { connectRouter } from 'connected-react-router'

export default history => combineReducers({
  router: connectRouter(history),
  locale
});
