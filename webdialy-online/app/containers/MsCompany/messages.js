/*
 * MsCompany Messages
 *
 * This contains all the text for the MsCompany container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MsCompany';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MsCompany container!',
  },
  headerContentPage: {
    id: `${scope}.headerContentPage`,
    defaultMessage: 'Content Page',
  },
  headerEditItem: {
    id: `${scope}.headerEditItem`,
    defaultMessage: 'Edit Item Form',
  },
  headerNewItem: {
    id: `${scope}.headerNewItem`,
    defaultMessage: 'New Item Form',
  },
  headerTableItems: {
    id: `${scope}.headerTableItems`,
    defaultMessage: 'Table List Items',
  },
});
