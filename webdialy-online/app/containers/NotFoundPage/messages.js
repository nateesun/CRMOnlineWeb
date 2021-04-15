/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  status: {
    id: `${scope}.status`,
    defaultMessage: '404',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Page not found',
  },
  detail: {
    id: `${scope}.detail`,
    defaultMessage: `Sorry, we couldn't find this page.`,
  },
  buttonHome: {
    id: `${scope}.buttonHome`,
    defaultMessage: `Go to homepage`,
  },
});
