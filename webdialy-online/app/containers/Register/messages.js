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
    defaultMessage: 'Register Member',
  },
  enterEmail: {
    id: `${scope}.enterEmail`,
    defaultMessage: 'Email',
  },
  prefixShouldNotEmpty: {
    id: `${scope}.prefixShouldNotEmpty`,
    defaultMessage: 'Prefix should not be blank.',
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
  prefix: {
    id: `${scope}.prefix`,
    defaultMessage: 'Prefix',
  },
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First Name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name',
  },
  dateOfBirth: {
    id: `${scope}.dateOfBirth`,
    defaultMessage: 'Date of Birth',
  },
  mobile: {
    id: `${scope}.mobile`,
    defaultMessage: 'Mobile Number',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email Address',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
  rePassword: {
    id: `${scope}.rePassword`,
    defaultMessage: 'Re-Password',
  },
  btnRegister: {
    id: `${scope}.btnRegister`,
    defaultMessage: 'Register',
  },
  btnClear: {
    id: `${scope}.btnClear`,
    defaultMessage: 'Clear',
  },
  backLogin: {
    id: `${scope}.backLogin`,
    defaultMessage: 'Back to Login?',
  },
  lineId: {
    id: `${scope}.lineId`,
    defaultMessage: 'Line ID',
  },
});
