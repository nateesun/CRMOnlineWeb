/**
 *
 * Checkout
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import CheckoutContent from './CheckoutContent';
import * as actions from './actions';

export function Checkout(props) {
  useInjectReducer({ key: 'checkout', reducer });
  useInjectSaga({ key: 'checkout', saga });

  useEffect(()=>{
    props.initLoadCart('SP00031');
  }, [])

  return <CheckoutContent {...props} />;
}

Checkout.propTypes = {};

const mapStateToProps = createStructuredSelector({
  checkout: selectors.makeSelectCheckout(),
  cartList: selectors.makeSelectCarts(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCart: cart_no => dispatch(actions.loadCart(cart_no)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Checkout);
