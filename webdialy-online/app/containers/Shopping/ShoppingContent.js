import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { FormattedMessage } from 'react-intl';
import SearchProduct from './SearchProduct';
import DialogDetail from './DialogDetail';
import OrderFooter from './OrderFooter';
import ProductList from './ProductList';
import messages from './messages';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Media = props => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);

  const handleClickOpen = itemAt => {
    setOpen(true);
    setItem(itemAt);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: '100%', marginBottom: '50px' }}>
      <SearchProduct {...props} />
      <ProductList
        {...props}
        handleClickOpen={it => handleClickOpen(it)}
        data={props.productList}
        topic={<FormattedMessage {...messages.productListTopic} />}
      />
      {props.cart && props.cart.cart_no !== '' && <OrderFooter {...props} />}
      {item && (
        <DialogDetail
          {...props}
          open={open}
          item={item}
          handleClose={() => handleClose()}
          Transition={Transition}
        />
      )}
    </div>
  );
};

Media.propTypes = {
  productList: PropTypes.array,
  cart: PropTypes.object,
};

export default function ShoppingContent(props) {
  return (
    <Box overflow="hidden">
      <Media {...props} />
    </Box>
  );
}
