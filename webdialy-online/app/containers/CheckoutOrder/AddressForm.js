import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import { createStructuredSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
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

const AddressForm = (props) => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, shipping } = props;
  const [latitude, setLatitude] = useState(13.809992);
  const [longitude, setLongitude] = useState(100.413130);

  const onValidated = formValues => {
    
  };

  const handlePlace = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ที่อยู่ลูกค้า สำหรับจัดส่งสินค้า
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
        <Grid container spacing={3}>
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
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label={<FormattedMessage {...messages.useForShpping} />}
            />
          </Grid>
          <Grid item xs={12}>
              <div align="center" style={{marginBottom: '25px'}}>
                {latitude && longitude && (
                  <MapMarker
                    lat={parseFloat(latitude)}
                    lng={parseFloat(longitude)}
                    onExit={handlePlace}
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <div align="center" style={{marginBottom: '25px'}}>
                Position: {latitude},{longitude}
              </div>
            </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

const validate = formValues => {
  const errors = {};
  if (!formValues.member_name) {
    errors.member_name = <FormattedMessage {...messages.nameShouldNotEmpty} />;
  }
  if (!formValues.member_lastname) {
    errors.member_lastname = <FormattedMessage {...messages.lastNameShouldNotEmpty} />;
  }
  if (!formValues.address1) {
    errors.address1 = <FormattedMessage {...messages.address1ShouldNotEmpty} />;
  }
  if (!formValues.sub_district) {
    errors.sub_district = <FormattedMessage {...messages.subDistrictShouldNotEmpty} />;
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
