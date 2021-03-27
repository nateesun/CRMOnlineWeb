/**
 *
 * Profile
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCookie } from 'react-use-cookie';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import * as appConstants from 'containers/App/constants';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as appSelectors from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import ProfileContent from './ProfileContent';
import * as selectors from './selectors';
import { Grid } from '@material-ui/core';

export function Profile(props) {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  const token = getCookie('token') || '';
  if (!token) {
    return <Redirect to={`${appConstants.publicPath}/`} />
  }

  useEffect(() => {
    if (token !== '') {
      props.initLoad(JSON.parse(token));
      props.initLoadCompany();
    }
  }, []);

  return (
    props.login && (
      <MainLayoutApp title="Profile" {...props}>
        <ProfileContent {...props} />
      </MainLayoutApp>
    )
  );
}

Profile.propTypes = {
  initLoad: PropTypes.func,
  login: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: selectors.makeSelectProfileData(),
  company: selectors.makeSelectCompany(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    initLoadCompany: () => dispatch(actions.initLoadCompany()),
    initLoad: email => {
      dispatch(actions.initLoad(email));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect, memo)(Profile);
