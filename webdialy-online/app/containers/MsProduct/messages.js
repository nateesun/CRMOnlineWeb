/*
 * MsProduct Messages
 *
 * This contains all the text for the MsProduct container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MsProduct';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MsProduct container!',
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
    defaultMessage: 'Column1',
  },
  col2: {
    id: `${scope}.col2`,
    defaultMessage: 'Column2',
  },
  col3: {
    id: `${scope}.col3`,
    defaultMessage: 'Column3',
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
