import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  separateLine: {
    border: '1px solid #eee',
  },
  buttonRight: {
    marginRight: '10px',
  },
  buttonValidate: {
    background: 'chocolate',
  },
}));

const PaymentForm = props => {
  const classes = useStyles();
  const { carts } = props.cartList;
  const { file } = props;

  const validateSlipUpload = () => {
    if (file) {
      props.checkSlipImage(file.name);
      props.onUpdateSlipPath(file.name);
    }
  };

  const onChangeHandler = event => {
    props.setShowImg(false);
    props.setFile(event.target.files[0]);
  };

  const onUploadImageFile = () => {
    props.onUploadImage(file);
    props.setShowImg(true);
  };

  const loc = window.location.href.split('/');
  const apiServiceHost = `${loc[0]}//${loc[2]}`.replace('3000', '5000');

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ยอดรับชำระ: จำนวน {carts && carts[0] && carts[0].total_amount} + ค่าจัดส่ง{' '}
        {carts && carts[0] && carts[0].total_transport_amt} ={' '}
        {carts && carts[0] && carts[0].total_net_amt} บาท
      </Typography>
      <Divider className={classes.separateLine} />
      <Paper elevation={3} style={{ padding: '10px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            อัพโหลดไฟล์ Slip (1) <input type="file" name="file" onChange={onChangeHandler} />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => onUploadImageFile()} className={classes.buttonRight}>
              Upload Slip (2)
            </Button>
            <Button onClick={() => validateSlipUpload()} className={classes.buttonValidate}>
              Validate Slip (3)
            </Button>
          </Grid>
          <Grid item xs={12}>
            {props.showImg && (
              <div align="center">
                <img src={`${apiServiceHost}/images/${file.name}`} width={150} alt="" />
                <br />
                <br />
                รูปสลิปที่โอนเงิน
                <br />
              </div>
            )}
          </Grid>
          <Grid item xs={6} lg={6}>
            {props.imgValid === 'Success' && (
              <Alert severity="success">ตรวจพบข้อมูล qrcode สำหรับรายการโอนเงิน</Alert>
            )}
            {props.imgValid === 'Warning' && (
              <Alert severity="error">ข้อมูลใน QR Code ไม่ถูกต้องตาม Format</Alert>
            )}
            {props.imgValid === 'Error' && (
              <Alert severity="error">ไฟล์ที่อัพโหลดไม่พบข้อมูล qrcode ในการโอนเงิน</Alert>
            )}
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

PaymentForm.propTypes = {
  cartList: PropTypes.object,
  file: PropTypes.any,
  checkSlipImage: PropTypes.func,
  onUpdateSlipPath: PropTypes.func,
  setShowImg: PropTypes.func,
  setFile: PropTypes.func,
  onUploadImage: PropTypes.func,
  showImg: PropTypes.bool,
  imgValid: PropTypes.string,
};

const validate = formValues => {
  const errors = {};
  if (!formValues.account_from_name) {
    errors.account_from_name = <FormattedMessage {...messages.accFromNameShouldNotEmpty} />;
  }
  if (!formValues.account_to_name) {
    errors.account_to_name = <FormattedMessage {...messages.accToNameShouldNotEmpty} />;
  }
  if (!formValues.from_account_no) {
    errors.from_account_no = <FormattedMessage {...messages.fromAccShouldNotEmpty} />;
  }
  if (!formValues.to_account_no) {
    errors.to_account_no = <FormattedMessage {...messages.toAccShouldNotEmpty} />;
  }
  if (!formValues.transfer_date) {
    errors.transfer_date = <FormattedMessage {...messages.transferDateShouldNotEmpty} />;
  }
  if (!formValues.transfer_ref) {
    errors.transfer_ref = <FormattedMessage {...messages.transferRefShouldNotEmpty} />;
  }
  if (!formValues.transfer_amount) {
    errors.transfer_amount = <FormattedMessage {...messages.transferAmtShouldNotEmpty} />;
  }
  if (formValues.transfer_amount < 1) {
    errors.transfer_amount = <FormattedMessage {...messages.transferAmtShouldMoreZero} />;
  }
  return errors;
};

export default reduxForm({
  form: 'paymentForm',
  validate,
})(PaymentForm);
