import React, { useState, forwardRef } from 'react';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import TopPromotion from './TopPromotion';
import SearchProduct from './SearchProduct';
import DialogDetail from './DialogDetail';
import GroupProduct from './GroupProduct';
import OrderFooter from './OrderFooter';
import ProductList from './ProductList';
import GridCategory from './GridCategory';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Media = (props) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  const handleClickOpen = (item) => {
    setOpen(true);
    setItem(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* <TopPromotion type="fade" /> */}
      {/* <GridCategory /> */}
      {/* <GroupProduct /> */}
      <SearchProduct {...props} />
      <ProductList 
        {...props}
        handleClickOpen={item => handleClickOpen(item)}
        data={props.productList}
        topic="Product all items 2020"
      />
      {props.cart && props.cart.cart_no !== '' && <OrderFooter {...props} />}
      {item && <DialogDetail
        {...props}
        open={open}
        item={item}
        handleClose={() => handleClose()}
        Transition={Transition}
      />}
    </div>
  );
}

export default function ShoppingContent(props) {
  return (
    <Box overflow="hidden">
      <Media {...props} />
    </Box>
  );
}
