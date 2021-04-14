import React from 'react';
import { getCookie } from 'react-use-cookie';
import { Route, Redirect } from 'react-router-dom';
import * as path from 'containers/App/constants';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = getCookie('token') || undefined;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={`${path.publicPath}/`} />
      }
    />
  );
}
