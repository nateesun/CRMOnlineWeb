import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import * as appConstants from 'containers/App/constants';
import ButtonLink from 'components/ButtonLink';
import RenderField from 'components/RenderField';
import messages from './messages';
import LoginLogo from '../../images/login.png';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
  footer: {
    marginTop: theme.spacing(1),
  },
}));

const ImgLogo = styled.img`
  border: 1px solid #bbbbbb;
  padding: 10px;
  border-radius: 5px 25px 5px 25px;
`;

const ForgotForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, onSendRequest } = props;
  const confirmRequestChangePassword = (values) => {
    onSendRequest({
      email: values.email,
      mobile: values.mobile,
      secret: values.confirm_secret,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <ImgLogo src={LoginLogo} width="128" height="128" />
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.header} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(confirmRequestChangePassword)}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Field
                name="email"
                component={RenderField}
                type="email"
                margin="normal"
                label={<FormattedMessage {...messages.emailAddress} />}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="mobile"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.mobile} />}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="confirm_secret"
                component={RenderField}
                type="password"
                margin="normal"
                label={<FormattedMessage {...messages.confirmSecret} />}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={pristine || submitting}
              >
                <FormattedMessage {...messages.sendEmail} />
              </Button>
              <Button
                fullWidth
                variant="contained"
                disabled={pristine || submitting}
                onClick={reset}
              >
                <FormattedMessage {...messages.clear} />
              </Button>
            </Grid>
          </Grid>
          <Grid container className={classes.footer}>
            <Grid item xs>
              <ButtonLink to={`${appConstants.publicPath}/login`}>
                <FormattedMessage {...messages.backToLogin} />
              </ButtonLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

ForgotForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
};

const validate = formValues => {
  const errors = {};

  if (typeof formValues.email === 'undefined') {
    errors.email = <FormattedMessage {...messages.emailShouldNotEmpty} />;
  } else if (!formValues.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errors.email = <FormattedMessage {...messages.emailIncorrectPattern} />;
  }

  if(typeof formValues.mobile === 'undefined') {
    errors.mobile = <FormattedMessage {...messages.mobileShouldNotEmpty} />;
  }
  if(typeof formValues.confirm_secret === 'undefined') {
    errors.confirm_secret = <FormattedMessage {...messages.secretShouldNotEmpty} />;
  }

  return errors;
};

export default reduxForm({
  form: 'fogotForm',
  validate,
})(ForgotForm);
