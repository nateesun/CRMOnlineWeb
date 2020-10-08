/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectLogin,
  makeLoginError,
  makeSelectProfile,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './LoginForm';
import * as actions from './actions';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div>
      <LoginForm {...props} />
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  errorLogin: makeLoginError(),
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: ({ email, password }) => {
      dispatch(actions.checkLogin(email, password));
    },
    clearData: () => {
      dispatch(actions.initState());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
