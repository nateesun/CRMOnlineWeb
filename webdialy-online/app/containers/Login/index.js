/**
 *
 * Login
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './LoginForm';
import * as actions from './actions';

const Login = (props) => {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  useEffect(()=>{
    const data = getCookie('database')||'';
    if(data){
      props.initDatabase(data);
    }
  }, [])

  return (
    <LoginForm {...props} />
  );
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: selectors.makeSelectLogin(),
  errorLogin: selectors.makeLoginError(),
  profile: selectors.makeSelectProfile(),
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
    initDatabase: (db) => {
      dispatch(actions.initDatabase(db))
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
