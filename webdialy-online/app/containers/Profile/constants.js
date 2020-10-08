/*
 *
 * Profile constants
 *
 */

export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';
export const apiHostService = process.env.API_HOST_SERVICE || 'http://localhost:5000';

export const INIT_STATE = 'app/Profile/INIT_STATE';

export const INIT_LOAD = 'app/Profile/INIT_LOAD';
export const INIT_LOAD_SUCCESS = 'app/Profile/INIT_LOAD_SUCCESS';
export const INIT_LOAD_ERROR = 'app/Profile/INIT_LOAD_ERROR';
