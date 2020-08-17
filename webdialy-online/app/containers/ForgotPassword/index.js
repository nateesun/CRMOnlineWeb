/**
 *
 * ForgotPassword
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectForgotPassword from './selectors';
import reducer from './reducer';
import saga from './saga';
import ForgotForm from './ForgotForm';

export function ForgotPassword(props) {
  useInjectReducer({ key: 'forgotPassword', reducer });
  useInjectSaga({ key: 'forgotPassword', saga });

  return (
    <div>
      <ForgotForm {...props} />
    </div>
  );
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  forgotPassword: makeSelectForgotPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ForgotPassword);
