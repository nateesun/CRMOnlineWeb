/**
 *
 * MemberOrdersConfirm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import ViewItem from './ViewItem';
import saga from './saga';
import Login from './Login';

export function MemberOrdersConfirm(props) {
  useInjectReducer({ key: 'memberOrdersConfirm', reducer });
  useInjectSaga({ key: 'memberOrdersConfirm', saga });

  if(!props.getData.uuid_index){
    return <Login token={props.match.params.token} {...props} />
  }

  return <ViewItem {...props} />;
}

MemberOrdersConfirm.propTypes = {
  getData: PropTypes.object,
  getOrderList: PropTypes.object,
  getConfirmData: PropTypes.object,
  response: PropTypes.object,
  onValidateLogin: PropTypes.func,
  onConfirmOrder: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  getData: selectors.makeSelectData(),
  getOrderList: selectors.makeSelectOrderList(),
  getConfirmData: selectors.makeSelectConfirmData(),
  response: selectors.makeSelectResponse(),
});

function mapDispatchToProps(dispatch) {
  return {
    onValidateLogin: formData => dispatch(actions.loginToConfirm(formData)),
    onConfirmOrder: confirmData => dispatch(actions.confirmOrder(confirmData)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberOrdersConfirm);
