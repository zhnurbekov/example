import { LoginApi } from "./login.service";
import { LOGIN } from "./login.constants";
import { history } from "../_helpers/store";
import { NotificationManager } from "react-notifications";

export const login = (login, password) => async dispatch => {
  try {
    let response = await LoginApi.login(login, password);
    dispatch({ type: LOGIN, user: response.data });
    history.push("/menu");
    NotificationManager.success("Вы успешно авторизовались");
  } catch (e) {
    console.error(e);
    NotificationManager.success("Не удалось авторизоваться");
  }
};

/*

export const login = (login, password) => {
  return async dispatch => {
    let response = await LoginApi.login(login, password);
    dispatch({ type: LOGIN, user: response.data.user })
    dispatch({ type: LOGIN, user: response.data.user })
    dispatch({ type: LOGIN, user: response.data.user })
  }
};

export const login = (login, password) => {
  return dispatch => {
    dispatch({ type: LOGIN, user: response.data.user })
    dispatch({ type: LOADING, user: response.data.user })
  }
};


export const login = (login, password) => {
  return { type: LOGIN, user: response.data.user }
};

* */
