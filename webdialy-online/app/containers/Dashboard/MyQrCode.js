import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { Cake, Phone, MoneyOff, Star, AssignmentInd} from '@material-ui/icons';
const QRCode = require('qrcode.react');
import messages from './messages';
import default_boy from './images/default_boy.png';
import default_girl from './images/default_girl.png';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

const BoxPanel = styled(Box)`
  padding: 5px;
  display: flex;
  justify-content: center;
`;

export default function MyQrCode(props) {
  const classes = useStyles();
  const {
    code,
    prefix,
    first_name,
    last_name,
    gender,
    mobile,
    birthday,
    total_score,
    total_purchase,
    member_role
  } = props.profile;
  if (!code) {
    return (
      <React.Fragment>
        <FormattedMessage {...messages.loadQrCode} />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <BoxPanel>
            <Avatar
              className={classes.large}
              src={gender === 'M' ? default_boy : default_girl}
            />
          </BoxPanel>
          <BoxPanel>
            {prefix}
            {first_name} {last_name}
          </BoxPanel>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{padding: '5px', margin: '5px', background: '#239FE7', color: 'white'}}>
            <BoxPanel>
              <Cake />วันเกิด: {birthday}</BoxPanel>
            <BoxPanel>
              <Phone />เบอร์ติดต่อ: {mobile}</BoxPanel>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{padding: '5px', margin: '5px', background: '#53AB67', color: 'white'}}>
            <BoxPanel>
              <Star />คะแนนสะสมทั้งหมด: {total_score}</BoxPanel>
            <BoxPanel>
              <MoneyOff />ยอดซื้อสินค้า: {total_purchase}</BoxPanel>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{padding: '5px', margin: '5px', background: '#FFC36C'}}>
            <BoxPanel>
              <AssignmentInd />สถานะ: {member_role}
            </BoxPanel>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <BoxPanel>
            <QRCode value={code} />
          </BoxPanel>
          <BoxPanel>
            <FormattedMessage {...messages.myQrCode} />
          </BoxPanel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
