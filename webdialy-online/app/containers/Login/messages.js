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
    defaultMessage: 'Login container!',
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
  mobileShouldNotEmpty: {
    id: `${scope}.mobileShouldNotEmpty`,
    defaultMessage: 'Mobile should not be blank.',
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
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Login by Email',
  },
  signInMobile: {
    id: `${scope}.signInMobile`,
    defaultMessage: 'Login by Mobile',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'Mobile',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  clear: {
    id: `${scope}.clear`,
    defaultMessage: 'Clear',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: `Don't have an account? Sign Up`,
  },
});
