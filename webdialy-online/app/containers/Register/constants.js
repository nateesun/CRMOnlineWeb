/*
 *
 * Register constants
 *
 */
export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';
export const apiHostService = process.env.API_HOST_SERVICE || 'http://localhost:5000';

export const INIT_STATE = 'app/Register/INIT_STATE';

export const ADD_REGISTER_MEMBER = 'containers/Register/ADD_REGISTER_MEMBER';
export const ADD_REGISTER_MEMBER_SUCCESS =
  'containers/Register/ADD_REGISTER_MEMBER_SUCCESS';
export const ADD_REGISTER_MEMBER_ERROR =
  'containers/Register/ADD_REGISTER_MEMBER_ERROR';
