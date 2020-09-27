import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ButtonLink from 'components/ButtonLink';
import Orders from './Orders';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Thanks from './images/thanks.jpg';
const QRCode = require("qrcode.react")

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['สินค้าที่สั่ง', 'ที่อยู่จัดส่ง', 'ข้อมูลชำระ', 'รีวิว'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Orders />;
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ขั้นตอนการสั่งซื้อสินค้า
          </Typography>
          <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <div align="center">
                  <Typography variant="h5" gutterBottom>
                    ขอบคุณสำหรับคำสั่งซื้อสินค้า
                  </Typography>
                  <img src={Thanks} width="270" height="150" alt="thank for your support" style={{borderRadius: '15px'}} />
                  <Typography variant="subtitle1" style={{border: '1px solid #eee', padding: '25px', marginTop: '10px'}}>
                    เลขที่ Order ของคุณคือ <span style={{background: 'yellow', color: 'black'}}>#OD000001</span> <br />
                    <QRCode value={`http://localhost:3000/orders/OD000001`} /><br />
                    ทางเราจะตรวจสอบสลิปการโอนเงินของท่าน <br />
                    และแจ้งผลการตรวจสอบภายใน 1-2 วันทำการ<br />
                    ขอขอบคุณค่ะ
                  </Typography>
                  <Divider
                    style={{
                      border: '1px solid #eee',
                      marginBottom: '10px',
                      marginTop: '10px',
                    }}
                  />
                  <ButtonLink to="/shopping">
                    <Button color="primary" variant="contained">
                      กลับหน้าสั่งสินค้า
                    </Button>
                  </ButtonLink>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Divider style={{ border: '1px solid #eee' }} />
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      ย้อนกลับ
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'ดำเนินการเสร็จสิ้น' : 'ถัดไป'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
