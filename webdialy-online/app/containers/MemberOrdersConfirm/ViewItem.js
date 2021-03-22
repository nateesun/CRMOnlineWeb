import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import ContentNotFound from 'components/ContentNotFound';
import SignatureForm from './SignatureForm';
import messages from './messages';
import * as selectors from './selectors';
import { TextField } from '@material-ui/core';

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
  colRow: {
    whiteSpace: 'nowrap',
  },
  table: {
    background: 'white',
  },
  borderText: {
    border: '1px solid #ddd',
    marginBottom: '5px',
  },
}));

const ViewItem = props => {
  const classes = useStyles();
  const { orders, orders_detail } = props.getOrderList;
  const [mobileNo, setMobileNo] = useState(null);
  const [imgSigUrl, setImgSigUrl] = useState(null);

  useEffect(() => {
    if (orders && orders.signature) {
      setMobileNo(orders.member_mobile);
    }
  }, []);

  const onConfirmRecieveOrder = () => {
    props.onConfirmOrder({
      order_no: orders.order_no,
      member_code_update: orders.member_code,
      member_remark: '',
      signature: imgSigUrl,
      order_status: 'member_approve',
      member_mobile: mobileNo,
    });
  };

  const onShowImageSignature = img_base64 => {
    setImgSigUrl(img_base64);
  };

  if(!orders){
    return <ContentNotFound label={<FormattedMessage {...messages.notfoundOrder} />} />
  }

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.updateItemHeader}>
          <FormattedMessage {...messages.headerViewItem} />
        </Typography>
        <Grid container spacing={2} className={classes.divContent}>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col1} />
          </Grid>
          <Grid item xs={2} className={classes.borderText}>
            {orders.order_no}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col2} />
          </Grid>
          <Grid item xs={2} className={classes.borderText}>
            {orders.member_code}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col3} />
          </Grid>
          <Grid item xs={7} className={classes.borderText}>
            {moment(new Date(orders.cart_create_date)).format(
              'DD/MM/YYYY HH:mm:ss',
            )}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col6} />
          </Grid>
          <Grid item xs={7} className={classes.borderText}>
            {moment(new Date(orders.transfer_date)).format(
              'DD/MM/YYYY HH:mm:ss',
            )}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col4} />
          </Grid>
          <Grid item xs={2} className={classes.borderText}>
            {orders.total_item}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col5} />
          </Grid>
          <Grid item xs={2} className={classes.borderText}>
            {orders.total_amount}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col7} />
          </Grid>
          <Grid item xs={4} className={classes.borderText}>
            {orders.order_status}
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginBottom: '10px' }}>
          <Grid item xs={4}>
            <div className={classes.dataWidth}>
              <Table
                className={classes.table}
                stickyHeader
                aria-label="sticky table"
              >
                <TableHead>
                  <TableRow className={classes.colRow}>
                    <TableCell align="center">No</TableCell>
                    <TableCell align="center">PCode</TableCell>
                    <TableCell align="left">PName</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Unit</TableCell>
                    <TableCell align="right">QTY</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="left">Options</TableCell>
                    <TableCell align="left">S Text</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders_detail &&
                    orders_detail.map((item, index) => (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={item.uuid_index}
                        className={classes.colRow}
                      >
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">
                          {item.product_code}
                        </TableCell>
                        <TableCell align="left">{item.product_name}</TableCell>
                        <TableCell align="right">
                          {item.product_price}
                        </TableCell>
                        <TableCell align="center">
                          {item.product_unit}
                        </TableCell>
                        <TableCell align="right">{item.qty}</TableCell>
                        <TableCell align="right">{item.total_amount}</TableCell>
                        <TableCell align="center">{item.options}</TableCell>
                        <TableCell align="center">
                          {item.special_text}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {!orders.member_mobile && <TextField label="Contact Mobile" value={mobileNo} onChange={e=>setMobileNo(e.target.value)} />}
            {orders.member_mobile && <span>Mobile: {orders.member_mobile}</span>}
          </Grid>
        </Grid>
        {!orders.signature && (
          <Grid container>
            <Grid item xs={6}>
              <SignatureForm
                {...props}
                onExit={data => onShowImageSignature(data)}
              />
            </Grid>
          </Grid>
        )}
        {orders.signature && (
          <Grid container>
            <Grid item xs={6}>
            <h4>Signature:</h4>
              <img src={orders.signature} alt="show signature" />
            </Grid>
          </Grid>
        )}
        {orders.order_status!=='member_approve' && <Grid container spacing={3} style={{marginTop: '10px'}}>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => onConfirmRecieveOrder()}
            >
              <FormattedMessage {...messages.btnSave} />
            </Button>
          </Grid>
        </Grid>}
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
  initialValues: selectors.makeSelectData(),
});

export default connect(mapStateToProps)(ViewItem);
