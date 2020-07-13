import React, { memo, useEffect } from "react"
import { connect } from "react-redux"
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect'
import { useCookies } from 'react-cookie'

import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';

import reducer from './reducer'
import saga from './saga'

import LoginForm from "./LoginForm"
import { checkLogin, clearLogin } from "./actions"
import { makeSelectLogin, makeLoggedIn, makeLoginError } from "./selectors";
import { useHistory } from "react-router-dom";

const key = 'login'

const Login = props => {
  const { loggedIn, error, onClearLogin } = props
  const [cookies, setCookie] = useCookies(['loggedIn'])
  const history = useHistory()

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(()=>{
    if(error !== ''){
      alert(error)
      onClearLogin()
    }
    return ()=>{
    }
  }, [error, onClearLogin])

  if (loggedIn === true) {
    setCookie('loggedIn', 'Y', { path: '/' })
    history.push('/dashboard');
  }

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
    },
    onClearLogin: () => {
      dispatch(clearLogin());
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
