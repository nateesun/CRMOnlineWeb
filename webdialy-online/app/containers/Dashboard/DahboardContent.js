import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import CardPoint from './CardPoint';
import messages from './messages';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';

export default function DahboardContent(props) {
  const { onRefresh } = props;
  const { code, pointBalance, pointRedemption } = props.login;

  const refreshDataInit = (code) => {
    onRefresh(code);
  }

  DahboardContent.propTypes = {
    code: PropTypes.string,
    pointBalance: PropTypes.number,
    pointRedemption: PropTypes.number,
    onRefresh: PropTypes.func,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={() => refreshDataInit(code)}
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
