/**
 *
 * Shopping
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as dashboardSelectors from 'containers/Dashboard/selectors'
import ShoppingContent from './ShoppingContent';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import * as constants from './constants';

export function Shopping(props) {
  useInjectReducer({ key: 'shopping', reducer });
  useInjectSaga({ key: 'shopping', saga });

  useEffect(() => {
    props.onLoadProduct();
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <ShoppingContent {...props} />
    </div>
  );
}

Shopping.propTypes = {};

const mapStateToProps = createStructuredSelector({
  shopping: selectors.makeSelectShopping(),
  productList: selectors.makeSelectProductList(),
  profile: dashboardSelectors.makeSelectProfile(),
  cart: selectors.makeSelectCart(),
  imgHost: constants.apiHostService,
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadProduct: ()=> dispatch(actions.loadProduct()),
    onAddCartItem: item => dispatch(actions.createItemCart(item)),
    onUpdateCartItem: item => dispatch(actions.updateItemCart(item)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Shopping);
