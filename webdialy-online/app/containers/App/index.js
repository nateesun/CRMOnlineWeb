import React, { useEffect } from 'react';
import 'fontsource-roboto';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { getCookie } from 'react-use-cookie';
import * as selectors from 'containers/Login/selectors';
import * as dashboardSelectors from 'containers/Dashboard/selectors';
import * as dashboardActions from 'containers/Dashboard/actions';
import GlobalStyle from '../../global-styles';
import Layout from './Layouts';

export function App(props) {
  useEffect(() => {
    const getToken = getCookie('token')||'';
    if (getToken !== '') {
      props.loadAuthMenu(JSON.parse(getToken));
    }
  }, []);

  return (
    <React.Fragment>
      <Layout {...props} />
      <GlobalStyle />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  login: selectors.makeSelectLogin(),
  loggedIn: selectors.makeSelectLoggedIn(),
  profile: dashboardSelectors.makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAuthMenu: (email) => {
      dispatch(dashboardActions.initLoad(email));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
