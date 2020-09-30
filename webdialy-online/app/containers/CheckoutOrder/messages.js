/*
 * Checkout Messages
 *
 * This contains all the text for the Checkout container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Checkout';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Checkout container!',
  },
  fromAccShouldNotEmpty: {
    id: `${scope}.fromAccShouldNotEmpty`,
    defaultMessage: 'From account number should not empty',
  },
  toAccShouldNotEmpty: {
    id: `${scope}.toAccShouldNotEmpty`,
    defaultMessage: 'To account number should not empty',
  },
  transferDateShouldNotEmpty: {
    id: `${scope}.transferDateShouldNotEmpty`,
    defaultMessage: 'Transfer date should not empty',
  },
  nameShouldNotEmpty: {
    id: `${scope}.nameShouldNotEmpty`,
    defaultMessage: 'Name should not empty',
  },
  lastNameShouldNotEmpty: {
    id: `${scope}.lastNameShouldNotEmpty`,
    defaultMessage: 'Last name should not empty',
  },
  address1ShouldNotEmpty: {
    id: `${scope}.address1ShouldNotEmpty`,
    defaultMessage: 'Last name should not empty',
  },
  subDistrictShouldNotEmpty: {
    id: `${scope}.subDistrictShouldNotEmpty`,
    defaultMessage: 'SubDistrict should not empty',
  },
  districtShouldNotEmpty: {
    id: `${scope}.districtShouldNotEmpty`,
    defaultMessage: 'District should not empty',
  },
  provinceShouldNotEmpty: {
    id: `${scope}.provinceShouldNotEmpty`,
    defaultMessage: 'Province should not empty',
  },
  postcodeShouldNotEmpty: {
    id: `${scope}.postcodeShouldNotEmpty`,
    defaultMessage: 'Postcode should not empty',
  },
});
