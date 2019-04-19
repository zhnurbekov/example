import { module as locale } from "../LocaleProvider/locale.constants";
import localeReducer from "../LocaleProvider/locale.reducer";
import { module as login } from "../LoginPage/login.constants";
import loginReducer from "../LoginPage/login.reducer";
import {module as notification} from "../Notification/notification.constants";
import notificationReducer from "../Notification/notification.reducer";
import sortReducers from "../utils/sortReducers";

export const rootReducer = sortReducers({
  [locale]: localeReducer,
  [login]: loginReducer,
  [notification]: notificationReducer
});
