/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import ForgotForm from './ForgotForm';

const ForgotPassword = props => {
  useInjectReducer({ key: 'forgotPassword', reducer });
  useInjectSaga({ key: 'forgotPassword', saga });

  return <ForgotForm {...props} />;
};

const mapStateToProps = createStructuredSelector({
  forgotPassword: selectors.makeSelectForgotPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSendRequest: payload => {
      dispatch(actions.requestPassword(payload));
    },
    onSendEmail: payload => {
      dispatch(actions.sendEmail(payload));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ForgotPassword);
