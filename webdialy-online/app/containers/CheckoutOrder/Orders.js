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

export default function Orders(props) {
  const classes = useStyles();
  const { carts, carts_detail } = props.cartList;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        รายการสินค้า
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <List disablePadding>
        {carts_detail && carts_detail.map(product => (
          <ListItem className={classes.listItem} key={product.product_code}>
            <ListItemText
              primary={product.product_name}
              secondary={`${product.total_amount} บาท`}
            />
            <IconButton aria-label="delete">
              <RemoveIcon style={{ color: 'red' }} />
            </IconButton>
            <div>
              <IconButton aria-label="delete">
                <MinusIcon style={{ color: 'red' }} />
              </IconButton>
              {product.qty}
              <IconButton aria-label="delete">
                <PlusIcon style={{ color: 'green' }} />
              </IconButton>
            </div>
          </ListItem>
        ))}
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem className={classes.listItem}>
          <ListItemText primary="ยอดรวม" />
          <Typography variant="subtitle1" className={classes.total}>
            {carts && carts[0].total_amount}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
