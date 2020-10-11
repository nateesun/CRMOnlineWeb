import React, { useState } from 'react';
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
import styled from 'styled-components';
import SweetAlert from 'sweetalert2-react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MapMarker from 'containers/GoogleMap/MapMarker';
import ButtonLink from 'components/ButtonLink';
import messages from './messages';
import LocationLogo from '../../images/location.png';
import * as selectors from './selectors';
import * as constants from './constants';

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
      <InputLabel htmlFor={input.id}>Prefix</InputLabel>
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
    onEditShipping,
    errorUpdate,
    updateStatus,
    clearData,
    onChangeMapsValue,
  } = props;
  
  const [latitude, setLatitude] = useState(13.752434);
  const [longitude, setLongitude] = useState(100.494122);
  const [loadMap, setLoadMap] = useState(false);

  const onValidated = formValues => {
    onEditShipping(formValues);
  };

  const handleLoadMap = show => {
    setLoadMap(show);
    setLatitude(props.initialValues.map_latitude);
    setLongitude(props.initialValues.map_longitude);
  }

  const handlePlace = (latitude, longitude) => {
    onChangeMapsValue({
      map_latitude: latitude,
      map_longitude: longitude,
    });
    setLatitude(latitude);
    setLongitude(longitude);
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
        <ImgLogo src={LocationLogo} width="100" />
        <Typography variant="h5" className={classes.loginTopic}>
          <FormattedMessage {...messages.headerEditForm} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
          <Grid container spacing={3}>
            <Grid item xs={4} lg={4}>
              <div style={{ width: '100%', paddingTop: '14px' }}>
                <Field
                  id="address_type"
                  name="address_type"
                  component={renderSelectField}
                  label={<FormattedMessage {...messages.addressType} />}
                  required
                >
                  <option value="shipping">Shipping</option>
                </Field>
              </div>
            </Grid>
            <Grid item xs={4} lg={4} />
            <Grid item xs={4} lg={4} />
            <Grid item xs={6} lg={3}>
              <div style={{ width: '100%', paddingTop: '14px' }}>
                <Field
                  id="member_prefix"
                  name="member_prefix"
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
            <Grid item xs={6} lg={3}>
              <Field
                name="member_code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.code} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Field
                name="member_name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.firstName} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Field
                name="member_lastname"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.lastName} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Field
                name="address1"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.address1} />}
                required
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Field
                name="address2"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.address2} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="province"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.province} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="district"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.district} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="sub_district"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.subDistrict} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="postcode"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.postcode} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="map_latitude"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.mapLatitude} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Field
                name="map_longitude"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.mapLongitude} />}
                required
              />
            </Grid>
            <Grid item xs={3} lg={6}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleLoadMap(true)}
              >
                Show Maps
              </Button>
            </Grid>
            <Grid item xs={12}>
              {loadMap && (
                <MapMarker
                  lat={parseFloat(latitude)}
                  lng={parseFloat(longitude)}
                  onExit={handlePlace}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              {loadMap && (
                <div align="center" style={{ marginBottom: '25px' }}>
                  Position: {latitude}, {longitude}
                </div>
              )}
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
              <ButtonLink to={`${constants.publicPath}/profile`}>
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
  initialValues: PropTypes.object,
  errorUpdate: PropTypes.string,
  updateStatus: PropTypes.string,
  clearData: PropTypes.func,
  onEditShipping: PropTypes.func,
  onChangeMapsValue: PropTypes.func,
};

const validate = formValues => {
  const errors = {};

  if (!formValues.member_prefix) {
    errors.member_prefix = (
      <FormattedMessage {...messages.prefixShouldNotEmpty} />
    );
  }

  if (!formValues.member_name) {
    errors.member_name = (
      <FormattedMessage {...messages.firstNameShouldNotEmpty} />
    );
  }
  if (!formValues.member_lastname) {
    errors.member_lastname = (
      <FormattedMessage {...messages.lastNameShouldNotEmpty} />
    );
  }

  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectAddressShippingInit(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'addressForm',
    validate,
    enableReinitialize: true,
  })(EditForm),
);