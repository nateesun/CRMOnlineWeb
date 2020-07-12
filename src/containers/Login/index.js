import React, { memo } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect'

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import reducer from './reducer'
import saga from './saga'

import LoginForm from "./LoginForm"
import { checkLogin } from "./actions"
import { makeSelectLogin, makeLoggedIn, makeLoginError } from "./selectors";

const key = 'login'

const Login = props => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return <LoginForm {...props} />
}

const mapStateToProps = createStructuredSelector({
  loginProfile: makeSelectLogin(),
  loggedIn: makeLoggedIn(),
  error: makeLoginError(),
})

const mapDispatchToProps = dispatch => {
  return {
    onCheckLogin: (user, pass) => {
      dispatch(checkLogin(user, pass))
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  withConnect,
  memo
)(Login)
