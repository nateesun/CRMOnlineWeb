/**
 *
 * MemberOrdersConfirm
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import ViewItem from './components';
import * as selectors from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';

export function MemberOrdersConfirm(props) {
  useInjectReducer({ key: 'memberOrdersConfirm', reducer });
  useInjectSaga({ key: 'memberOrdersConfirm', saga });

  useEffect(() => {
    const { cart_no: cartNo, database = '' } = props.match.params;
    props.onInitLoad({ cart_no: cartNo, database });
  }, []);

  return <ViewItem {...props} />;
}

MemberOrdersConfirm.propTypes = {
  onInitLoad: PropTypes.func,
  getData: PropTypes.object,
  getOrderList: PropTypes.object,
  getConfirmData: PropTypes.object,
  response: PropTypes.object,
  onConfirmOrder: PropTypes.func,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  getData: selectors.makeSelectData(),
  getOrderList: selectors.makeSelectOrderList(),
  getConfirmData: selectors.makeSelectConfirmData(),
  response: selectors.makeSelectResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInitLoad: cartNo => dispatch(actions.initLoad(cartNo)),
    onConfirmOrder: confirmData => dispatch(actions.confirmOrder(confirmData)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberOrdersConfirm);
