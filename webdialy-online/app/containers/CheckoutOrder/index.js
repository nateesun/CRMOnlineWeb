/**
 *
 * Checkout
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as loginSelectors from 'containers/Login/selectors';
import * as appConstants from 'containers/App/constants';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as shoppingSelectors from 'containers/Shopping/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import CheckoutContent from './CheckoutContent';
import * as actions from './actions';

export function Checkout(props) {
  useInjectReducer({ key: 'checkout', reducer });
  useInjectSaga({ key: 'checkout', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    const cart_no = props.match.params.cart_no;
    props.initLoadCart(cart_no);
    props.initLoadMemberShipping();
  }, []);

  return (
    <MainLayoutApp title='Checkout Order' {...props}>
      <CheckoutContent {...props} />
    </MainLayoutApp>
  );
}

Checkout.propTypes = {
  initLoadCart: PropTypes.func,
  initLoadMemberShipping: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  checkout: selectors.makeSelectCheckout(),
  cartList: selectors.makeSelectCarts(),
  shipping: selectors.makeSelectMemberShipping(),
  cart: shoppingSelectors.makeSelectCart(),
  paymentData: selectors.makeSelectPaymentData(),
  imgValid: selectors.makeSelectSlipValidateStatus(),
  currentCartNo: selectors.makeSelectCartsNo(),
  database: loginSelectors.makeSelectDatabase(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
  profile: mainSelectors.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCart: cart_no => dispatch(actions.loadCart(cart_no)),
    initLoadMemberShipping: () =>dispatch(actions.loadMemberShipping()),
    onUploadImage: file => dispatch(actions.uploadImage(file)),
    onUpdateSlipPath: filePath => dispatch(actions.updateSlipPath(filePath)),
    setPaymentData: data => dispatch(actions.setPaymentData(data)),
    checkSlipImage: image => dispatch(actions.checkSlip(image)),
    deleteItemCart: product_code =>
      dispatch(actions.deleteItemCart(product_code)),
    updateItemCart: (product_code, qty) =>
      dispatch(actions.updateItemCart({product_code, qty})),
    onUpdateAddressForm: (data) => dispatch(actions.updateAddressForm(data)),
    onUpdateShoppingStep: () => dispatch(actions.updateShoppingStep()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Checkout);
