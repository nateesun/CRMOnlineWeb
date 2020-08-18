import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CardPoint from './CardPoint';

export default function DahboardContent(props) {
  const { profile } = props;
  const { pointBalance, pointRedemption } = profile;

  DahboardContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint label="Point Balance" point={pointBalance} bg="#1aa4b4" fbg="#17828f" />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardPoint label="Point Redemption" point={pointRedemption} bg="#07B975" fbg="#028A57" />
      </Grid>
    </Grid>
  );
}
