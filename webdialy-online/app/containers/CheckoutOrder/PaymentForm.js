import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import SweetAlert from 'sweetalert2-react';
import RenderField from 'components/RenderField';
import messages from './messages';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
}));

const PaymentForm = (props) => {
  const classes = useStyles();
  const { carts, carts_detail } = props.cartList;
  const { handleSubmit, pristine, reset, submitting } = props;
  const [file, setFile] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const onValidated = formValues => {
    props.setPaymentData(formValues);
  };

  const validateSlipUpload = () => {
    if(file){
      props.checkSlipImage(file.name)
      props.onUpdateSlipPath(file.name);
    }else{
      <SweetAlert
        show={true}
        title="Notfound Image File"
        type="warning"
        text="Please upload slip image file"
      />
    }
  }

  const onChangeHandler = event => {
    setShowImg(false);
    setFile(event.target.files[0]);
  };

  const onUploadImageFile = () => {
    props.onUploadImage(file);
    setShowImg(true);
  };

  const loc = window.location.href.split('/');
  const apiServiceHost = `${loc[0]}//${loc[2]}`.replace('3000',  '5000');

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ยอดรับชำระ (จำนวน {carts && carts[0] && carts[0].total_amount} บาท)
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Field
              name="account_from_name"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.accountFromName} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="account_to_name"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.accountToName} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="from_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.fromAccountNo} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="to_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.toAccountNo} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_date"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.transferDate} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_ref"
              component={RenderField}
              type="text"
              margin="normal"
              label={<FormattedMessage {...messages.transferFef} />}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_amount"
              component={RenderField}
              type="number"
              margin="normal"
              label={<FormattedMessage {...messages.transferAmount} />}
              required
            />
          </Grid>
          <Grid item xs={12}>
            อัพโหลดไฟล์ Slip (1) <input type="file" name="file" onChange={onChangeHandler} />
          </Grid>
          <Grid item xs={12}>
            <button onClick={() => onUploadImageFile()} style={{marginRight: '10px'}}>Upload Slip (2)</button>
            <button onClick={() => validateSlipUpload()} style={{background: 'chocolate'}}>Validate Slip (3)</button>
          </Grid>
          <Grid item xs={12}>
            {showImg && <div align="center">
              <img src={`${apiServiceHost}/images/${file.name}`} width={150} alt="" /><br /><br />
               รูปสลิปที่โอนเงิน<br />
            </div>}
          </Grid>
          <Grid item xs={6} lg={6}>
            {props.imgValid==='Success' && <Alert severity="success">ตรวจพบข้อมูล qrcode สำหรับรายการโอนเงิน</Alert>}
            {props.imgValid==='Warning' && <Alert severity="error">ข้อมูลใน QR Code ไม่ถูกต้องตาม Format</Alert>}
            {props.imgValid==='Error' && <Alert severity="error">ไฟล์ที่อัพโหลดไม่พบข้อมูล qrcode ในการโอนเงิน</Alert>}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

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
  // if (formValues.transfer_amount !== carts[0].total_amount) {
  //   errors.transfer_amount = <FormattedMessage {...messages.transferAmtShouldEqualAmount} />;
  // }
  return errors;
};

export default reduxForm({
    form: 'paymentForm',
    validate,
  })(PaymentForm);
