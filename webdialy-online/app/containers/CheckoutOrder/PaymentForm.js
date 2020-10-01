import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import QrCodeReader from "qrcode-reader";
import { makeStyles } from '@material-ui/core/styles';
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
  const { handleSubmit, pristine, reset, submitting } = props;
  const [img_host, setImgHost] = useState('http://localhost:5000/images')
  const [file, setFile] = useState(null);
  const [showImg, setShowImg] = useState(false);

  const onValidated = formValues => {
    props.setPaymentData(formValues);
  };

  const onChangeHandler = event => {
    setShowImg(false);
    setFile(event.target.files[0]);
  };

  const onUploadImageFile = () => {
    props.onUploadImage(file);
    setShowImg(true);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ข้อมูลการรับชำระ
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <form className={classes.form} onSubmit={handleSubmit(onValidated)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Field
              name="account_from_name"
              component={RenderField}
              type="text"
              margin="normal"
              label="ชื่อบัญชีต้นทาง"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="account_to_name"
              component={RenderField}
              type="text"
              margin="normal"
              label="ชื่อบัญชีปลายทาง"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="from_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label="เลขที่บัญชีต้นทาง (4 ตัวท้าย)"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="to_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label="เลขที่บัญชีปลายทาง (4 ตัวท้าย)"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_date"
              component={RenderField}
              type="text"
              margin="normal"
              label="วันที่ เวลาที่โอน dd/MM/yyyy HH:mm"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_ref"
              component={RenderField}
              type="text"
              margin="normal"
              label="เลขที่รายการ/อ้างอิง"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_amount"
              component={RenderField}
              type="number"
              margin="normal"
              label="จำนวนเงิน (บาท)"
              required
            />
          </Grid>
          <Grid item xs={12}>
            อัพโหลดไฟล์ Slip <input type="file" name="file" onChange={onChangeHandler} />
            <button onClick={() => onUploadImageFile()}>Upload Slip</button>
          </Grid>
          <Grid item xs={12}>
            {showImg && <div align="center">
              <img src={`${img_host}/${file.name}`} width={150} alt="" /><br /><br />
               รูปสลิปที่โอนเงิน<br />
            </div>}
          </Grid>
          <Grid item xs={4} lg={3}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={pristine || submitting} style={{marginBottom: '20px'}}
            >
              บันทึกข้อมูล
            </Button>
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
  return errors;
};

export default reduxForm({
    form: 'paymentForm',
    validate,
  })(PaymentForm);
