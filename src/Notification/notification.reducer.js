import { INFO,SUCCESS,WARNING , ERROR} from "./notification.constants";
import { createReducer } from "redux-starter-kit";

const initialState = {
  type: null,
  message: '',
};

export default createReducer(initialState, {
  [INFO]: (state, action) => ({
    type: "info",
    message: action.message
  }),
  [SUCCESS]: (state, action) => ({
    type: "success",
    message: action.message
  }),
  [WARNING]: (state, action) => ({
    type: "warning",
    message: action.message
  }),
  [ERROR]: (state, action) => ({
    type: "error",
    message: action.message
  })
});
