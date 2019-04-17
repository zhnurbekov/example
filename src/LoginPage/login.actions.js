import { LoginApi } from "./login.service";
import { LOGIN } from './login.constants'

export const login = (login, password) => async dispatch => {
  let response = await LoginApi.login(login, password);
  dispatch({ type: LOGIN, user: response.data.user })
};
