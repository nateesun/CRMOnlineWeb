/*
 * AccessDeniedPage Messages
 *
 * This contains all the text for the AccessDeniedPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.NotFoundPage';

export default defineMessages({
  status: {
    id: `${scope}.status`,
    defaultMessage: '403',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Access Denied...',
  },
  detail: {
    id: `${scope}.detail`,
    defaultMessage: `You don't have permission to access this page.`,
  },
  buttonHome: {
    id: `${scope}.buttonHome`,
    defaultMessage: `Go to homepage`,
  },
});
