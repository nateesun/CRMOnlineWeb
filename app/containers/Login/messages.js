
import { defineMessages } from 'react-intl';

export const scope = 'crmonlineweb.containers.Login';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Login System',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Sign In'
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Sign In'
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot Password'
  },
  registerMember: {
    id: `${scope}.registerMember`,
    defaultMessage: 'Register Member'
  }
});
