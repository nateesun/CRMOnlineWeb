/*
 * CheckCarts Messages
 *
 * This contains all the text for the CheckCarts container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CheckCarts';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the CheckCarts container!',
  },
  newItemHeader: {
    id: `${scope}.newItemHeader`,
    defaultMessage: 'Add new item',
  },
  updateItemHeader: {
    id: `${scope}.updateItemHeader`,
    defaultMessage: 'Update old item',
  },
  headerContentPage: {
    id: `${scope}.headerContentPage`,
    defaultMessage: 'Content Page',
  },
  headerEditItem: {
    id: `${scope}.headerEditItem`,
    defaultMessage: 'Edit Item Form',
  },
  headerViewItem: {
    id: `${scope}.headerViewItem`,
    defaultMessage: 'รายละเอียดคำสั่งซื้อที่รับชำระ',
  },
  headerNewItem: {
    id: `${scope}.headerNewItem`,
    defaultMessage: 'New Item Form',
  },
  headerTableItems: {
    id: `${scope}.headerTableItems`,
    defaultMessage: 'Table List Items',
  },
  col1ShouldNotEmpty: {
    id: `${scope}.col1ShouldNotEmpty`,
    defaultMessage: 'Column1 should not empty',
  },
  col2ShouldNotEmpty: {
    id: `${scope}.col2ShouldNotEmpty`,
    defaultMessage: 'Column2 should not empty',
  },
  col3ShouldNotEmpty: {
    id: `${scope}.col3ShouldNotEmpty`,
    defaultMessage: 'Column3 should not empty',
  },
  col1: {
    id: `${scope}.col1`,
    defaultMessage: 'Cart No',
  },
  col2: {
    id: `${scope}.col2`,
    defaultMessage: 'Create Date',
  },
  col3: {
    id: `${scope}.col3`,
    defaultMessage: 'Member',
  },
  col4: {
    id: `${scope}.col4`,
    defaultMessage: 'Item',
  },
  col5: {
    id: `${scope}.col5`,
    defaultMessage: 'Amount',
  },
  col6: {
    id: `${scope}.col6`,
    defaultMessage: 'Point',
  },
  col7: {
    id: `${scope}.col7`,
    defaultMessage: 'Step',
  },
  col8: {
    id: `${scope}.col8`,
    defaultMessage: 'Active',
  },
  btnSave: {
    id: `${scope}.btnSave`,
    defaultMessage: 'Save',
  },
  btnReset: {
    id: `${scope}.btnReset`,
    defaultMessage: 'Reset',
  },
  btnBack: {
    id: `${scope}.btnBack`,
    defaultMessage: 'Back',
  },
  btnApprove: {
    id: `${scope}.btnApprove`,
    defaultMessage: 'Update Status',
  },
});
