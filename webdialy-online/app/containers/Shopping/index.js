/**
 *
 * Shopping
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import MainComponents from './components';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

export function Shopping(props) {
  useInjectReducer({ key: 'shopping', reducer });
  useInjectSaga({ key: 'shopping', saga });

  useEffect(() => {
    props.onLoadProduct();
  }, []);

  return (
    <MainLayoutApp title="Shopping" {...props}>
      <MainComponents {...props} />
    </MainLayoutApp>
  );
}

Shopping.propTypes = {
  onLoadProduct: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  shopping: selectors.makeSelectShopping(),
  productList: selectors.makeSelectProductList(),
  profile: mainSelectors.makeSelectProfile(),
  cart: selectors.makeSelectCart(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadProduct: () => dispatch(actions.loadProduct()),
    onAddCartItem: item => dispatch(actions.createItemCart(item)),
    onUpdateCartItem: item => dispatch(actions.updateItemCart(item)),
    onSearch: data => dispatch(actions.searchProduct(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Shopping);
