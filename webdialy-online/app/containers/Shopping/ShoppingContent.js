import React, { useState, forwardRef } from 'react';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import sampleImg from '../../images/example/food1.jpg';
import beef1Img from '../../images/example/beef1.jpg';
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

const data = [];
for (let i = 0; i < 40; i += 1) {
  const imgShow = i % 2 === 0 ? beef1Img : sampleImg;
  data.push({
    id: i + 1,
    src: imgShow,
    title: `โบโลน่าธรรมดา ${i + 1}`,
    price: i + 20,
    point: 10,
    inStock: '9/10'
  });
}

function Media() {
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
      <SearchProduct />
      <ProductList
        handleClickOpen={() => handleClickOpen()}
        data={data}
        topic="Product all items 2020"
      />
      <OrderFooter />
      <DialogDetail
        open={open}
        handleClose={() => handleClose()}
        Transition={Transition}
      />
    </div>
  );
}

export default function ShoppingContent() {
  return (
    <Box overflow="hidden">
      <Media />
    </Box>
  );
}
