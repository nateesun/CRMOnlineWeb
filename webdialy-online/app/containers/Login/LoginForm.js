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
import messages from './messages';
import LoginLogo from 'images/Login.png';
import RenderField from 'components/RenderField';
import ButtonLink from 'components/ButtonLink';
import SweetAlert from 'sweetalert2-react';

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
  loginFooter: {
    marginTop: theme.spacing(1),
  },
}));

const ImgLogo = styled.img`
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px 25px 5px 25px;
`;

const LoginForm = props => {
  const classes = useStyles();
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    errorLogin,
    clearData,
  } = props;

  return (
    <Container component="main" maxWidth="xs">
      <SweetAlert
        show={errorLogin}
        title="Login Error"
        type="error"
        text={errorLogin}
        onConfirm={clearData}
      />
      <div className={classes.paper}>
        <ImgLogo src={LoginLogo} width="128" height="128" />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field
            name="email"
            component={RenderField}
            type="email"
            margin="normal"
            label="Email Address"
            required
            fullWidth
            autoFocus
          />
          <Field
            name="password"
            component={RenderField}
            type="password"
            label="Password"
            margin="normal"
            required
            fullWidth
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine || submitting}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
          <Grid container className={classes.loginFooter}>
            <Grid item xs={12} lg={4}>
              <ButtonLink color="purple" to="/forgot-password">
                Forgot password?
              </ButtonLink>
            </Grid>
            <Grid item xs={12} lg={8}>
              <ButtonLink color="purple" to="/register">
                {"Don't have an account? Sign Up"}
              </ButtonLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

LoginForm.propTypes = {
  errorLogin: PropTypes.string,
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

  if (!formValues.password) {
    errors.password = <FormattedMessage {...messages.passwordShouldNotEmpty} />;
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
