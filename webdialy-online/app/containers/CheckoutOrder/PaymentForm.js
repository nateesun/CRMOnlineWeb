import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Slip from '../../images/example/slip.jpg';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        ข้อมูลการรับชำระ
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="เลขที่บัญชีผู้โอน"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="เลขที่บัญชีผู้รับโอน"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="วันที่ เวลาที่โอน"
            helperText="ข้อมูลนี้จะถูกตรวจสอบโดยพนักงานอีกครั้ง"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          อัพโหลดไฟล์ Slip <input type="file" />
        </Grid>
        <Grid item xs={12}>
          <div align="center">
            <img src={Slip} width={150} alt="" /><br /><br />
            ตัวอย่าง Slip ที่โอนเงิน<br />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
