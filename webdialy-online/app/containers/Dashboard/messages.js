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
  totalScore: {
    id: `${scope}.totalScore`,
    defaultMessage: 'Total Score',
  },
  totalPurchase: {
    id: `${scope}.totalPurchase`,
    defaultMessage: 'Total Purchase',
  },
  moreInfo: {
    id: `${scope}.moreInfo`,
    defaultMessage: 'More info',
  },
  btnRefresh: {
    id: `${scope}.btnRefresh`,
    defaultMessage: 'Refresh point',
  },
  topicRedeem: {
    id: `${scope}.topicRedeem`,
    defaultMessage: 'Redeem Promotion List Item',
  },
  notFoundPromotion: {
    id: `${scope}.notFoundPromotion`,
    defaultMessage: 'Not found Promotion',
  },
});
