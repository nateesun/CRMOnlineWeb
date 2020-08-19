import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import styled from 'styled-components';

const Label = styled.span`
  border: 0px solid;
  padding: 5px;
  color: black;
  width: 150px;
  float: left;
`;
const LabelContent = styled.span`
  border: 0px solid;
  padding: 5px;
  color: black;
  float: left;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  item: {
    background: '#eee',
    border: '0px solid',
  }
});

export default function ProfileContent(props) {
  const { profile } = props;
  const {
    prefix,
    firstName,
    lastName,
    username,
    pointBalance,
    pointRedemption,
    code,
    email,
    brithday,
    mobile,
  } = profile;
  const classes = useStyles();

  ProfileContent.propTypes = {
    profile: PropTypes.object,
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {`${prefix}${firstName} ${lastName}`}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            Member Detail
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>Code</Label>
              <LabelContent>{code}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            Contacts
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>Email</Label> <LabelContent>{email}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>Mobile</Label> <LabelContent>{mobile}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            Personal
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>Birth Day</Label>{' '}
              <LabelContent>
                {moment(brithday).format('DD/MM/YYYY')}
              </LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            Point Collection
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>Point Balance</Label>{' '}
              <LabelContent>
                <NumberFormat
                  value={pointBalance}
                  displayType="text"
                  thousandSeparator
                />
              </LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>Point Redemption</Label>{' '}
              <LabelContent>
                <NumberFormat
                  value={pointRedemption}
                  displayType="text"
                  thousandSeparator
                />
              </LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            Login System
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>Username</Label> <LabelContent>{username}</LabelContent>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" size="small">
          Change password
        </Button>
      </CardActions>
    </Card>
  );
}
