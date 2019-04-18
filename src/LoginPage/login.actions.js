import { LoginApi } from "./login.service";
import { LOGIN } from './login.constants'

export const login = (login, password) => async dispatch => {
  let response = await LoginApi.login(login, password);
  dispatch({ type: LOGIN, user: response.data.user })
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
