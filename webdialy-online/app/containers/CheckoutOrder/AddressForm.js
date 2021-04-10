import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { Button } from '@material-ui/core';
import MapMarker from 'containers/GoogleMap/MapMarker';
import RenderField from 'components/RenderField';
import * as selectors from './selectors';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const AddressForm = props => {
  const classes = useStyles();
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    dispatch,
    initialValues,
    response,
  } = props;
  const {
    map_latitude: mapLatitude,
    map_longitude: mapLongitude,
  } = initialValues;

  useEffect(() => {
    props.initLoadMemberShipping();
  }, []);

  const onValidated = formValues => {
    props.onUpdateAddressForm({
      ...formValues,
      address_type: 'Shipping',
      member_prefix: '',
    });
  };

  const handlePlace = (latitude, longitude) => {
    dispatch(change('addressForm', 'map_latitude', latitude));
    dispatch(change('addressForm', 'map_longitude', longitude));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ที่อยู่ลูกค้า สำหรับจัดส่งสินค้า
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Field
              name="member_name"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.memberName} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Field
              name="member_lastname"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.memberLastname} />}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="address1"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.address1} />}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              name="address2"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.address2} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="sub_district"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.subDistrict} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="district"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.district} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="province"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.province} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="postcode"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.postcode} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="map_latitude"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.latitude} />}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              name="map_longitude"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.longitude} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label={<FormattedMessage {...messages.useForShpping} />}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={pristine || submitting}
              style={{ marginRight: '10px' }}
            >
              <FormattedMessage {...messages.btnFormUpdateButton} />
            </Button>
            <Button
              variant="contained"
              disabled={pristine || submitting}
              onClick={reset}
            >
              <FormattedMessage {...messages.btnFormResetButton} />
            </Button>
          </Grid>
          {response && response.status === 'Success_Update_Address' && (
            <Grid item>
              <span style={{ color: 'green' }}>{response.message}</span>
            </Grid>
          )}
          <Grid item xs={12}>
            <div align="center" style={{ marginBottom: '25px' }}>
              <MapMarker
                lat={parseFloat(mapLatitude)}
                lng={parseFloat(mapLongitude)}
                onExit={handlePlace}
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};

AddressForm.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  dispatch: PropTypes.any,
  initialValues: PropTypes.object,
  response: PropTypes.any,
  initLoadMemberShipping: PropTypes.func,
  onUpdateAddressForm: PropTypes.func,
};

const validate = formValues => {
  const errors = {};
  if (!formValues.member_name) {
    errors.member_name = <FormattedMessage {...messages.nameShouldNotEmpty} />;
  }
  if (!formValues.member_lastname) {
    errors.member_lastname = (
      <FormattedMessage {...messages.lastNameShouldNotEmpty} />
    );
  }
  if (!formValues.address1) {
    errors.address1 = <FormattedMessage {...messages.address1ShouldNotEmpty} />;
  }
  if (!formValues.sub_district) {
    errors.sub_district = (
      <FormattedMessage {...messages.subDistrictShouldNotEmpty} />
    );
  }
  if (!formValues.district) {
    errors.district = <FormattedMessage {...messages.districtShouldNotEmpty} />;
  }
  if (!formValues.province) {
    errors.province = <FormattedMessage {...messages.provinceShouldNotEmpty} />;
  }
  if (!formValues.postcode) {
    errors.postcode = <FormattedMessage {...messages.postcodeShouldNotEmpty} />;
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectMemberShipping(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'addressForm',
    validate,
    enableReinitialize: true,
  })(AddressForm),
);
