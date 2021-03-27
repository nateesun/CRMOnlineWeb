import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import SearchBar from 'components/SearchBar';

const ALink = styled.a`
  text-decoration: none;
`;

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    padding: '10px',
  },
  table: {
    minWidth: 690,
    padding: '5px',
  },
  buttonNew: {
    marginRight: '5px',
  },
  buttonRefresh: {
    marginRight: '5px',
  },
  wrapButtonAction: {
    marginTop: '15px',
    marginBottom: '15px',
  },
  colRow: {
    whiteSpace: 'nowrap',
  },
  dataWidth: {
    overflow: 'auto',
  },
});

export default function TableItems(props) {
  const { getList, showCommand = true } = props;
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Confirm to delete this member!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        props.onDeleteItem(id);
        props.onInitLoad();
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
      }
    });
  };

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onViewItem = item => {
    props.onChangePage('VIEW');
    props.onLoadView(item);
  };

  const loadViewOrder = item => {
    props.onLoadViewOrder(item);
  };

  const onEditItem = item => {
    props.onChangePage('EDIT');
    props.onLoadEdit(item);
  };

  TableItems.propTypes = {
    getList: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onLoadView: PropTypes.func,
    onLoadViewOrder: PropTypes.func,
    onChangePage: PropTypes.func,
    onLoadEdit: PropTypes.func,
    onInitLoad: PropTypes.func,
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Typography color="textSecondary" variant="h6">
          CheckCarts Table List
        </Typography>
        <div className={classes.wrapButtonAction}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonRefresh}
            onClick={() => props.onInitLoad()}
          >
            REFRESH
          </Button>
        </div>
        <SearchBar {...props} items={[
          { key: 'cart_no', value: 'Cart No' },
          { key: 'member_code', value: 'Member Code' },
          { key: 'cart_active', value: 'Status' },
          ]} />
        <div className={classes.dataWidth}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow className={classes.colRow}>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Cart No</TableCell>
                <TableCell align="center">Create Date</TableCell>
                <TableCell align="center">Member</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Point</TableCell>
                <TableCell align="center">Step</TableCell>
                <TableCell align="center">Active</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getList &&
                getList
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
                      <TableCell align="center">{item.cart_no}</TableCell>
                      <TableCell align="center">
                        {item.cart_create_date}
                      </TableCell>
                      <TableCell align="center">{item.member_code}</TableCell>
                      <TableCell align="center">{item.total_item}</TableCell>
                      <TableCell align="center">{item.total_amount}</TableCell>
                      <TableCell align="center">{item.total_point}</TableCell>
                      <TableCell align="center">{item.shopping_step}</TableCell>
                      <TableCell align="center">{item.cart_active}</TableCell>
                      <TableCell align="center">
                        <Grid container spacing={1} justify="center">
                          <Grid item>
                            <Button
                              variant="outlined"
                              onClick={() => onViewItem(item)}
                            >
                              Detail
                            </Button>
                          </Grid>
                          {item.shopping_step === 'approve' && <Grid item>
                            <Button variant="outlined" onClick={()=>loadViewOrder(item)}>
                                View Signature
                              </Button>
                          </Grid>}
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
                  {getList.length === 0 && (
                    <TableRow>
                      <TableCell align="left" colSpan={10}>
                        ไม่พบข้อมูลสินค้าที่สั่งซื้อ
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={getList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
