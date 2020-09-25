import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Select from '@material-ui/core/Select';
import RenderField from 'components/RenderField';
import DateInput from 'components/RenderField/DateInput';
import styled from 'styled-components';
import SweetAlert from 'sweetalert2-react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import ButtonLink from 'components/ButtonLink';
import messages from './messages';
import EditProfileLogo from '../../images/edit_profile.png';
import * as selectors from './selectors';

const ImgLogo = styled.img`
  border: 0px solid #bbbbbb;
  border-radius: 5px 5px 5px 5px;
`;

const renderFromHelper = ({ touched, error }) => {
  renderFromHelper.propTypes = {
    touched: PropTypes.any,
    error: PropTypes.any,
  };
  if (!(touched && error)) {
    return <span />;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => {
  renderSelectField.propTypes = {
    input: PropTypes.any,
    label: PropTypes.any,
    meta: PropTypes.any,
    children: PropTypes.any,
  };
  return (
    <FormControl
      variant="outlined"
      error={touched && error}
      style={{ width: '100%' }}
    >
      <InputLabel htmlFor="age-native-simple">Prefix</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
        label={label}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

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
  loginTopic: {
    marginTop: theme.spacing(1),
  },
}));

const EditForm = props => {
  const classes = useStyles();
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    onEditMember,
    errorUpdate,
    updateStatus,
    clearData,
  } = props;

  const onValidated = formValues => {
    onEditMember(formValues);
  };

  return (
    <Container component="main" maxWidth="lg">
      <SweetAlert
        show={errorUpdate}
        title="Update data error"
        type="error"
        text={errorUpdate}
      />
      <SweetAlert
        show={updateStatus === 'Success'}
        title="Update data success"
        type="success"
        text="Back to profile detail"
        onConfirm={clearData}
      />
      <div className={classes.paper}>
        <ImgLogo src={EditProfileLogo} width="100" />
        <Typography variant="h5" className={classes.loginTopic}>
          <FormattedMessage {...messages.headerEditForm} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <div style={{ width: '100%', paddingTop: '14px' }}>
                <Field
                  name="prefix"
                  component={renderSelectField}
                  label={<FormattedMessage {...messages.prefix} />}
                  required
                >
                  <option value="" />
                  <option value="คุณ">คุณ</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </Field>
              </div>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="first_name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.firstName} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="last_name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.lastName} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="birthday"
                component={DateInput}
                type="date"
                margin="normal"
                label={<FormattedMessage {...messages.dateOfBirth} />}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="mobile"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.mobile} />}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Field
                name="code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.code} />}
                disabled
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                name="email"
                component={RenderField}
                type="email"
                margin="normal"
                label={<FormattedMessage {...messages.email} />}
                disabled
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <span style={{ color: 'green' }}>
                * กรุณาใส่ LINE ID เพื่อรับสิทธิพิเศษ และ
                โปรโมชั่นพิเศษเฉพาะสำหรับสมาชิกผ่านทาง ERIC KAYSER LINE OFFICIAL
                เท่านั้น
              </span>
              <Field
                name="line_id"
                component={RenderField}
                type="text"
                label={<FormattedMessage {...messages.lineId} />}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={2} md={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={pristine || submitting}
              >
                <FormattedMessage {...messages.btnSaveProfile} />
              </Button>
            </Grid>
            <Grid item xs={2} md={3}>
              <Button
                fullWidth
                variant="contained"
                disabled={pristine || submitting}
                onClick={reset}
              >
                <FormattedMessage {...messages.btnResetForm} />
              </Button>
            </Grid>
            <Grid item xs={2} md={3}>
              <ButtonLink to="/profile">
                <Button fullWidth variant="contained" onClick={reset}>
                  <FormattedMessage {...messages.btnBack} />
                </Button>
              </ButtonLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

EditForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  onRegister: PropTypes.func,
  initialValues: PropTypes.object,
  errorUpdate: PropTypes.string,
  updateStatus: PropTypes.string,
  clearData: PropTypes.func,
  onEditMember: PropTypes.func,
};

const validate = formValues => {
  const errors = {};

  if (!formValues.prefix) {
    errors.prefix = <FormattedMessage {...messages.prefixShouldNotEmpty} />;
  }

  if (!formValues.first_name) {
    errors.first_name = (
      <FormattedMessage {...messages.firstNameShouldNotEmpty} />
    );
  }
  if (!formValues.last_name) {
    errors.last_name = (
      <FormattedMessage {...messages.lastNameShouldNotEmpty} />
    );
  }
  if (!formValues.mobile) {
    errors.mobile = <FormattedMessage {...messages.mobileShouldNotEmpty} />;
  }
  if (!formValues.birthday) {
    errors.birthday = (
      <FormattedMessage {...messages.dateOfBirthShouldNotEmpty} />
    );
  }
  if (typeof formValues.email === 'undefined') {
    errors.email = <FormattedMessage {...messages.emailShouldNotEmpty} />;
  } else if (!formValues.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i)) {
    errors.email = <FormattedMessage {...messages.emailIncorrectPattern} />;
  }

  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectProfileInit(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'editForm',
    validate,
    enableReinitialize: true,
  })(EditForm),
);
