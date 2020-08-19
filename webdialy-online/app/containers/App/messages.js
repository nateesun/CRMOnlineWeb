/*
 * App Messages
 *
 * This contains all the text for the App container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.App';

export default defineMessages({
  headerLogin: {
    id: `${scope}.headerLogin`,
    defaultMessage: 'Login',
  },
  headerLogout: {
    id: `${scope}.headerLogout`,
    defaultMessage: 'Logout',
  },
});
