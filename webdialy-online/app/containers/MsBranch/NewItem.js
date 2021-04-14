import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import SweetAlert from 'sweetalert2-react';
import RenderField from 'components/RenderField';
import MapMarker from 'containers/GoogleMap/MapMarker';
import messages from './messages';
import * as selectors from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
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
  topic: {
    marginTop: theme.spacing(1),
  },
  divLatLng: {
    marginBottom: '25px',
  },
}));

const NewItem = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, response, dispatch } = props;
  const { map_latitude: mapLatitude, map_longitude: mapLongitude } = props.getData;

  const onValidated = formValues => {
    saveData(formValues);
  };

  const clearData = () => {
    props.onInitLoad();
    props.onChangePage('LIST');
  };

  const saveData = data => {
    props.onCreateItem(data);
  };

  const handlePlace = (latitude, longitude) => {
    dispatch(change('newForm', 'map_latitude', latitude));
    dispatch(change('newForm', 'map_longitude', longitude));
  };

  useEffect(() => {
    dispatch(change('newForm', 'map_latitude', mapLatitude));
    dispatch(change('newForm', 'map_longitude', mapLongitude));
  }, []);

  NewItem.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool,
    onRegister: PropTypes.func,
    response: PropTypes.object,
    onUpdateItem: PropTypes.func,
    onInitLoad: PropTypes.func,
    onChangePage: PropTypes.func,
    onCreateItem: PropTypes.func,
    getData: PropTypes.object,
    dispatch: PropTypes.any,
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
        <Typography variant="h5" className={classes.topic}>
          <FormattedMessage {...messages.newItemHeader} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Field
                name="code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col1} />}
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col2} />}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="map_latitude"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col3} />}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                name="map_longitude"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col4} />}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <div align="center" className={classes.divLatLng}>
                <MapMarker
                  lat={parseFloat(mapLatitude)}
                  lng={parseFloat(mapLongitude)}
                  onExit={handlePlace}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
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
              <Button fullWidth variant="contained" onClick={() => props.onChangePage('LIST')}>
                <FormattedMessage {...messages.btnBack} />
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.code) {
    errors.code = <FormattedMessage {...messages.col1ShouldNotEmpty} />;
  }
  if (!formValues.name) {
    errors.name = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  if (!formValues.map_latitude) {
    errors.map_latitude = <FormattedMessage {...messages.col3ShouldNotEmpty} />;
  }
  if (!formValues.map_longitude) {
    errors.map_longitude = <FormattedMessage {...messages.col4ShouldNotEmpty} />;
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectForm(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'newForm',
    validate,
    enableReinitialize: true,
  })(NewItem),
);
