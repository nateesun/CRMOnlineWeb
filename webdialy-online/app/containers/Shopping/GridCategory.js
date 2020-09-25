import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ShoppingIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';

const GroupItem = styled.div`
  text-align: center;
`;

const Item = props => {
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
    <div style={{ paddingTop: '5px' }}>
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
    <div
      style={{
        width: '100%',
        background: 'white',
        marginTop: '5px',
      }}
    >
      <Carousel animation={type}>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G1" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G2" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G3" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G4" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G5" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G6" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G7" type="shopping" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G8" type="shopping" />
            </GroupItem>
          </Grid>
        </Grid>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G1" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G2" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G3" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G4" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G5" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G6" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G7" type="remove" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G8" type="remove" />
            </GroupItem>
          </Grid>
        </Grid>
        <Grid container key={1}>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G1" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G2" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G3" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G4" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G5" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G6" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G7" type="basket" />
            </GroupItem>
          </Grid>
          <Grid item xs={3}>
            <GroupItem>
              <Item description="G8" type="basket" />
            </GroupItem>
          </Grid>
        </Grid>
      </Carousel>
    </div>
  );
};

export default GridCategory;
