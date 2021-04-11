import React, { useState } from 'react';
import dateFormat from 'dateformat';
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
import SearchBar from 'components/SearchBar';

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

  const onViewItem = item => {
    props.onChangePage('VIEW');
    props.onLoadView(item);
  };

  const onEditItem = item => {
    props.onChangePage('EDIT');
    props.onLoadEdit(item);
  };

  TableItems.propTypes = {
    getList: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onLoadView: PropTypes.func,
    onChangePage: PropTypes.func,
    onLoadEdit: PropTypes.func,
    onInitLoad: PropTypes.func,
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Typography color="textSecondary" variant="h6">
          Members Table List
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
        <SearchBar
          {...props}
          items={[
            { key: 'code', value: 'Code' },
            { key: 'email', value: 'Email' },
            { key: 'mobile', value: 'Mobile' },
          ]}
        />
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.colRow}>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Code</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="left">Created Date</TableCell>
              <TableCell align="left">Updated Date</TableCell>
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
                    <TableCell align="center">{item.code}</TableCell>
                    <TableCell align="left">{item.email}</TableCell>
                    <TableCell align="left">{item.first_name}</TableCell>
                    <TableCell align="left">{item.last_name}</TableCell>
                    <TableCell align="center">{item.member_role}</TableCell>
                    <TableCell align="left">
                      {dateFormat(item.system_created, 'dd/mm/yyyy hh:M:s')}
                    </TableCell>
                    <TableCell align="left">
                      {dateFormat(item.system_updated, 'dd/mm/yyyy hh:M:s')}
                    </TableCell>
                    <TableCell align="left" className={classes.colRow}>
                      <Button
                        variant="outlined"
                        onClick={() => onViewItem(item)}
                        style={{ margin: '5px' }}
                      >
                        View
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => onEditItem(item)}
                        style={{ margin: '5px' }}
                      >
                        Edit
                      </Button>
                      {item.member_role !== 'admin' && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleDelete(item.email)}
                          style={{ margin: '5px' }}
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            {getList.length === 0 && (
              <TableRow>
                <TableCell align="left" colSpan={9}>
                  ไม่พบข้อมูลสมาชิก
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
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
