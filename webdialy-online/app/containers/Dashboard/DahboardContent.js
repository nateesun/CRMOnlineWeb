import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Grid from '@material-ui/core/Grid';
import CardPoint from './CardPoint';
import messages from './messages';

export default function DahboardContent(props) {
  const { profile } = props;
  const { pointBalance, pointRedemption } = profile;

  DahboardContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
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
