import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RedeemCard from './RedeemCard';
import Food1 from '../../images/example/food1.jpg';
import Food2 from '../../images/example/food2.jpg';
import Food3 from '../../images/example/food3.jpg';
import Food4 from '../../images/example/food4.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  tagStyle: {
    padding: '10px',
    background: '#fadfad',
    borderRadius: '10px 0px 10px 0px',
    fontWeight: 'bold',
    border: '1px solid #ccc',
  }
}));

export default function RedeemPage(props) {
  const classes = useStyles();
  const options = {
      label: 'E-Voucher PT มูลค่า 100 บาท',
      expiredPro: '09 Octuber 2020',
      pointUse: 'ใช้คะแนน: 1,100 คะแนน',
      inStock: 'สินค้าคงเหลือ: 203',
      status: 'สถานะ: สามารถแลกได้'
  }

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <div className={classes.tagStyle}>Redeem Promotion List Item</div>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          <Grid item xs={12} md={4}>
            <RedeemCard options={options} img={Food1} {...props} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RedeemCard options={options} img={Food2} {...props} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RedeemCard options={options} img={Food3} {...props} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RedeemCard options={options} img={Food4} {...props} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RedeemCard options={options} img={Food1} {...props} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
