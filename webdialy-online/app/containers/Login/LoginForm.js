import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import messages from './messages';
import renderField from './renderField';
import { Button } from '@material-ui/core'

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Email">Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <div>
          <Field
            name="password"
            component={renderField}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div>
        <Button type="submit" color="primary" disabled={pristine || submitting}>
          Login
        </Button>
        <Button disabled={pristine || submitting} onClick={reset}>
          Clear
        </Button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
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
  } else if (formValues.password.length < 6) {
    errors.password = <FormattedMessage {...messages.passwordTooShort} />;
  }

  return errors;
};

export default reduxForm({
  form: 'loginForm',
  validate,
})(LoginForm);
