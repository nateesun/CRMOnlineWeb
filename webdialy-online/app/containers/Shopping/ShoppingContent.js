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

  const handleClickOpen = () => {
    setOpen(true);
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
        handleClickOpen={() => handleClickOpen()}
        data={props.productList}
        topic="Product all items 2020"
      />
      <OrderFooter {...props} />
      <DialogDetail
        {...props}
        open={open}
        handleClose={() => handleClose()}
        Transition={Transition}
      />
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
