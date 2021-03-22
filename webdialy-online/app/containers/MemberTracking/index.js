/**
 *
 * MemberTracking
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import TrackCarts from 'containers/TrackCarts/Loadable';
import TrackOrders from 'containers/TrackOrders/Loadable';
import SubMenu from 'components/SubMenu';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';
import * as dashboardSelectors from 'containers/Dashboard/selectors';
import reducer from './reducer';
import saga from './saga';

export function MemberTracking(props) {
  useInjectReducer({ key: 'memberTracking', reducer });
  useInjectSaga({ key: 'memberTracking', saga });

  return (
    <React.Fragment>
      <SubMenu {...props} />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TrackCarts {...props} showCommand={false} />
        </Grid>
        <Grid item xs={12}>
          <TrackOrders {...props} showCommand={false} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

MemberTracking.propTypes = {};

const mapStateToProps = createStructuredSelector({
  memberTracking: selectors.makeSelectMemberTracking(),
  profile: dashboardSelectors.makeSelectProfile(),
  leftMenu: appSelectors.makeSelectLeftMenu(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MemberTracking);
