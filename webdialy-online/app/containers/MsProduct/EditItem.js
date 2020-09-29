import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { makeStyles } from '@material-ui/core/styles';
import RenderField from 'components/RenderField';
import messages from './messages';
import { makeSelectForm } from './selectors';

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

const EditItem = props => {
  const classes = useStyles();
  const { handleSubmit, pristine, reset, submitting, response } = props;

  const onValidated = formValues => {
    updateData(formValues);
  };

  const updateData = data => {
    props.onUpdateItem(data);
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
            <Grid item xs={3}>
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
            <Grid item xs={5}>
              <Field
                name="name"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col2} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="unit_code_sale"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col3} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="product_group_code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col4} />}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="point"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col6} />}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="stock_code"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col7} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="price_e"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col8} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="price_t"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col9} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="price_d"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col10} />}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="max_stock"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col11} />}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Field
                name="min_stock"
                component={RenderField}
                type="number"
                margin="normal"
                label={<FormattedMessage {...messages.col12} />}
                required
              />
            </Grid>
            <Grid item xs={2}>
              <Field
                name="unit_code_stock"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col13} />}
                required
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                name="img_path"
                component={RenderField}
                type="text"
                margin="normal"
                label={<FormattedMessage {...messages.col5} />}
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
  if (!formValues.code) {
    errors.code = <FormattedMessage {...messages.col1ShouldNotEmpty} />;
  }
  if (!formValues.name) {
    errors.name = <FormattedMessage {...messages.col2ShouldNotEmpty} />;
  }
  if (!formValues.unit_code_sale) {
    errors.unit_code_sale = <FormattedMessage {...messages.col3ShouldNotEmpty} />;
  }
  if (!formValues.product_group_code) {
    errors.product_group_code = <FormattedMessage {...messages.col4ShouldNotEmpty} />;
  }
  if (!formValues.point || formValues.point < 0) {
    errors.point = <FormattedMessage {...messages.col5ShouldNotEmpty} />;
  }
  if (!formValues.stock_code) {
    errors.stock_code = <FormattedMessage {...messages.col6ShouldNotEmpty} />;
  }
  if (!formValues.price_e || formValues.price_e < 0) {
    errors.price_e = <FormattedMessage {...messages.col7ShouldNotEmpty} />;
  }
  if (!formValues.price_t || formValues.price_t < 0) {
    errors.price_t = <FormattedMessage {...messages.col8ShouldNotEmpty} />;
  }
  if (!formValues.price_d || formValues.price_d < 0) {
    errors.price_d = <FormattedMessage {...messages.col9ShouldNotEmpty} />;
  }
  if (!formValues.max_stock || formValues.max_stock < 0) {
    errors.max_stock = <FormattedMessage {...messages.col10ShouldNotEmpty} />;
  }
  if (!formValues.min_stock || formValues.min_stock < 0) {
    errors.min_stock = <FormattedMessage {...messages.col11ShouldNotEmpty} />;
  }
  if (!formValues.unit_code_stock) {
    errors.unit_code_stock = <FormattedMessage {...messages.col12ShouldNotEmpty} />;
  }
  if (!formValues.img_path) {
    errors.img_path = <FormattedMessage {...messages.col13ShouldNotEmpty} />;
  }
  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: makeSelectForm(),
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'editItem',
    validate,
    enableReinitialize: true,
  })(EditItem),
);
