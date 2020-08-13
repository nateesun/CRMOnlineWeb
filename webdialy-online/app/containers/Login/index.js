/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
// import LoginForm from './LoginForm';
import SignIn from './SignIn';
import { checkLogin } from './actions';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return (
    <div>
      {/* <LoginForm {...props} /> */}
      <SignIn {...props} />
    </div>
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmit: ({ email, password }) => {
      dispatch(checkLogin(email, password));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
