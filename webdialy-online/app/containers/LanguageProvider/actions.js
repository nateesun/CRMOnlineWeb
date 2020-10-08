/*
 *
 * LanguageProvider actions
 *
 */

import * as constants from './constants';

export function changeLocale(languageLocale) {
  return {
    type: constants.CHANGE_LOCALE,
    locale: languageLocale,
  };
}
