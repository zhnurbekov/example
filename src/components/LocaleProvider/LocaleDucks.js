import { RU_TRANSLATION } from "../../_locale/ru";
import { KK_TRANSLATION } from "../../_locale/kk";
import { EN_TRANSLATION } from "../../_locale/en";

/**
 * Constants
 */
export const moduleName = "locale";
const CHANGE = `${moduleName}/CHANGE`;

/**
 * Reducer
 */
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

/**
 * Actions
 */
export const change = lang => {
  localStorage.setItem("lang", lang);

  let messages = RU_TRANSLATION.messages;
  if (lang === "kk") messages = KK_TRANSLATION.messages;
  if (lang === "en") messages = EN_TRANSLATION.messages;

  return {
    type: CHANGE,
    lang: lang,
    messages: messages
  };
};
