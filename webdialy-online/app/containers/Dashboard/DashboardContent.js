import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RedeemPage from './RedeemPage';
import MyQrCode from './MyQrCode';

export default function DashboardContent(props) {
  DashboardContent.propTypes = {
    onRefresh: PropTypes.func,
    email: PropTypes.string,
    login: PropTypes.object,
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyQrCode {...props} />
      </Grid>
      <Grid item xs={12}>
        <RedeemPage {...props} />
      </Grid>
    </Grid>
  );
}
