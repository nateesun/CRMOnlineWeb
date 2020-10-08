/*
 *
 * Dashboard constants
 *
 */
export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';
export const apiHostService = process.env.API_HOST_SERVICE || 'http://localhost:5000';

export const INIT_STATE = 'app/Dashboard/INIT_STATE';

export const INIT_LOAD = 'app/Dashboard/INIT_LOAD';
export const INIT_LOAD_SUCCESS = 'app/Dashboard/INIT_LOAD_SUCCESS';
export const INIT_LOAD_ERROR = 'app/Dashboard/INIT_LOAD_ERROR';

export const LOAD_REDEEM = 'app/Dashboard/LOAD_REDEEM';
export const LOAD_REDEEM_SUCCESS = 'app/Dashboard/LOAD_REDEEM_SUCCESS';
export const LOAD_REDEEM_ERROR = 'app/Dashboard/LOAD_REDEEM_ERROR';

export const CREATE_REDEEM = 'app/Dashboard/CREATE_REDEEM';
export const CREATE_REDEEM_SUCCESS = 'app/Dashboard/CREATE_REDEEM_SUCCESS';
export const CREATE_REDEEM_ERROR = 'app/Dashboard/CREATE_REDEEM_ERROR';
