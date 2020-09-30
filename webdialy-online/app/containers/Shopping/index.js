/**
 *
 * Shopping
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ShoppingContent from './ShoppingContent';
import makeSelectShopping from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Shopping(props) {
  useInjectReducer({ key: 'shopping', reducer });
  useInjectSaga({ key: 'shopping', saga });

  return (
    <div style={{ width: '100%' }}>
      <ShoppingContent {...props} />
    </div>
  );
}

Shopping.propTypes = {};

const mapStateToProps = createStructuredSelector({
  shopping: makeSelectShopping(),
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Shopping);
