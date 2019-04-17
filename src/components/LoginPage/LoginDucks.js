import LoginService from "./LoginService";

/**
 * Constants
 */
export const module = "login";
const LOGIN = `${module}/LOGIN`;

/**
 * Reducer
 */
const initialState = {
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const login = (login, password) => async dispatch => {
  let response = await LoginService.login(login, password);
  dispatch({ type: LOGIN, user: response.data.user })
};
