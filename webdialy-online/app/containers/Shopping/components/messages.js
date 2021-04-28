/*
 * Shopping Messages
 *
 * This contains all the text for the Shopping container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Shopping';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Shopping container!',
  },
  productListTopic: {
    id: `${scope}.productListTopic`,
    defaultMessage: 'Product all items 2020',
  },
  search: {
    id: `${scope}.search`,
    defaultMessage: 'Search',
  },
  notfoundProduct: {
    id: `${scope}.notfoundProduct`,
    defaultMessage: 'Not found product',
  },
});
