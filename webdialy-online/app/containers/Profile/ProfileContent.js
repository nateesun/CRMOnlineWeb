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
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
          <Grid item xs={12} className={classes.item}>
            <FormattedMessage {...messages.memberTopic} />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.code} />
              </Label>
              <LabelContent>{code}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <FormattedMessage {...messages.contactsTopic} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.email} />
              </Label>{' '}
              <LabelContent>{email}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.mobile} />
              </Label>{' '}
              <LabelContent>{mobile}</LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <FormattedMessage {...messages.personalTopic} />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.birthDay} />
              </Label>
              <LabelContent>
                {moment(brithday).format('DD/MM/YYYY')}
              </LabelContent>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.item}>
            <FormattedMessage {...messages.pointTopic} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.pointBalance} />
              </Label>
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
              <Label>
                <FormattedMessage {...messages.pointRedemption} />
              </Label>
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
            <FormattedMessage {...messages.loginTopic} />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <Label>
                <FormattedMessage {...messages.username} />
              </Label>{' '}
              <LabelContent>{username}</LabelContent>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" size="small">
          <FormattedMessage {...messages.btnChangePassword} />
        </Button>
      </CardActions>
    </Card>
  );
}
