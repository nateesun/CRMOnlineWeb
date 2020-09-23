/*
 * MsEmployee Messages
 *
 * This contains all the text for the MsEmployee container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MsEmployee';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MsEmployee container!',
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
    defaultMessage: 'Employee code should not empty',
  },
  col2ShouldNotEmpty: {
    id: `${scope}.col2ShouldNotEmpty`,
    defaultMessage: 'Employee name should not empty',
  },
  col3ShouldNotEmpty: {
    id: `${scope}.col3ShouldNotEmpty`,
    defaultMessage: 'Role code should not empty',
  },
  col1: {
    id: `${scope}.col1`,
    defaultMessage: 'Employee Code',
  },
  col2: {
    id: `${scope}.col2`,
    defaultMessage: 'Employee Name',
  },
  col3: {
    id: `${scope}.col3`,
    defaultMessage: 'Role Code',
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
