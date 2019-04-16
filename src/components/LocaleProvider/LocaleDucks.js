import { RU_TRANSLATION } from '../../_locale/ru';
import { KK_TRANSLATION } from '../../_locale/kk';
import { EN_TRANSLATION } from '../../_locale/en';

/**
 * Constants
 */
export const moduleName = 'locale';
const CHANGE = `${moduleName}/CHANGE`;

/**
 * Reducer
 */
const initialState = {
  lang: RU_TRANSLATION.lang,
  messages: RU_TRANSLATION.messages
};

export default function(state = initialState, action) {
  const { type, lang } = action;
  switch (type) {
    case CHANGE: return getLocale(lang);
    default: return getLocale(lang);
  }
}

/**
 * Actions
 */
export const change = lang => ({
  type: CHANGE,
  lang: lang
});

function getLocale(oldLang) {
  let lang = getLang(oldLang);

  switch (lang) {
    case 'ru':
      return {
        lang: RU_TRANSLATION.lang,
        messages: RU_TRANSLATION.messages
      };
    case 'kk':
      return {
        lang: KK_TRANSLATION.lang,
        messages: KK_TRANSLATION.messages
      };
    case 'en':
      return {
        lang: EN_TRANSLATION.lang,
        messages: EN_TRANSLATION.messages
      };
    default:
      return {
        lang: RU_TRANSLATION.lang,
        messages: RU_TRANSLATION.messages
      };
  }
}

function getLang(lang) {
  if (!lang) {
    lang = localStorage.getItem('lang');
  }
  if (!lang) {
    lang = initialState.lang;
  }
  localStorage.setItem('lang', lang);
  return lang;
}
