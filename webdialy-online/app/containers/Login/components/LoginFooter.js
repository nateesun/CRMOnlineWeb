import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonLink from 'components/ButtonLink';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import * as appConstants from 'containers/App/constants';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
  },
}));

export default function LoginFooter() {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <ButtonLink color="red" to={`${appConstants.publicPath}/forgot-password`}>
          {<FormattedMessage {...messages.forgotPassword} />}
        </ButtonLink>
      </Grid>
      <Grid item xs={12}>
        <ButtonLink color="blue" to={`${appConstants.publicPath}/register`}>
          {<FormattedMessage {...messages.register} />}
        </ButtonLink>
      </Grid>
    </Grid>
  );
}
