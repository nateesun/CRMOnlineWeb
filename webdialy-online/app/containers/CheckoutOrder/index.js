/**
 *
 * Checkout
 *
 */

import React, { useEffect, useState } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);
  const [latitude, setLatitude] = useState(13.809992);
  const [longitude, setLongitude] = useState(100.41313);
  const [file, setFile] = useState(null);
  const [showImg, setShowImg] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />;
  }

  useEffect(() => {
    const cart_no = props.match.params.cart_no;
    props.initLoadCart(cart_no);
    props.initLoadMemberShipping();
    props.initLoadMemberShipping();
  }, []);

  return (
    <MainLayoutApp title="Checkout Order" {...props}>
      <CheckoutContent
        latitude={latitude}
        longitude={longitude}
        activeStep={activeStep}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setActiveStep={setActiveStep}
        file={file}
        showImg={showImg}
        setFile={setFile}
        setShowImg={setShowImg}
        distance={distance}
        duration={duration}
        setDistance={setDistance}
        setDuration={setDuration}
        {...props}
      />
    </MainLayoutApp>
  );
}

Checkout.propTypes = {
  initLoadCart: PropTypes.func,
  initLoadMemberShipping: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  response: selectors.makeSelectResponse(),
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
    dispatch,
    initLoadCart: cart_no => dispatch(actions.loadCart(cart_no)),
    initLoadMemberShipping: () => dispatch(actions.loadMemberShipping()),
    onUploadImage: file => dispatch(actions.uploadImage(file)),
    onUpdateSlipPath: filePath => dispatch(actions.updateSlipPath(filePath)),
    setPaymentData: data => dispatch(actions.setPaymentData(data)),
    checkSlipImage: image => dispatch(actions.checkSlip(image)),
    deleteItemCart: product_code =>
      dispatch(actions.deleteItemCart(product_code)),
    updateItemCart: (product_code, qty) =>
      dispatch(actions.updateItemCart({ product_code, qty })),
    onUpdateAddressForm: data => dispatch(actions.updateAddressForm(data)),
    onUpdateShoppingStep: () => dispatch(actions.updateShoppingStep()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Checkout);
