/*
 * Members Messages
 *
 * This contains all the text for the Members container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Members';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Members container!',
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
    defaultMessage: 'View Item Detail',
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
    defaultMessage: 'Member Code',
  },
  col2: {
    id: `${scope}.col2`,
    defaultMessage: 'Member Name',
  },
  col3: {
    id: `${scope}.col3`,
    defaultMessage: 'Point',
  },
  col4: {
    id: `${scope}.col4`,
    defaultMessage: 'Redemption',
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
});
