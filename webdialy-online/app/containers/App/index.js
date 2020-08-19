import React from 'react';
import 'fontsource-roboto';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import GlobalStyle from '../../global-styles';
import Main from './theme_channel/Papaperbase';
import { makeLoggedIn, makeSelectProfile } from 'containers/Login/selectors';

export function App(props) {
  return (
    <div>
      <Main {...props} />
      <GlobalStyle />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  loggedIn: makeLoggedIn(),
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
