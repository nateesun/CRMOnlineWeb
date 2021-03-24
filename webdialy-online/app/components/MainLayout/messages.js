/*
 * MainLayout Messages
 *
 * This contains all the text for the MainLayout component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.MainLayout';

export default defineMessages({
  headerLogin: {
    id: `${scope}.headerLogin`,
    defaultMessage: 'Log In',
  },
  headerLogout: {
    id: `${scope}.headerLogout`,
    defaultMessage: 'Logout',
  },
});
