
import { defineMessages } from 'react-intl';

export const scope = 'crmonlineweb.containers.LeftMenu';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  new: {
    id: `${scope}.new`,
    defaultMessage: 'New',
  },
  all: {
    id: `${scope}.all`,
    defaultMessage: 'All Menu',
  },
  orderOnline: {
    id: `${scope}.orderOnline`,
    defaultMessage: 'Order online',
  },
  orderTransaction: {
    id: `${scope}.orderTransaction`,
    defaultMessage: 'Order Transaction',
  },
  history: {
    id: `${scope}.history`,
    defaultMessage: 'History',
  },
  historyTransaction: {
    id: `${scope}.historyTransaction`,
    defaultMessage: 'History Transaction',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
