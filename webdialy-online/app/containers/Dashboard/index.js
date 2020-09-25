/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectLogin } from 'containers/Login/selectors';
import { makeSelectLineLoginProfile } from 'containers/LineLogin/selectors';
import * as selects from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import DashboardContent from './DahboardContent';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  useEffect(() => {
    props.onRefresh(props.login.email);
  }, []);

  return props.login && <DashboardContent {...props} />;
}

Dashboard.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  profile: selects.makeSelectProfile(),
  lineProfile: makeSelectLineLoginProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRefresh: email => {
      dispatch(actions.initLoad(email));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
