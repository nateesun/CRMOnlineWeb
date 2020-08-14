/*
 * Register Messages
 *
 * This contains all the text for the Register container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Register';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Register container!',
  },
  enterEmail: {
    id: `${scope}.enterEmail`,
    defaultMessage: 'Email',
  },
  emailShouldNotEmpty: {
    id: `${scope}.emailShouldNotEmpty`,
    defaultMessage: 'Email should not be blank.',
  },
  emailIncorrectPattern: {
    id: `${scope}.emailIncorrectPattern`,
    defaultMessage: 'Incorrect format email.',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Confrim Send',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password',
  },
  loginErrorMessage: {
    id: `${scope}.loginErrorMessage`,
    defaultMessage: 'Incorrect email or password.',
  },
  passwordShouldNotEmpty: {
    id: `${scope}.passwordShouldNotEmpty`,
    defaultMessage: 'Password should not be blank.',
  },
  passwordConfirmShouldEqual: {
    id: `${scope}.passwordConfirmShouldEqual`,
    defaultMessage: 'Password and Re-password should be equal.',
  },
  dateOfBirthShouldNotEmpty: {
    id: `${scope}.dateOfBirthShouldNotEmpty`,
    defaultMessage: 'Date of Birth should not be blank.',
  },
  firstNameShouldNotEmpty: {
    id: `${scope}.firstNameShouldNotEmpty`,
    defaultMessage: 'First name should not be blank.',
  },
  lastNameShouldNotEmpty: {
    id: `${scope}.lastNameShouldNotEmpty`,
    defaultMessage: 'Last name should not be blank.',
  },
  mobileShouldNotEmpty: {
    id: `${scope}.mobileShouldNotEmpty`,
    defaultMessage: 'Mobile should not be blank.',
  },
});
