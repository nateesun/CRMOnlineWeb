/**
 *
 * Authentication
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { getCookie } from 'react-use-cookie';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as path from 'containers/App/constants';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

const Authentication = props => {
  useInjectReducer({ key: 'authentication', reducer });
  useInjectSaga({ key: 'authentication', saga });

  const { component: Component, ...rest } = props;

  // useEffect(() => {
  //   const uriPath = props.path.replace(path.publicPath, '');
  //   const user = getCookie('token') ? JSON.parse(getCookie('token')) : undefined;
  //   props.onLoadRole({ user, uriPath });
  // }, []);

  // const isAuthenticated = props.rolesStatus && props.rolesStatus === 'Allow';

  const isAuthenticated = getCookie('token') ? true : false;

  return (
    <Route
      {...rest}
      render={p =>
        isAuthenticated ? <Component {...p} /> : <Redirect to={`${path.publicPath}/`} />
      }
    />
  );
};

Authentication.propTypes = {
  onLoadRole: PropTypes.func,
  rolesStatus: PropTypes.string,
  path: PropTypes.any,
  component: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  rolesStatus: selectors.makeSelectAuthenticationAuthStatus(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadRole: ({ user, uriPath }) => {
      dispatch(actions.loadRole({ user, uriPath }));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Authentication);
