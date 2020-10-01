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
  accFromNameShouldNotEmpty: {
    id: `${scope}.AccFromNameShouldNotEmpty`,
    defaultMessage: 'Account from name should not empty',
  },
  accToNameShouldNotEmpty: {
    id: `${scope}.accToNameShouldNotEmpty`,
    defaultMessage: 'Account to name should not empty',
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
  transferRefShouldNotEmpty: {
    id: `${scope}.transferRefShouldNotEmpty`,
    defaultMessage: 'Transfer ref should not empty',
  },
  transferAmtShouldNotEmpty: {
    id: `${scope}.transferAmtShouldNotEmpty`,
    defaultMessage: 'Transfer amount should not empty',
  },
  transferAmtShouldMoreZero: {
    id: `${scope}.transferAmtShouldMoreZero`,
    defaultMessage: 'Transfer amount should more than 1',
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
  memberName: {
    id: `${scope}.memberName`,
    defaultMessage: 'Member Name',
  },
  memberLastname: {
    id: `${scope}.memberLastname`,
    defaultMessage: 'Member LastName',
  },
  address1: {
    id: `${scope}.address1`,
    defaultMessage: 'Address 1',
  },
  address2: {
    id: `${scope}.address2`,
    defaultMessage: 'Address 2',
  },
  subDistrict: {
    id: `${scope}.subDistrict`,
    defaultMessage: 'Sub District',
  },
  district: {
    id: `${scope}.district`,
    defaultMessage: 'District',
  },
  province: {
    id: `${scope}.province`,
    defaultMessage: 'Province',
  },
  postcode: {
    id: `${scope}.postcode`,
    defaultMessage: 'Post Code',
  },
  useForShpping: {
    id: `${scope}.useForShpping`,
    defaultMessage: 'ใช้ที่อยู่นี้ กับข้อมูลที่อยู่สำหรับรับชำระ',
  },
  accountFromName: {
    id: `${scope}.accountFromName`,
    defaultMessage: 'ชื่อบัญชีต้นทาง',
  },
  accountToName: {
    id: `${scope}.accountToName`,
    defaultMessage: 'ชื่อบัญชีปลายทาง',
  },
  fromAccountNo: {
    id: `${scope}.fromAccountNo`,
    defaultMessage: 'เลขที่บัญชีต้นทาง (4 ตัวท้าย)',
  },
  toAccountNo: {
    id: `${scope}.toAccountNo`,
    defaultMessage: 'เลขที่บัญชีปลายทาง (4 ตัวท้าย)',
  },
  transferDate: {
    id: `${scope}.transferDate`,
    defaultMessage: 'วันที่ เวลาที่โอน dd/MM/yyyy HH:mm',
  },
  transferFef: {
    id: `${scope}.transferFef`,
    defaultMessage: 'เลขที่รายการ/อ้างอิง',
  },
  transferAmount: {
    id: `${scope}.transferAmount`,
    defaultMessage: 'จำนวนเงิน (บาท)',
  },
});
