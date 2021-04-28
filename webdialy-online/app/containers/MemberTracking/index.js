/**
 *
 * MemberTracking
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TrackCarts from 'containers/TrackCarts/Loadable';
import TrackOrders from 'containers/TrackOrders/Loadable';
import MainLayoutApp from 'containers/MainLayoutApp';
import * as mainSelectors from 'containers/MainLayoutApp/selectors';
import * as appSelectors from 'containers/App/selectors';
import * as selectors from './selectors';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    marginBottom: '50px',
  },
}));

export function MemberTracking(props) {
  const classes = useStyles();

  return (
    <MainLayoutApp title="TrackOrder" {...props}>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12}>
          <TrackCarts {...props} showCommand={false} />
        </Grid>
        {/* <Grid item xs={12}>
          <TrackOrders {...props} showCommand={false} />
        </Grid> */}
      </Grid>
    </MainLayoutApp>
  );
}

MemberTracking.propTypes = {};

const mapStateToProps = createStructuredSelector({
  memberTracking: selectors.makeSelectMemberTracking(),
  profile: mainSelectors.makeSelectProfile(),
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
