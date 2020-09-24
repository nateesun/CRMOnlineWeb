import React from 'react';
import 'fontsource-roboto';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectLogin, makeSelectLoggedIn } from 'containers/Login/selectors';
import GlobalStyle from '../../global-styles';
import Layout from './Layouts';

export function App(props) {
  return (
    <div>
      <Layout {...props} />
      <GlobalStyle />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  loggedIn: makeSelectLoggedIn(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
