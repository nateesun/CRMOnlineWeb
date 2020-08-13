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
import { makeSelectProfile, makeLoggedIn } from "containers/Login/selectors";
import reducer from './reducer';
import saga from './saga';
import DashboardContent from './DahboardContent'

export function Dashboard(props) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  return (
    <div>
      <DashboardContent {...props} />
    </div>
  );
}

Dashboard.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  loggedIn: makeLoggedIn(),
  profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Dashboard);
