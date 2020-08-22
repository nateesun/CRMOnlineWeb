import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import CardPoint from './CardPoint';
import messages from './messages';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';

export default function DahboardContent(props) {
  const { profile, onRefresh } = props;
  const { pointBalance = 0, pointRedemption = 0, code } = profile;

  DahboardContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => onRefresh(code)}
        >
          <FormattedMessage {...messages.btnRefresh} />
        </Button>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint
          label={<FormattedMessage {...messages.pointBalance} />}
          point={pointBalance}
          bg="#1aa4b4"
          fbg="#17828f"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint
          label={<FormattedMessage {...messages.pointRedemption} />}
          point={pointRedemption}
          bg="#07B975"
          fbg="#028A57"
        />
      </Grid>
    </Grid>
  );
}
