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
import reducer from './reducer';
import saga from './saga';
import CheckoutContent from './CheckoutContent';
import * as actions from './actions';

export function Checkout(props) {
  useInjectReducer({ key: 'checkout', reducer });
  useInjectSaga({ key: 'checkout', saga });

  useEffect(()=>{
    props.initLoadCart('SP00031');
    props.initLoadMemberShipping('M00001');
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
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCart: cart_no => dispatch(actions.loadCart(cart_no)),
    initLoadMemberShipping: member_code => dispatch(actions.loadMemberShipping(member_code)),
    onUploadImage: (file) => dispatch(actions.uploadImage(file)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Checkout);
