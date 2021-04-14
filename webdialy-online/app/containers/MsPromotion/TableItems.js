import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import moment from 'moment';

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
  },
  colRow: {
    whiteSpace: 'nowrap',
  },
  dataWidth: {
    overflow: 'auto',
  },
});

export default function TableItems(props) {
  const { getList } = props;
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

  const onEditItem = item => {
    props.onChangePage('EDIT');
    props.onLoadEdit(item);
  };

  TableItems.propTypes = {
    getList: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onLoadEdit: PropTypes.func,
    onChangePage: PropTypes.func,
    onInitLoad: PropTypes.func,
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper} className={classes.container}>
        <Typography color="textSecondary" variant="h6">
          Promotion Redeem Point
        </Typography>
        <div className={classes.wrapButtonAction}>
          <Button
            variant="contained"
            className={classes.buttonNew}
            onClick={() => props.onChangePage('NEW')}
          >
            CREATE
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttonRefresh}
            onClick={() => props.onInitLoad()}
          >
            REFRESH
          </Button>
        </div>
        <div className={classes.dataWidth}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow className={classes.colRow}>
                <TableCell align="center">No</TableCell>
                <TableCell align="center">Product Code</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="right">Point Redeem</TableCell>
                <TableCell align="center">Start Time</TableCell>
                <TableCell align="center">Finish Time</TableCell>
                <TableCell align="right">Qty Stock</TableCell>
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
                      <TableCell align="center">{item.product_code}</TableCell>
                      <TableCell align="left">{item.redeem_name}</TableCell>
                      <TableCell align="right">
                        {item.point_to_redeem}
                      </TableCell>
                      <TableCell align="center">
                        {moment(item.start_time).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell align="center">
                        {moment(item.finish_time).format('DD/MM/YYYY')}
                      </TableCell>
                      <TableCell align="right">{item.qty_in_stock}</TableCell>
                      <TableCell align="center">
                        <Button
                          variant="outlined"
                          onClick={() => onEditItem(item)}
                          style={{ margin: '5px' }}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(item.uuid_index)}
                          style={{ margin: '5px' }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              {getList.length === 0 && (
                <TableRow>
                  <TableCell align="left" colSpan={8}>
                    ไม่พบข้อมูลโปรโมชั่น
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
    </React.Fragment>
  );
}
