import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import MapDirectionAB from 'containers/GoogleMap/MapDirectionAB';

const origin = {
  position: {
    lat: () => 13.809992,
    lng: () => 100.41313,
  },
};

const destination = {
  position: {
    lat: () => 13.828941,
    lng: () => 100.525943,
  },
};

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

export default function Review(props) {
  const classes = useStyles();
  const { carts, carts_detail } = props.cartList;
  const {
    member_prefix,
    member_name,
    member_lastname,
    address1,
    address2,
    sub_district,
    district,
    province,
    postcode,
  } = props.shipping;
  const { paymentData: payment } = props;
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleDirection = (distance, duration) => {
    setDistance(distance / 1000);
    setDuration(duration / 60);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        สรุปยอดสั่งซื้อสินค้า และที่อยู่จัดส่ง
      </Typography>
      <Divider style={{ border: '1px solid #eee' }} />
      <List disablePadding>
        {carts_detail &&
          carts_detail.map(product => (
            <ListItem className={classes.listItem} key={product.product_code}>
              <ListItemText
                primary={product.product_name}
                secondary={product.desc}
              />
              <Typography variant="body2">{product.total_amount}</Typography>
            </ListItem>
          ))}
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem className={classes.listItem}>
          <ListItemText primary="ค่าจัดส่ง" />
          <Typography variant="subtitle1" className={classes.total}>
            0
          </Typography>
        </ListItem>
        <Divider style={{ border: '1px solid #eee' }} />
        <ListItem className={classes.listItem}>
          <ListItemText primary="ยอดรวมสินค้า" />
          <Typography variant="subtitle1" className={classes.total}>
            {carts && carts[0].total_amount}
          </Typography>
        </ListItem>
      </List>
      <Divider style={{ border: '1px solid #eee' }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            ที่อยู่สำหรับจัดส่ง
          </Typography>
          <Typography
            gutterBottom
          >{`${member_prefix}${member_name} ${member_lastname}`}</Typography>
          <Typography
            gutterBottom
          >{`${address1} ${address2||''} ${sub_district} ${district} ${province} ${postcode}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            รายละเอียดการชำระเงิน
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>ประเภทรับชำระ</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>เงินโอน</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>บัญชีต้นทาง</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>
                  {payment.account_from_name}
                </Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>เลขที่บัญชีต้นทาง</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.from_account_no}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>ชื่อบัญชีปลายทาง</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.account_to_name}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>เลขที่บัญชีปลายทาง</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.to_account_no}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>เลขที่อ้างอิงการโอนเงิน</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.transfer_ref}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>จำนวนเงินที่โอน</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.transfer_amount}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>วันที่/เวลา ที่โอนเงิน</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{payment.transfer_date}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div align="center" style={{ marginBottom: '25px' }}>
            <MapDirectionAB
              origin={origin}
              destination={destination}
              onExit={handleDirection}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div align="center" style={{ marginBottom: '25px' }}>
            ระยะทาง {distance} กิโลเมตร
            <br />
            ระยะเวลา {duration} นาที
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
