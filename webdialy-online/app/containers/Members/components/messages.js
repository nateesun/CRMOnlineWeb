/*
 * Members Messages
 *
 * This contains all the text for the Members container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Members';

export default defineMessages({
  headerEditItem: {
    id: `${scope}.headerEditItem`,
    defaultMessage: 'Update Member',
  },
  headerViewItem: {
    id: `${scope}.headerViewItem`,
    defaultMessage: 'View Member',
  },
  memberCode: {
    id: `${scope}.memberCode`,
    defaultMessage: 'Member Code',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name',
  },
  role: {
    id: `${scope}.role`,
    defaultMessage: 'Role',
  },
  totalScore: {
    id: `${scope}.totalScore`,
    defaultMessage: 'Total Score',
  },
  totalPurchase: {
    id: `${scope}.totalPurchase`,
    defaultMessage: 'Total Purchase',
  },
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'Mobile',
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
  firstNameSouldNotEmpty: {
    id: `${scope}.firstNameSouldNotEmpty`,
    defaultMessage: 'First name should not be empty!',
  },
  lastNameShouldNotEmpty: {
    id: `${scope}.lastNameShouldNotEmpty`,
    defaultMessage: 'Last name should not be empty!',
  },
  roleShouldNotEmpty: {
    id: `${scope}.roleShouldNotEmpty`,
    defaultMessage: 'Role should not be empty!',
  },
  mobileShouldNotEmpty: {
    id: `${scope}.mobileShouldNotEmpty`,
    defaultMessage: 'Mobile should not be empty!',
  },
  totalScoreShouldNotEmpty: {
    id: `${scope}.totalScoreShouldNotEmpty`,
    defaultMessage: 'Total score should greater than or equal to zero!',
  },
  totalPurchaseShouldNotEmpty: {
    id: `${scope}.totalPurchaseShouldNotEmpty`,
    defaultMessage: 'Total purchase should greater than or equal to zero!',
  },
});
