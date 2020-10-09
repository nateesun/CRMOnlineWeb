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

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import * as shoppingSelectors from '../Shopping/selectors';
import reducer from './reducer';
import saga from './saga';
import CheckoutContent from './CheckoutContent';
import * as actions from './actions';
import * as constants from './constants';

export function Checkout(props) {
  useInjectReducer({ key: 'checkout', reducer });
  useInjectSaga({ key: 'checkout', saga });

  useEffect(() => {
    props.initLoadCart(props.cart.cart_no);
    props.initLoadMemberShipping(props.cart.member_code);
  }, []);

  return <CheckoutContent {...props} />;
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
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCart: cart_no => dispatch(actions.loadCart(cart_no)),
    initLoadMemberShipping: member_code =>
      dispatch(actions.loadMemberShipping(member_code)),
    onUploadImage: file => dispatch(actions.uploadImage(file)),
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
