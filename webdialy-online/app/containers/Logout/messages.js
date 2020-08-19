/*
 * Logout Messages
 *
 * This contains all the text for the Logout container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Logout';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'You have successfully logged out.',
  },
});
