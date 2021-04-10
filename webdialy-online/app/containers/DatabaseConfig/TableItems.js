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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as appConstants from 'containers/App/constants';

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

  TableItems.propTypes = {
    getList: PropTypes.array,
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Typography color="textSecondary" variant="h6">
          Show all database
        </Typography>
        <div>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow className={classes.colRow}>
                <TableCell align="center">No</TableCell>
                <TableCell align="left">Database</TableCell>
                <TableCell align="left">Path Query</TableCell>
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
                      key={item.database}
                      className={classes.colRow}
                    >
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="left">{item.database}</TableCell>
                      <TableCell align="left">{item.query}</TableCell>
                      <TableCell align="center">
                        <Grid container spacing={1} justify="center">
                          <Grid item>
                            <a
                              target="_blank"
                              href={`${window.location.origin}${
                                appConstants.publicPath
                              }${item.query}`}
                              style={{ textDecoration: 'none' }}
                            >
                              <Button>Link Test</Button>
                            </a>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  ))}
              {getList.length === 0 && (
                <TableRow>
                  <TableCell align="left" colSpan={4}>
                    ไม่พบข้อมูลฐานข้อมูล
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
