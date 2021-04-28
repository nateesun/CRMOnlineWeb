/*
 * ProfileShipping Messages
 *
 * This contains all the text for the ProfileShipping container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ProfileShipping';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ProfileShipping container!',
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
  addressType: {
    id: `${scope}.addressType`,
    defaultMessage: 'Address Type',
  },
  address1: {
    id: `${scope}.address1`,
    defaultMessage: 'Address 1',
  },
  address2: {
    id: `${scope}.address2`,
    defaultMessage: 'Address 2',
  },
  province: {
    id: `${scope}.province`,
    defaultMessage: 'Province',
  },
  district: {
    id: `${scope}.district`,
    defaultMessage: 'District',
  },
  subDistrict: {
    id: `${scope}.subDistrict`,
    defaultMessage: 'Sub District',
  },
  postcode: {
    id: `${scope}.postcode`,
    defaultMessage: 'Post Code',
  },
  mapLatitude: {
    id: `${scope}.mapLatitude`,
    defaultMessage: 'Map Latitude',
  },
  mapLongitude: {
    id: `${scope}.mapLongitude`,
    defaultMessage: 'Map Longitude',
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
  headerEditForm: {
    id: `${scope}.headerEditForm`,
    defaultMessage: 'Edit Shipping',
  },
  btnResetForm: {
    id: `${scope}.btnResetForm`,
    defaultMessage: 'Reset',
  },
  btnBack: {
    id: `${scope}.btnBack`,
    defaultMessage: 'Back',
  },
  code: {
    id: `${scope}.code`,
    defaultMessage: 'Member Code',
  },
  btnSaveProfile: {
    id: `${scope}.btnSaveProfile`,
    defaultMessage: 'Save Data',
  },
});
