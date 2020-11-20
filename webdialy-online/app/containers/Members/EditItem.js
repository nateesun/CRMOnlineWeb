import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import RenderField from 'components/RenderField';
import messages from './messages';
import * as selectors from './selectors';

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
      <InputLabel htmlFor={input.id}>{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        native
        {...input}
        {...custom}
        inputProps={{
          name: 'age',
          id: input.id,
        }}
        label={label}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
};

const EditItem = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, response, rolesList } = props;

  const onValidated = formValues => {
    props.onUpdateItem(formValues);
  };

  const clearData = () => {
    props.onInitLoad();
    props.onChangePage('LIST');
  };

  return (
    <Container component="main" maxWidth="lg">
      <SweetAlert
        show={response.status === 'Success'}
        title="Success"
        type="success"
        text={response.message}
        onConfirm={clearData}
      />
      <SweetAlert
        show={response.status === 'Error'}
        title="Error"
        type="error"
        text={response.message}
      />
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.updateItemHeader}>
          <FormattedMessage {...messages.headerEditItem} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Field
                name="code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col1} />}
                required
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <div style={{ width: '100%', paddingTop: '14px' }}>
                <Field
                  id="member_role"
                  name="member_role"
                  component={renderSelectField}
                  label={<FormattedMessage {...messages.col5} />}
                  required
                >
                  {rolesList && rolesList.map((item, index) => <option key={item.code} value={item.code}>{item.name}</option>)}
                </Field>
              </div>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Field
                name="email"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col2} />}
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="first_name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col3} />}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="last_name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col4} />}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="total_score"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col6} />}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="total_purchase"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col7} />}
                required
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4} lg={3}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={pristine || submitting}
              >
                <FormattedMessage {...messages.btnSave} />
              </Button>
            </Grid>
            <Grid item xs={4} lg={3}>
              <Button
                fullWidth
                variant="contained"
                disabled={pristine || submitting}
                onClick={reset}
              >
                <FormattedMessage {...messages.btnReset} />
              </Button>
            </Grid>
            <Grid item xs={4} lg={3}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => props.onChangePage('LIST')}
              >
                <FormattedMessage {...messages.btnBack} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

EditItem.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  onRegister: PropTypes.func,
  initialValues: PropTypes.object,
  response: PropTypes.object,
  onUpdateItem: PropTypes.func,
  onInitLoad: PropTypes.func,
  onChangePage: PropTypes.func,
};

const validate = formValues => {
  const errors = {};
  if (!formValues.email) {
    errors.email = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  if (!formValues.first_name) {
    errors.first_name = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  if (!formValues.last_name) {
    errors.last_name = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  if (!formValues.member_role) {
    errors.member_role = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectForm(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'editItem',
    validate,
    enableReinitialize: true,
  })(EditItem),
);
