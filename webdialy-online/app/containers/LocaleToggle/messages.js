/*
 * LocaleToggle Messages
 *
 * This contains all the text for the LanguageToggle component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LocaleToggle';

export default defineMessages({
  en: {
    id: `${scope}.en`,
    defaultMessage: 'en',
  },
  th: {
    id: `${scope}.th`,
    defaultMessage: 'th',
  },
  switch: {
    id: `${scope}.switch`,
    defaultMessage: 'Language',
  },
});
