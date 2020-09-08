/**
 *
 * Dashboard
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

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

  const code = props.login.code || props.lineProfile.code;

  if (!code) {
    return <Redirect push to="/login" />;
  }

  useEffect(() => {
    props.onRefresh(code);
  }, []);

  return (
    <div>
      <DashboardContent {...props} />
    </div>
  );
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectProfile(),
  profile: selects.makeSelectProfile(),
  lineProfile: makeSelectLineLoginProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
