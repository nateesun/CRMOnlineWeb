import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import RenderField from 'components/RenderField';
import InputCheckBox from 'components/RenderField/CheckboxInput';
import SweetAlert from 'sweetalert2-react';
import messages from './messages';
import LoginLogo from '../../images/login.png';
import LoginFooter from './LoginFooter';

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

const ImgLogo = styled.img`
  border: 1px solid #bbbbbb;
  padding: 10px;
  border-radius: 5px 25px 5px 25px;
`;

const LoginForm = props => {
  const classes = useStyles();
  const [type, setType] = useState('mobile');
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    errorLogin,
    clearData,
  } = props;

  useEffect(()=>{
    setType('mobile');
  }, [])

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
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field name="type" 
            component={InputCheckBox}
            label={`Login by ${type}`}
            onChange={()=>setType(type === 'mobile' ? 'email':'mobile')} 
          />
          {type==='email' && <Field
            name="email"
            component={RenderField}
            type="email"
            margin="normal"
            label={<FormattedMessage {...messages.email} />}
            required
            fullWidth
          />}
          {type==='mobile' && <Field
            name="mobile"
            component={RenderField}
            type="number"
            margin="normal"
            label={<FormattedMessage {...messages.mobile} />}
            required
            fullWidth
          />}
          <Field
            name="password"
            component={RenderField}
            type="password"
            label={<FormattedMessage {...messages.password} />}
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
            {<FormattedMessage {...messages.submit} />}
          </Button>
          <Button
            fullWidth
            variant="contained"
            disabled={pristine || submitting}
            onClick={reset}
          >
            {<FormattedMessage {...messages.clear} />}
          </Button>
        </form>
        <LoginFooter />
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
  clearData: PropTypes.func,
};

const validate = formValues => {
  const errors = {};
  if (typeof formValues.email === 'undefined') {
    errors.email = <FormattedMessage {...messages.emailShouldNotEmpty} />;
  } else if (!formValues.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errors.email = <FormattedMessage {...messages.emailIncorrectPattern} />;
  }
  if (typeof formValues.mobile === 'undefined') {
    errors.mobile = <FormattedMessage {...messages.mobileShouldNotEmpty} />;
  }
  if (!formValues.password) {
    errors.password = <FormattedMessage {...messages.passwordShouldNotEmpty} />;
  }
  return errors;
};

const mapStateToProps = (state, props) => ({
  initialValues: {
    type: true,
  }
})

export default connect(
  mapStateToProps
)(reduxForm({
  form: 'loginForm',
  validate,
  enableReinitialize: true,
})(LoginForm))
