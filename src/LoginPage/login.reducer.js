import { LOGIN } from './login.constants'

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
