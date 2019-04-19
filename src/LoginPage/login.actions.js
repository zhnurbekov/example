import { LoginApi } from "./login.service";
import { LOGIN } from './login.constants'
import { history } from '../_helpers/store'
import { INFO,SUCCESS,WARNING,ERROR} from "../Notification/notification.constants";
import {sendNotifications} from '../Notification/notification.actions'


export const login = (login, password) => async dispatch => {
  let response = {data:{user:"Zhaiyk"}}//await LoginApi.login(login, password);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  dispatch({ type: LOGIN, user: response.data.user });
  dispatch({ type: SUCCESS, message: "Вы успешно авторизовались" });
  history.push('/menu');

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
