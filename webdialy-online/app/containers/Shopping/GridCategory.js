import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '5px',
  },
  container: {
    width: '100%',
    background: 'white',
    marginTop: '5px',
  },
}));

const GroupItem = styled.div`
  text-align: center;
`;

const Item = props => {
  const classes = useStyles();

  let showIcon = null;
  if (props.type === 'shopping') {
    showIcon = <ShoppingIcon />;
  } else if (props.type === 'basket') {
    showIcon = <ShoppingBasket />;
  } else {
    showIcon = <RemoveShoppingCart />;
  }
  Item.propTypes = {
    type: PropTypes.string,
    description: PropTypes.string,
  };
  return (
    <div className={classes.root}>
      {showIcon}
      <br />
      <span>{props.description}</span>
    </div>
  );
};

const GridCategory = props => {
  const { type } = props;
  GridCategory.propTypes = {
    type: PropTypes.string,
  };
  return (
    <div className={classes.container}>
      <Carousel animation={type}>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #1" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #2" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #3" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #4" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #5" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #6" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #7" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #8" type="shopping" />
            </GroupItem>
          </Grid>
        </Grid>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #1" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #2" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #3" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #4" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #5" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #6" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #7" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #8" type="remove" />
            </GroupItem>
          </Grid>
        </Grid>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #1" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #2" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #3" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #4" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #5" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #6" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #7" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="Group product #8" type="basket" />
            </GroupItem>
          </Grid>
        </Grid>
      </Carousel>
    </div>
  );
};

export default GridCategory;
