import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
  table: {
    minWidth: 1024,
  },
  colRow: {
    whiteSpace: 'nowrap',
  },
  container: {
    padding: '10px',
    marginBottom: '10px',
  },
}));

function createData(
  no,
  code,
  name,
  unit_code_sale,
  product_group_code,
  img_path,
  point,
  stock_code,
  price_e,
  price_t,
  price_d,
  max_stock,
  min_stock,
  unit_code_stock,
  qty_over_stock,
) {
  return {
    no,
    code,
    name,
    unit_code_sale,
    product_group_code,
    img_path,
    point,
    stock_code,
    price_e,
    price_t,
    price_d,
    max_stock,
    min_stock,
    unit_code_stock,
    qty_over_stock,
  };
}

const rows = [
  createData(
    1,
    'P001',
    'Product 001',
    'ชิ้น',
    'G01',
    '/images/p001.jpg',
    10,
    'S01',
    10,
    10,
    10,
    100,
    1,
    'แพ็ค',
    'N',
  ),
  createData(
    2,
    'P002',
    'Product 002',
    'ชิ้น',
    'G01',
    '/images/p002.jpg',
    10,
    'S01',
    10,
    10,
    10,
    100,
    1,
    'แพ็ค',
    'N',
  ),
  createData(
    3,
    'P003',
    'Product 003',
    'ชิ้น',
    'G01',
    '/images/p003.jpg',
    10,
    'S01',
    10,
    10,
    10,
    100,
    1,
    'แพ็ค',
    'N',
  ),
  createData(
    4,
    'P004',
    'Product 004',
    'ชิ้น',
    'G01',
    '/images/p004.jpg',
    10,
    'S01',
    10,
    10,
    10,
    100,
    1,
    'แพ็ค',
    'N',
  ),
  createData(
    5,
    'P005',
    'Product 005',
    'ชิ้น',
    'G01',
    '/images/p005.jpg',
    10,
    'S01',
    10,
    10,
    10,
    100,
    1,
    'แพ็ค',
    'N',
  ),
];

export default function LoadProduct(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="lg">
      <TableContainer component={Paper} className={classes.container}>
        <Typography color="textSecondary" variant="h6">
          Load product page
        </Typography>
        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button 
              variant="contained" 
              color="default" 
              startIcon={<CloudUploadIcon />}
              component="span">
              Upload
            </Button>
          </label>
        </div>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left" className={classes.colRow}>
                code
              </TableCell>
              <TableCell align="left" className={classes.colRow}>
                name
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                unit
              </TableCell>
              <TableCell align="center" className={classes.colRow}>
                group
              </TableCell>
              <TableCell align="left" className={classes.colRow}>
                image path
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                point
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                stock_code
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                price_e
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                price_t
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                price_d
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                max_stock
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                min_stock
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                unit_code_stock
              </TableCell>
              <TableCell align="right" className={classes.colRow}>
                qty_over_stock
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.no}>
                <TableCell component="th" scope="row">
                  {row.no}
                </TableCell>
                <TableCell align="left" className={classes.colRow}>
                  {row.code}
                </TableCell>
                <TableCell align="left" className={classes.colRow}>
                  {row.name}
                </TableCell>
                <TableCell align="left" className={classes.colRow}>
                  {row.unit_code_sale}
                </TableCell>
                <TableCell align="center">{row.product_group_code}</TableCell>
                <TableCell align="left" className={classes.colRow}>
                  {row.img_path}
                </TableCell>
                <TableCell align="right">{row.point}</TableCell>
                <TableCell align="right">{row.stock_code}</TableCell>
                <TableCell align="right">{row.price_e}</TableCell>
                <TableCell align="right">{row.price_t}</TableCell>
                <TableCell align="right">{row.price_d}</TableCell>
                <TableCell align="right">{row.max_stock}</TableCell>
                <TableCell align="right">{row.min_stock}</TableCell>
                <TableCell align="right">{row.unit_code_stock}</TableCell>
                <TableCell align="right">{row.qty_over_stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container spacing={1}>
        <Grid item xs={4} lg={3}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            <FormattedMessage {...messages.btnSave} />
          </Button>
        </Grid>
        <Grid item xs={4} lg={3}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => props.onChangePage('LIST')}
          >
            <FormattedMessage {...messages.btnBack} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
