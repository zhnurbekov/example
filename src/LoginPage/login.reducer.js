import { LOGIN, LOADING, PERMISSIONS } from "./login.constants";
import { createReducer } from "redux-starter-kit";

const initialState = {
  user: null,
  loading: false,
  permissions: []
};

export default createReducer(initialState, {
  [LOGIN]: (state, action) => ({
    user: action.user
  }),
  [LOADING]: (state, action) => ({
    loading: action.loading
  }),
  [PERMISSIONS]: (state, action) => ({
    permissions: action.permissions
  })
});
