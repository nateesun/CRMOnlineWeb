import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import RemoveIcon from '@material-ui/icons/Delete';
import MinusIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import PlusIcon from '@material-ui/icons/AddCircleOutlined';
import IconButton from '@material-ui/core/IconButton';

const products = [
  { name: 'Product 1', desc: 'One thing', price: '9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '3.45' },
  { name: 'Product 3', desc: 'Something else', price: '6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Orders() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order list
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText
              primary={product.name}
              secondary={`${product.price} บาท`}
            />
            <IconButton aria-label="delete">
              <RemoveIcon style={{ color: 'red' }} />
            </IconButton>
            <div>
              <IconButton aria-label="delete">
                <MinusIcon style={{ color: 'red' }} />
              </IconButton>
              1
              <IconButton aria-label="delete">
                <PlusIcon style={{ color: 'green' }} />
              </IconButton>
            </div>
          </ListItem>
        ))}
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            34.06
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
