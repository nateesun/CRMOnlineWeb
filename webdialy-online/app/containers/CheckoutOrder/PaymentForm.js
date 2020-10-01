import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
              name="from_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label="เลขที่บัญชีผู้โอน"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="to_account_no"
              component={RenderField}
              type="text"
              margin="normal"
              label="เลขที่บัญชีผู้รับโอน"
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Field
              name="transfer_date"
              component={RenderField}
              type="text"
              margin="normal"
              label="วันที่ เวลาที่โอน dd/MM/yyyy HH:mm:ss"
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
               รูปสลิปที่โอนเงิน<br /><br />
            </div>}
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}

const validate = formValues => {
  const errors = {};
  if (!formValues.from_account_no) {
    errors.from_account_no = <FormattedMessage {...messages.fromAccShouldNotEmpty} />;
  }
  if (!formValues.to_account_no) {
    errors.to_account_no = <FormattedMessage {...messages.toAccShouldNotEmpty} />;
  }
  if (!formValues.transfer_date) {
    errors.transfer_date = <FormattedMessage {...messages.transferDateShouldNotEmpty} />;
  }
  return errors;
};

export default reduxForm({
    form: 'paymentForm',
    validate,
  })(PaymentForm);
