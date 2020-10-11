import React, { useState } from 'react';
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

  const handleDelete = (product_code) => {
    props.deleteItemCart(product_code);
  }
  const handleAdd = (product_code, qty) => {
    if(qty===0){
      handleDelete(product_code);
    }else{
      props.updateItemCart(product_code, qty);
    }
  }
  const handleRemove = (product_code, qty) => {
    if(qty===0){
      handleDelete(product_code);
    }else{
      props.updateItemCart(product_code, qty);
    }
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        รายการสินค้า
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <List disablePadding>
        {carts_detail && carts_detail.map(product => (
          <ListItem className={classes.listItem} key={product.uuid_index}>
            <ListItemText
              primary={product.product_name}
              secondary={`${product.total_amount} บาท`}
            />
            <IconButton aria-label="delete" onClick={()=>handleDelete(product.product_code)}>
              <RemoveIcon style={{ color: 'red' }} />
            </IconButton>
            <React.Fragment>
              <IconButton aria-label="Remove" onClick={()=>handleAdd(product.product_code, product.qty-1)}>
                <MinusIcon style={{ color: 'red' }} />
              </IconButton>
              {product.qty}
              <IconButton aria-label="Add" onClick={()=>handleRemove(product.product_code, product.qty+1)}>
                <PlusIcon style={{ color: 'green' }} />
              </IconButton>
            </React.Fragment>
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
