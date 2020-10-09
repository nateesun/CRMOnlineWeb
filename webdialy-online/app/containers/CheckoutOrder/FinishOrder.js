import React, { useEffect } from 'react';
const QRCode = require('qrcode.react');
import Typography from '@material-ui/core/Typography';
import ButtonLink from 'components/ButtonLink';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Thanks from './images/thanks.jpg';
import * as constants from './constants';

export default function FinishOrder(props) {
  useEffect(() => {
    console.log('init FinishOrder');
    console.log(props);
  }, []);

  return (
    <React.Fragment>
      <div align="center">
        <Typography variant="h5" gutterBottom>
          ขอบคุณสำหรับคำสั่งซื้อสินค้า
        </Typography>
        <img
          src={Thanks}
          width="270"
          height="150"
          alt="thank for your support"
          style={{ borderRadius: '15px' }}
        />
        <Typography
          variant="subtitle1"
          style={{
            border: '1px solid #eee',
            padding: '25px',
            marginTop: '10px',
          }}
        >
          เลขที่ Order ของคุณคือ{' '}
          <span style={{ background: 'yellow', color: 'black' }}>
            #{(props.cart && props.cart.cart_no) || ''}
          </span>{' '}
          <br />
          <QRCode
            value={`http://localhost:3000/orders/${(props.cart &&
              props.cart.cart_no) ||
              ''}?token=`}
          />
          <br />
          ทางเราจะตรวจสอบสลิปการโอนเงินของท่าน <br />
          และแจ้งผลการตรวจสอบภายใน 1-2 วันทำการ
          <br />
          ขอขอบคุณค่ะ
        </Typography>
        <Divider
          style={{
            border: '1px solid #eee',
            marginBottom: '10px',
            marginTop: '10px',
          }}
        />
        <ButtonLink to={`${constants.publicPath}/shopping`}>
          <Button color="primary" variant="contained">
            กลับหน้าสั่งสินค้า
          </Button>
        </ButtonLink>
      </div>
    </React.Fragment>
  );
}
