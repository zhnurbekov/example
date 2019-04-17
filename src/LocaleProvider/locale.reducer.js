import { CHANGE } from "./locale.constants";
import { RU_TRANSLATION } from "../_locale/ru";

const initialState = {
  lang: RU_TRANSLATION.lang,
  messages: RU_TRANSLATION.messages
};

export default function(state = initialState, action) {
  const { type, lang, messages } = action;
  switch (type) {
    case CHANGE:
      return { lang, messages };
    default:
      return state;
  }
}
