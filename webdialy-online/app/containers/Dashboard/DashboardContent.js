import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';
import CardPoint from './CardPoint';
import messages from './messages';
import RedeemPage from './RedeemPage';
import MyQrCode from './MyQrCode';

export default function DashboardContent(props) {
  const { onRefresh, login, profile } = props;

  const refreshDataInit = () => {
    onRefresh(login.email);
  };

  DashboardContent.propTypes = {
    onRefresh: PropTypes.func,
    email: PropTypes.string,
    login: PropTypes.object,
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MyQrCode profile={profile} />
      </Grid>
      <Grid item xs={12}>
        <RedeemPage {...props} />
      </Grid>
    </Grid>
  );
}
