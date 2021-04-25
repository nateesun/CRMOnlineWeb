import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import LabelTopic from 'components/LabelTopic';
import messages from '../messages';
import * as selectors from '../selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #eee',
    padding: '20px',
  },
  loginTopic: {
    marginTop: theme.spacing(1),
  },
  divContent: {
    marginTop: '20px',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '10px',
  },
  colTab: {
    background: '#FFF0D8',
    fontWeight: 'bold',
    margin: '1px',
    paddingLeft: '15px',
  },
}));

const ViewItem = props => {
  const classes = useStyles();
  const {
    code,
    email,
    member_role: memberRole,
    first_name: firstName,
    last_name: lastName,
    total_score: totalScore,
    total_purchase: totalPurchase,
    mobile,
  } = props.initialValues;

  return (
    <Container component={Paper} maxWidth="lg" className={classes.container}>
      <LabelTopic>
        <FormattedMessage {...messages.headerViewItem} />
      </LabelTopic>
      <Grid container spacing={2} className={classes.divContent}>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.memberCode} />
        </Grid>
        <Grid item xs={6}>
          {code}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.email} />
        </Grid>
        <Grid item xs={6}>
          {email}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.role} />
        </Grid>
        <Grid item xs={6}>
          {memberRole}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.name} />
        </Grid>
        <Grid item xs={6}>
          {firstName}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.lastName} />
        </Grid>
        <Grid item xs={6}>
          {lastName}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.totalScore} />
        </Grid>
        <Grid item xs={6}>
          {totalScore}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.totalPurchase} />
        </Grid>
        <Grid item xs={6}>
          {totalPurchase}
        </Grid>
        <Grid item xs={4} className={classes.colTab}>
          <FormattedMessage {...messages.mobile} />
        </Grid>
        <Grid item xs={6}>
          {mobile}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => props.onChangePage('LIST')}>
            <FormattedMessage {...messages.btnBack} />
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

ViewItem.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  onRegister: PropTypes.func,
  initialValues: PropTypes.object,
  onChangePage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  initialValues: selectors.makeSelectForm(),
});

export default connect(mapStateToProps)(ViewItem);
