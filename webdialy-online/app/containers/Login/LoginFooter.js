import React from 'react'
import Grid from '@material-ui/core/Grid';
import ButtonLink from 'components/ButtonLink';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { publicPath } from './constants';
import messages from './messages';

const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    loginFooter: {
      marginTop: theme.spacing(1),
    },
    loginTopic: {
      marginTop: theme.spacing(1),
    },
  }));

export default function LoginFooter() {
    const classes = useStyles();
    return (
        <Grid container className={classes.loginFooter}>
          <Grid item xs={12} lg={4}>
            <ButtonLink color="purple" to={`${publicPath}/forgot-password`}>
              {<FormattedMessage {...messages.forgotPassword} />}
            </ButtonLink>
          </Grid>
          <Grid item xs={12} lg={8}>
            <ButtonLink color="purple" to={`${publicPath}/register`}>
              {<FormattedMessage {...messages.register} />}
            </ButtonLink>
          </Grid>
        </Grid>
    )
}
