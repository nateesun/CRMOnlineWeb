/*
 * Login Messages
 *
 * This contains all the text for the Login container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Login';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Login container!',
  },
  enterEmail: {
    id: `${scope}.enterEmail`,
    defaultMessage: 'Email',
  },
  enterPassword: {
    id: `${scope}.enterPassword`,
    defaultMessage: 'Password',
  },
  emailShouldNotEmpty: {
    id: `${scope}.emailShouldNotEmpty`,
    defaultMessage: 'Email should not be blank.',
  },
  emailIncorrectPattern: {
    id: `${scope}.emailIncorrectPattern`,
    defaultMessage: 'Incorrect format email.',
  },
  passwordShouldNotEmpty: {
    id: `${scope}.passwordShouldNotEmpty`,
    defaultMessage: 'Password should not be blank.',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Sign in',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password',
  },
  loginErrorMessage: {
    id: `${scope}.loginErrorMessage`,
    defaultMessage: 'Incorrect email or password.',
  },
});
