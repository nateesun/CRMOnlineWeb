import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';
import CardPoint from './CardPoint';
import messages from './messages';
import RedeemPage from './RedeemPage';

export default function DahboardContent(props) {
  const { onRefresh, login, profile } = props;

  const refreshDataInit = () => {
    onRefresh(login.email);
  };

  DahboardContent.propTypes = {
    onRefresh: PropTypes.func,
    email: PropTypes.string,
    login: PropTypes.object,
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => refreshDataInit()}
        >
          <FormattedMessage {...messages.btnRefresh} />
        </Button>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint
          label={<FormattedMessage {...messages.totalScore} />}
          point={profile.total_score}
          bg="#1aa4b4"
          fbg="#17828f"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint
          label={<FormattedMessage {...messages.totalPurchase} />}
          point={profile.total_purchase}
          bg="#07B975"
          fbg="#028A57"
        />
      </Grid>
      <Grid item xs={12}>
        <RedeemPage {...props} />
      </Grid>
    </Grid>
  );
}
