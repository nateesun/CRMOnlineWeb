import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import RenderField from 'components/RenderField';
import ViewItem from './ViewItem';
import * as selectors from './selectors';
import messages from './messages';

const Login = props => {
    // token=DATABASE,EMAIL,CART_NO 
    // sample=ZDJWaVpHRnBiSGxmTURBeCxzb2Z0cG9zQGdtYWlsLmNvbSxTUDAwMTgz
    const { handleSubmit } = props;
    const [data, email, cart_no] = Buffer.from(props.token, 'base64').toString('utf-8').split(',');
    props.initialValues.email = email;
    const { orders, orders_detail } = props.getOrderList;

    const onValidated = formValues => {
        props.onValidateLogin({ ...formValues, database: data, cart_no: cart_no });
    }

    return (
        <React.Fragment>
            {!orders_detail && <form onSubmit={handleSubmit(onValidated)}>
                <Grid container spacing={3} justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <h3>Confirm Order</h3>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <Field 
                            name="email" 
                            component={RenderField} 
                            type="email" 
                            margin="normal" 
                            label={<FormattedMessage {...messages.email} />} 
                            disabled fullWidth autoFocus
                        />
                    </Grid>
                    <Grid item xs={8}>
                    <Field
                        name="password"
                        component={RenderField}
                        type="password"
                        label={<FormattedMessage {...messages.password} />}
                        margin="normal"
                        required
                        fullWidth
                    />
                    </Grid>
                    <Grid item xs={8}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            {<FormattedMessage {...messages.btnLoadOrder} />}
                        </Button>
                    </Grid>
                </Grid>
            </form>}
            {orders_detail && <ViewItem {...props} />}
        </React.Fragment>
    )
}

const validate = formValues => {
  const errors = {};

  if (!formValues.password) {
    errors.password = <FormattedMessage {...messages.passwordShouldNotEmpty} />;
  }

  return errors;
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectData(),
});

export default connect(mapStateToProps)
    (reduxForm({
        form: 'memberLogin',
        validate,
        enableReinitialize: true,
    })(Login),
);