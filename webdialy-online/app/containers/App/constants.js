/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 */
export const publicPath = process.env.REACT_APP_PUBLIC_PATH || '';

export const PATH_LOGIN = `${publicPath}/login`;
export const PATH_LINE_LOGIN = `${publicPath}/line_login/:token`;
export const PATH_LOGOUT = `${publicPath}/logout`;
export const PATH_DASHBOARD = `${publicPath}/dashboard`;
export const PATH_REGISTER = `${publicPath}/register`;
export const PATH_FORGOT_PWD = `${publicPath}/forgot-password`;
export const PATH_RECOVER_PWD = `${publicPath}/recover-password`;
export const PATH_PROFILE = `${publicPath}/profile`;
export const PATH_PROFILE_EDIT = `${publicPath}/profile-edit`;
export const PATH_ADDRESS_SHIPPING = `${publicPath}/profile-shipping`;
export const PATH_PROFILE_CHANGE_PWD = `${publicPath}/profile-change-pwd`;
export const PATH_MEMBER = `${publicPath}/members`;
export const PATH_SHOPPING = `${publicPath}/shopping`;
export const PATH_CHECKOUT_ORDER = `${publicPath}/checkout-orders`;
export const PATH_MASTER_UI = `${publicPath}/master-ui`;
export const PATH_MS_COMPANY = `${publicPath}/ms/company`;
export const PATH_MS_BRANCH = `${publicPath}/ms/branch`;
export const PATH_MS_PRODUCT = `${publicPath}/ms/product`;
export const PATH_MS_EMPLOYEE = `${publicPath}/ms/employee`;
export const PATH_MS_STOCK = `${publicPath}/ms/stock`;
export const PATH_MS_PROMOTION = `${publicPath}/ms/promotion`;
export const PATH_MS_ROLE = `${publicPath}/ms/role`;
export const PATH_DATABASE = `${publicPath}/database`;
export const PATH_TEST_GOOGLE_MAP = `${publicPath}/googlemap`;
export const PATH_ORDERS_TRACKING = `${publicPath}/tracking`;
export const PATH_CHECK_CARTS = `${publicPath}/check_carts`;
