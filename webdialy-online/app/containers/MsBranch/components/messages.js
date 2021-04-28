/*
 * MsBranch Messages
 *
 * This contains all the text for the MsBranch container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MsBranch';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MsBranch container!',
  },
  newItemHeader: {
    id: `${scope}.newItemHeader`,
    defaultMessage: 'New Branch',
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
    defaultMessage: 'Update Branch',
  },
  headerNewItem: {
    id: `${scope}.headerNewItem`,
    defaultMessage: 'New Item Form',
  },
  headerTableItems: {
    id: `${scope}.headerTableItems`,
    defaultMessage: 'Table List Items',
  },
  codeShouldNotEmpty: {
    id: `${scope}.codeShouldNotEmpty`,
    defaultMessage: 'Branch code should not empty',
  },
  nameShouldNotEmpty: {
    id: `${scope}.nameShouldNotEmpty`,
    defaultMessage: 'Branch name should not empty',
  },
  mapLatitudeShouldNotEmpty: {
    id: `${scope}.mapLatitudeShouldNotEmpty`,
    defaultMessage: 'Map latitude should not empty',
  },
  mapLongitudeShouldNotEmpty: {
    id: `${scope}.mapLongitudeShouldNotEmpty`,
    defaultMessage: 'Map longitude should not empty',
  },
  branchCode: {
    id: `${scope}.branchCode`,
    defaultMessage: 'Branch Code',
  },
  branchName: {
    id: `${scope}.branchName`,
    defaultMessage: 'Branch Name',
  },
  mapLatitude: {
    id: `${scope}.mapLatitude`,
    defaultMessage: 'Map Latitude',
  },
  mapLongitude: {
    id: `${scope}.mapLongitude`,
    defaultMessage: 'Map Longitude',
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
  mapDirectionLength: {
    id: `${scope}.mapDirectionLength`,
    defaultMessage: 'ระยะทาง(กิโลเมตร)',
  },
  mappingType: {
    id: `${scope}.mappingType`,
    defaultMessage: 'ประเภทการคำนวณ',
  },
  mappingBaht: {
    id: `${scope}.mappingBaht`,
    defaultMessage: 'ราคา(บาท)',
  },
});
