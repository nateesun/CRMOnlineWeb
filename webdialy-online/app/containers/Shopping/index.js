/**
 *
 * Shopping
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as appSelectors from 'containers/App/selectors';
import ShoppingContent from './ShoppingContent';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function Shopping(props) {
  useInjectReducer({ key: 'shopping', reducer });
  useInjectSaga({ key: 'shopping', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    props.onLoadProfile();
    props.onLoadProduct();
  }, []);

  return (
    <MainLayoutApp title='Shopping' {...props}>
      <ShoppingContent {...props} />
    </MainLayoutApp>
  );
}

Shopping.propTypes = {};

const mapStateToProps = createStructuredSelector({
  shopping: selectors.makeSelectShopping(),
  productList: selectors.makeSelectProductList(),
  profile: selectors.makeSelectProfile(),
  cart: selectors.makeSelectCart(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadProduct: ()=> dispatch(actions.loadProduct()),
    onAddCartItem: item => dispatch(actions.createItemCart(item)),
    onUpdateCartItem: item => dispatch(actions.updateItemCart(item)),
    onSearch: data => dispatch(actions.searchProduct(data)),
    onLoadProfile: () => dispatch(actions.loadProfile()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Shopping);
