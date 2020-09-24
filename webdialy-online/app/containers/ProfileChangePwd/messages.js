/*
 * ProfileChangePwd Messages
 *
 * This contains all the text for the ProfileChangePwd container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ProfileChangePwd';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Change Password',
  },
  oldPasswordShouldNotEmpty: {
    id: `${scope}.oldPasswordShouldNotEmpty`,
    defaultMessage: 'Please input old password.',
  },
  newPasswordShouldNotEmpty: {
    id: `${scope}.newPasswordShouldNotEmpty`,
    defaultMessage: 'New password should not be blank.',
  },
  confirmPasswordShouldNotEmpty: {
    id: `${scope}.confirmPasswordShouldNotEmpty`,
    defaultMessage: 'Confirm password should not be blank.',
  },
  newPassAndConfirmPassShouldBeMatch: {
    id: `${scope}.newPassAndConfirmPassShouldBeMatch`,
    defaultMessage: 'New password and Confirm password mismatch.',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email Address',
  },
  oldPassword: {
    id: `${scope}.oldPassword`,
    defaultMessage: 'Current Password',
  },
  newPassword: {
    id: `${scope}.newPassword`,
    defaultMessage: 'New Password',
  },
  confirmPassword: {
    id: `${scope}.confirmPassword`,
    defaultMessage: 'Comfirm Password',
  },
  btnResetForm: {
    id: `${scope}.btnResetForm`,
    defaultMessage: 'Reset',
  },
  btnBack: {
    id: `${scope}.btnBack`,
    defaultMessage: 'Back',
  },
  btnSaveProfile: {
    id: `${scope}.btnSaveProfile`,
    defaultMessage: 'Save Data',
  },
});
