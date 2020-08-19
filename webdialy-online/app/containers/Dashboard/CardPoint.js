import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardPoint(props) {
  const classes = useStyles();
  const { label, point, bg, fbg } = props;

  CardPoint.propTypes = {
    label: PropTypes.string,
    point: PropTypes.string,
    bg: PropTypes.string,
    fbg: PropTypes.string,
  };

  return (
    <Card className={classes.root}>
      <CardContent style={{ background: `${bg}`, color: 'white' }}>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <Typography variant="h4">
          <NumberFormat value={point} displayType="text" thousandSeparator />
        </Typography>
      </CardContent>
      <CardActions style={{ background: `${fbg}`, color: 'white' }}>
        <Button endIcon={<ArrowRight />} style={{ color: 'white' }}>
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
