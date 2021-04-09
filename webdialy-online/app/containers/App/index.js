import React, { useEffect } from 'react';
import 'fontsource-roboto';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as loginSelectors from 'containers/Login/selectors';
import GlobalStyle from '../../global-styles';
import NewLayout from './NewLayout';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import * as selectors from './selectors';

export function App(props) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    props.loadAuthMenu();
  }, []);

  return (
    <React.Fragment>
      <NewLayout {...props} />
      <GlobalStyle />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  login: loginSelectors.makeSelectLogin(),
  loggedIn: loginSelectors.makeSelectLoggedIn(),
  leftMenu: selectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadAuthMenu: () => {
      dispatch(actions.initLoad());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
