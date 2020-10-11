import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import { Button, Grid } from '@material-ui/core';

function Item(props) {
  Item.propTypes = {
    item: PropTypes.object,
  };
  return (
    <div style={{padding: 10}}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button variant="outlined" className="CheckButton">ดูรายละเอียด</Button>
    </div>
  );
}

const items = [
  {
    id: 1,
    name: 'แสดงโปรโมชั่น #1',
    description: 'รายละเอียดโปรโมชั่นที่ต้องการแสดง',
  },
  {
    id: 2,
    name: 'แสดงโปรโมชั่น #2',
    description: 'รายละเอียดโปรโมชั่นที่ต้องการแสดง',
  },
];

export default function TopPromotion(props) {
  const { type } = props;
  TopPromotion.propTypes = {
    type: PropTypes.any,
  };

  return (
    <div
      style={{
        width: '100%',
        background: '#76bd5f',
        marginTop: '5px',
        marginBottom: '20px',
        padding: '1px',
      }}
    >
      <Carousel animation={type}>
        {items.map(item => (
          <Grid container key={item.id}>
            <Grid item xs={12}>
              <Item item={item} />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
}
