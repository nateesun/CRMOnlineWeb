/**
 *
 * Dashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import * as selects from './selectors';
import { makeSelectProfile } from 'containers/Login/selectors';
import { makeSelectLineLoginProfile } from 'containers/LineLogin/selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import DashboardContent from './DahboardContent';

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return props.login && <DashboardContent {...props} />
}

Dashboard.propTypes = {};

const mapStateToProps = createStructuredSelector({
  login: makeSelectProfile(),
  profile: selects.makeSelectProfile(),
  lineProfile: makeSelectLineLoginProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRefresh: code => {
      dispatch(actions.initLoad(code));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
