/*
 *
 * Shopping constants
 *
 */

export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';
export const apiServiceHost = process.env.API_SERVICE || 'http://localhost:5000';

export const INIT_STATE = 'app/Shopping/INIT_STATE';

export const LOAD_PRODUCT = 'app/Shopping/LOAD_PRODUCT';
export const LOAD_PRODUCT_SUCCESS = 'app/Shopping/LOAD_PRODUCT_SUCCESS';
export const LOAD_PRODUCT_ERROR = 'app/Shopping/LOAD_PRODUCT_ERROR';

export const CREATE_ITEM_CART = 'app/Shopping/CREATE_ITEM_CART';
export const CREATE_ITEM_CART_SUCCESS = 'app/Shopping/CREATE_ITEM_CART_SUCCESS';
export const CREATE_ITEM_CART_ERROR = 'app/Shopping/CREATE_ITEM_CART_ERROR';

export const UPDATE_ITEM_CART = 'app/Shopping/UPDATE_ITEM_CART';
export const UPDATE_ITEM_CART_SUCCESS = 'app/Shopping/UPDATE_ITEM_CART_SUCCESS';
export const UPDATE_ITEM_CART_ERROR = 'app/Shopping/UPDATE_ITEM_CART_ERROR';
