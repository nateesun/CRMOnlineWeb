import React, { useState } from 'react';
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
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import SignatureForm from './SignatureForm';
import messages from './messages';
import * as selectors from './selectors';

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
  }
}));

const ViewItem = props => {
  const classes = useStyles();
  const { orders, orders_detail } = props.getOrderList;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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
            {moment(new Date(orders.cart_create_date)).format('DD/MM/YYYY HH:mm:ss')}
          </Grid>
          <Grid item xs={3}>
            <FormattedMessage {...messages.col6} />
          </Grid>
          <Grid item xs={7} className={classes.borderText}>
          {moment(new Date(orders.transfer_date)).format('DD/MM/YYYY HH:mm:ss')}
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
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className={classes.dataWidth}>
              <Table className={classes.table} stickyHeader aria-label="sticky table">
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
                    orders_detail
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((item, index) => (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={item.uuid_index}
                          className={classes.colRow}
                        >
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">{item.product_code}</TableCell>
                          <TableCell align="left">{item.product_name}</TableCell>
                          <TableCell align="right">{item.product_price}</TableCell>
                          <TableCell align="center">{item.product_unit}</TableCell>
                          <TableCell align="right">{item.qty}</TableCell>
                          <TableCell align="right">{item.total_amount}</TableCell>
                          <TableCell align="center">{item.options}</TableCell>
                          <TableCell align="center">{item.special_text}</TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <SignatureForm {...props} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
            >
              <FormattedMessage {...messages.btnSave} />
            </Button>
          </Grid>
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
  initialValues: selectors.makeSelectData(),
});

export default connect(mapStateToProps)(ViewItem);
