import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'containers/Login/Loadable';
import Logout from 'containers/Logout/Loadable';
import Dashboard from 'containers/Dashboard/Loadable';
import LineLogin from 'containers/LineLogin/Loadable';
import Register from 'containers/Register/Loadable';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import RecoverPassword from 'containers/RecoverPassword/Loadable';
import Profile from 'containers/Profile/Loadable';
import ProfileEdit from 'containers/ProfileEdit/Loadable';
import AddressShipping from 'containers/AddressShipping/Loadable';
import ProfileChangePwd from 'containers/ProfileChangePwd/Loadable';
import Members from 'containers/Members/Loadable';
import MsCompany from 'containers/MsCompany/Loadable';
import MsBranch from 'containers/MsBranch/Loadable';
import MsProduct from 'containers/MsProduct/Loadable';
import MsStock from 'containers/MsStock/Loadable';
import MsPromotion from 'containers/MsPromotion/Loadable';
import MsRole from 'containers/MsRole/Loadable';
import Shopping from 'containers/Shopping/Loadable';
import CheckoutOrder from 'containers/CheckoutOrder/Loadable';
import GoogleMap from 'containers/GoogleMap/Loadable';
import MemberTracking from 'containers/MemberTracking/Loadable';
import CheckCarts from 'containers/CheckCarts/Loadable';
import MemberOrdersConfirm from 'containers/MemberOrdersConfirm/Loadable';
import DatabaseConfig from 'containers/DatabaseConfig/Loadable';
import UsePromotion from 'containers/UsePromotion/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import * as path from './constants';

export default function NewLayout() {
  return (
    <Switch>
      <Route exact path={`${path.publicPath}/`} component={Login} />
      <Route path={path.PATH_LOGIN} component={Login} />
      <Route path={path.PATH_LOGOUT} component={Logout} />
      <Route path={path.PATH_DASHBOARD} component={Dashboard} />
      <Route path={path.PATH_REGISTER} component={Register} />
      <Route path={path.PATH_FORGOT_PWD} component={ForgotPassword} />
      <Route path={path.PATH_RECOVER_PWD} component={RecoverPassword} />
      <Route path={path.PATH_PROFILE} component={Profile} />
      <Route path={path.PATH_PROFILE_EDIT} component={ProfileEdit} />
      <Route path={path.PATH_ADDRESS_SHIPPING} component={AddressShipping} />
      <Route path={path.PATH_PROFILE_CHANGE_PWD} component={ProfileChangePwd} />
      <Route path={path.PATH_MEMBER} component={Members} />
      <Route path={path.PATH_SHOPPING} component={Shopping} />
      <Route path={path.PATH_CHECKOUT_ORDER} component={CheckoutOrder} />
      <Route path={path.PATH_LINE_LOGIN} component={LineLogin} />
      <Route path={path.PATH_MS_COMPANY} component={MsCompany} />
      <Route path={path.PATH_MS_BRANCH} component={MsBranch} />
      <Route path={path.PATH_MS_PRODUCT} component={MsProduct} />
      <Route path={path.PATH_MS_STOCK} component={MsStock} />
      <Route path={path.PATH_MS_ROLE} component={MsRole} />
      <Route path={path.PATH_MS_PROMOTION} component={MsPromotion} />
      <Route path={path.PATH_TEST_GOOGLE_MAP} component={GoogleMap} />
      <Route path={path.PATH_ORDERS_TRACKING} component={MemberTracking} />
      <Route path={path.PATH_CHECK_CARTS} component={CheckCarts} />
      <Route
        path={path.PATH_MEMBER_ORDERS_CONFIRM}
        component={MemberOrdersConfirm}
      />
      <Route path={path.PATH_DATABASE} component={DatabaseConfig} />
      <Route path={path.PATH_USE_PROMOTION} component={UsePromotion} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
