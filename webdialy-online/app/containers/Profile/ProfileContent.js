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
          <Grid item xs={12} style={{ background: '#fef7ee' }}>
            Member Detail
          </Grid>
          <Grid item xs={12}>
            <Typography>( Code ) {code}</Typography>
          </Grid>
          <Grid item xs={12} style={{ background: '#fef7ee' }}>
            Contacts
          </Grid>
          <Grid item xs={6}>
            <Typography>( Email ) {email}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>( Mobile ) {mobile}</Typography>
          </Grid>
          <Grid item xs={12} style={{ background: '#fef7ee' }}>
            Personal
          </Grid>
          <Grid item xs={12}>
            <Typography>
              ( Birthday ) {moment(brithday).format('DD/MM/YYYY')}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ background: '#fef7ee' }}>
            Point Collection
          </Grid>
          <Grid item xs={6}>
            <Typography>
              ( Point Balance ) {' '}
              <NumberFormat
                value={pointBalance}
                displayType={'text'}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>
              ( Point Redemption ){' '}
              <NumberFormat
                value={pointRedemption}
                displayType={'text'}
                thousandSeparator={true}
              />
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ background: '#fef7ee' }}>
            Login System
          </Grid>
          <Grid item xs={12}>
            <Typography>( Username ) {username}</Typography>
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
