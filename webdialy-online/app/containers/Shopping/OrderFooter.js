import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Grid } from '@material-ui/core';
import * as appConstants from 'containers/App/constants';
import ButtonLink from 'components/ButtonLink';

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: '0',
    background: 'chocolate',
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function OrderFooter(props) {
  const classes = useStyles();
  const { cart } = props;

  if (Object.keys(cart).length === 0) {
    return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid item xs={12}>
              <div
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  textShadow: '2px 2px gray',
                }}
              >
                ยังไม่มีรายการสั่งซื้อ
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item xs={12}>
            <ButtonLink
              to={`${appConstants.publicPath}/checkout-orders/${cart.cart_no}`}
              color="white"
            >
              <div align="right">
                <ShoppingBasket style={{ marginRight: '5px' }} />
                <span style={{ marginRight: '10px' }}>
                  รายการ :
                  <span
                    style={{
                      background: 'yellow',
                      padding: '5px',
                      color: 'black',
                    }}
                  >
                    {cart.cart_no}
                  </span>
                  |
                </span>
                <span>จน. {cart.total_item} | </span>
                รวม: {cart.total_amount} บาท
              </div>
            </ButtonLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
