import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SweetAlert from 'sweetalert2-react';
import * as appConstants from 'containers/App/constants';
import ButtonLink from 'components/ButtonLink';
import Orders from './Orders';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import FinishOrder from './FinishOrder';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginTop: '5px',
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

const steps = ['สินค้า', 'ที่อยู่', 'รับชำระ', 'รีวิว'];

export default function CheckoutContent(props) {
  const classes = useStyles();
  const { activeStep, setActiveStep } = props;

  const handleNext = () => {
    if (activeStep + 1 === 4) {
      // if last step or finish step
      setActiveStep(activeStep + 1);
      props.onUpdateShoppingStep();
    } else {
      if (activeStep + 1 === 2) {
        if (props.shipping) {
          setActiveStep(activeStep + 1);
        } else {
          <SweetAlert
            show
            title="Information !"
            type="warning"
            text="กรุณาระบุข้อมูลที่อยู่ให้ครบถ้วน"
          />;
        }
      } else {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return <Orders {...props} />;
      case 1:
        return <AddressForm {...props} />;
      case 2:
        return <PaymentForm {...props} />;
      case 3:
        return <Review {...props} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            ขั้นตอนการสั่ง
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
              <FinishOrder {...props} />
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
                    {activeStep === steps.length - 1
                      ? 'ดำเนินการเสร็จสิ้น'
                      : 'ถัดไป'}
                  </Button>
                </div>
                <ButtonLink to={`${appConstants.publicPath}/shopping`}>
                  <Button variant="contained">กลับหน้าสั่งสินค้า</Button>
                </ButtonLink>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

CheckoutContent.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func,
  onUpdateShoppingStep: PropTypes.func,
  shipping: PropTypes.any,
};
