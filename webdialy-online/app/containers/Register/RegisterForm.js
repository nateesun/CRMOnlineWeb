import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import ButtonLink from 'components/ButtonLink';
import RenderField from 'components/RenderField';
import SelectField from 'components/RenderField/Select';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
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
}));

const RegisterForm = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, onRegister } = props;
  const onValidated = formValues => {
    onRegister({ member: formValues });
  };

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register Member
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <Field
                name="prefix"
                component={SelectField}
                type="text"
                margin="normal"
                label="Prefix"
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="firstName"
                component={RenderField}
                type="text"
                margin="normal"
                label="First Name"
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="lastName"
                component={RenderField}
                type="text"
                margin="normal"
                label="Last Name"
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="dateOfBirth"
                component={RenderField}
                type="date"
                margin="normal"
                label="Date of Birth"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="mobile"
                component={RenderField}
                type="number"
                margin="normal"
                label="Mobile Number"
                required
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <Field
                name="email"
                component={RenderField}
                type="email"
                margin="normal"
                label="Email Address"
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="password"
                component={RenderField}
                type="password"
                label="Password"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="rePassword"
                component={RenderField}
                type="password"
                label="Re-Password"
                margin="normal"
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Accept term and condition"
              />
            </Grid>
            <Grid item xs={6} lg={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={pristine || submitting}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Button
                fullWidth
                variant="contained"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear
              </Button>
            </Grid>
            <Grid item xs={12}>
              <ButtonLink to="/login">Back to Login?</ButtonLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  onRegister: PropTypes.func,
};

const validate = formValues => {
  const errors = {};

  if (typeof formValues.email === 'undefined') {
    errors.email = <FormattedMessage {...messages.emailShouldNotEmpty} />;
  } else if (!formValues.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errors.email = <FormattedMessage {...messages.emailIncorrectPattern} />;
  }

  return errors;
};

export default reduxForm({
  form: 'registerForm',
  validate,
})(RegisterForm);
