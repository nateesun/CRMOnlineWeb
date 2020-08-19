/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Dashboard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Dashboard container!',
  },
  pointBalance: {
    id: `${scope}.pointBalance`,
    defaultMessage: 'Point Balance',
  },
  pointRedemption: {
    id: `${scope}.pointRedemption`,
    defaultMessage: 'Point Redemption',
  },
  moreInfo: {
    id: `${scope}.moreInfo`,
    defaultMessage: 'More info',
  },
});
