/*
 *
 * AddressShipping constants
 *
 */

export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';
export const apiHostService = process.env.API_HOST_SERVICE || 'http://localhost:5000';

export const INIT_STATE = 'app/AddressShipping/INIT_STATE';

export const EDIT_SHIPPING = 'containers/AddressShipping/EDIT_SHIPPING';
export const EDIT_SHIPPING_SUCCESS = 'containers/AddressShipping/EDIT_SHIPPING_SUCCESS';
export const EDIT_SHIPPING_ERROR = 'containers/AddressShipping/EDIT_SHIPPING_ERROR';
export const INIT_LOAD = 'containers/AddressShipping/INIT_LOAD';
export const INIT_LOAD_SUCCESS = 'containers/AddressShipping/INIT_LOAD_SUCCESS';
export const INIT_LOAD_ERROR = 'containers/AddressShipping/INIT_LOAD_ERROR';
export const CHANGE_MAPS_VALUE = 'containers/AddressShipping/CHANGE_MAPS_VALUE';
