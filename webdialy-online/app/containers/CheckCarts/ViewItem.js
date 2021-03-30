import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SweetAlert from 'sweetalert2-react';
import SlipImage from '../../images/example/slip.png';
import messages from './messages';
import { makeSelectForm } from './selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginTopic: {
    marginTop: theme.spacing(1),
  },
  divContent: {
    marginTop: '20px',
    marginBottom: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '10px',
  },
  likeText: {
    border: '1px solid #ddd',
    marginBottom: '2px',
    background: 'white',
    borderRadius: '5px',
  }
}));

const ViewItem = props => {
  const classes = useStyles();
  const [approve, setApprove] = useState('');
  const [reason, setReason] = useState('');
  const { showAlertResponse, onChangePage } = props;
  const {
    cart_no,
    cart_create_date,
    member_code,
    total_item,
    total_amount,
    total_point,
    shopping_step,
    cart_active,
  } = props.initialValues;

  return (
    <Container component="main" maxWidth="lg">
      <SweetAlert
        show={showAlertResponse.status === 'Success'}
        title="Update Status"
        type="success"
        text="Approve Cart Status Success"
        onConfirm={()=>onChangePage('LIST')}
      />
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.updateItemHeader}>
          <FormattedMessage {...messages.headerViewItem} />
        </Typography>
        <Grid container spacing={3} className={classes.divContent}>
          <Grid item xs={2}>
            <FormattedMessage {...messages.col1} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {cart_no}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col2} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {cart_create_date}
          </Grid>
          <Grid item xs={2}>
            <FormattedMessage {...messages.col3} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {member_code}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col4} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {total_item}
          </Grid>
          <Grid item xs={2}>
            <FormattedMessage {...messages.col5} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {total_amount}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col6} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {total_point}
          </Grid>
          <Grid item xs={2}>
            <FormattedMessage {...messages.col7} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {shopping_step}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col8} />
          </Grid>
          <Grid item xs={3} className={classes.likeText}>
            {cart_active}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <img src={SlipImage} width={250} alt="sample slip upload" />
          </Grid>
          {shopping_step && shopping_step !== 'approve' && <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Approve Slip</FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  value="approve"
                  control={<Radio color="primary" onChange={e=>setApprove(e.target.value)} />}
                  label="Approve"
                />
                <FormControlLabel
                  value="not_approve"
                  control={<Radio color="primary" onChange={e=>setApprove(e.target.value)} />}
                  label="Not Approve"
                />
              </RadioGroup>
            </FormControl>
          </Grid>}
          {shopping_step && shopping_step !== 'approve' && <Grid item xs={10}>
            <TextField
              fullWidth
              id="standard-basic"
              label="เหตุผล หรือสาเหตุที่ไม่ผ่านการยืนยันอนุมัติ" disabled={approve!=='not_approve'}
              required
              value={reason}
              onChange={e=>setReason(e.target.value)}
            />
          </Grid>}
          <Grid item xs={3}>
            <Button
              fullWidth
              variant="contained"
              onClick={() => props.onChangePage('LIST')}
            >
              <FormattedMessage {...messages.btnBack} />
            </Button>
          </Grid>
          {shopping_step && shopping_step !== 'approve' && <Grid item xs={5}>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={() => props.onUpdateShoppingStep({ cart_no, cart_create_date, approve, reason })}
            >
              <FormattedMessage {...messages.btnApprove} />
            </Button>
          </Grid>}
        </Grid>
      </div>
    </Container>
  );
};

ViewItem.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  onRegister: PropTypes.func,
  initialValues: PropTypes.object,
  onChangePage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  initialValues: makeSelectForm(),
});

export default connect(mapStateToProps)(ViewItem);
