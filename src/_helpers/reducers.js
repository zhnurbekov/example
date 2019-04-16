import { combineReducers } from 'redux';
import locale from '../components/LocaleProvider/LocaleDucks';
import { connectRouter } from 'connected-react-router'

export default history => combineReducers({
  router: connectRouter(history),
  locale
});
