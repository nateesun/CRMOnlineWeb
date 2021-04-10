/**
 *
 * Login
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import useCookie, { getCookie } from 'react-use-cookie';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as appConstants from 'containers/App/constants';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './LoginForm';
import * as actions from './actions';

const Login = props => {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  const [database, setDatabase] = useCookie('database', '');
  const token = getCookie('token') || '';

  useEffect(() => {
    const data = new URLSearchParams(props.location.search).get('data') || '';
    if (data) {
      setDatabase(data);
      props.initDatabase(data);
    }
  }, []);

  if (token && database) {
    return <Redirect to={`${appConstants.publicPath}/dashboard`} />;
  }

  return <LoginForm {...props} />;
};

Login.propTypes = {
  onSubmit: PropTypes.func,
  location: PropTypes.object,
  initDatabase: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: selectors.makeSelectLogin(),
  errorLogin: selectors.makeLoginError(),
  profile: selectors.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onValidateLogin: ({ email, mobile, password, type }) => {
      dispatch(actions.checkLogin(email, mobile, password, type));
    },
    clearData: () => {
      dispatch(actions.initState());
    },
    initDatabase: db => {
      dispatch(actions.initDatabase(db));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Login);
