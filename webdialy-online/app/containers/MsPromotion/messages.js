/*
 * MsPromotion Messages
 *
 * This contains all the text for the MsPromotion container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MsPromotion';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MsPromotion container!',
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
    defaultMessage: 'Promotion code should not empty',
  },
  col2ShouldNotEmpty: {
    id: `${scope}.col2ShouldNotEmpty`,
    defaultMessage: 'Promotion name should not empty',
  },
  col1: {
    id: `${scope}.col1`,
    defaultMessage: 'Promotion Code',
  },
  col2: {
    id: `${scope}.col2`,
    defaultMessage: 'Promotion Name',
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
