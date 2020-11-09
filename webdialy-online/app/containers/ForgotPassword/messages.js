/*
 * ForgotPassword Messages
 *
 * This contains all the text for the ForgotPassword container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ForgotPassword';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Forgot Password',
  },
  emailShouldNotEmpty: {
    id: `${scope}.emailShouldNotEmpty`,
    defaultMessage: 'Email should not be blank.',
  },
  mobileShouldNotEmpty: {
    id: `${scope}.mobileShouldNotEmpty`,
    defaultMessage: 'Mobile should not be blank.',
  },
  secretShouldNotEmpty: {
    id: `${scope}.secretShouldNotEmpty`,
    defaultMessage: 'Confirm secret should not be blank.',
  },
  emailIncorrectPattern: {
    id: `${scope}.emailIncorrectPattern`,
    defaultMessage: 'Incorrect format email.',
  },
  emailAddress: {
    id: `${scope}.emailAddress`,
    defaultMessage: 'Email Address',
  },
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'Mobile',
  },
  confirmSecret: {
    id: `${scope}.confirmSecret`,
    defaultMessage: 'Confirm Secret',
  },
  sendEmail: {
    id: `${scope}.sendEmail`,
    defaultMessage: 'Request password',
  },
  clear: {
    id: `${scope}.clear`,
    defaultMessage: 'Clear',
  },
  backToLogin: {
    id: `${scope}.backToLogin`,
    defaultMessage: 'Back to Login?',
  },
});
