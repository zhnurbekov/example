import { createReducer } from "redux-starter-kit";
import { CHANGE } from "./locale.constants";
import { RU_TRANSLATION } from "../_locale/ru";

const initialState = {
  lang: RU_TRANSLATION.lang,
  messages: RU_TRANSLATION.messages
};

export default createReducer(initialState, {
  [CHANGE]: (state, action) => ({
    lang: action.lang,
    messages: action.messages
  })
});
