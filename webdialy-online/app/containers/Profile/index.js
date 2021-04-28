/**
 *
 * Profile
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import MainComponents from './components';
import * as selectors from './selectors';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  useEffect(() => {
    props.initLoadCompany();
  }, []);

  return (
    props.login && (
      <MainLayoutApp title="Profile" {...props}>
        <MainComponents {...props} />
      </MainLayoutApp>
    )
  );
}

Profile.propTypes = {
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: mainSelectors.makeSelectProfile(),
  company: selectors.makeSelectCompany(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCompany: () => dispatch(actions.initLoadCompany()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Profile);
