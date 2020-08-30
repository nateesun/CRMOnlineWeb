import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid } from '@material-ui/core';

function Item(props) {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </div>
  );
}

const items = [
  {
    id: 1,
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    id: 2,
    name: 'Random Name #2',
    description: 'Probably the most',
  },
];

export default function TopPromotion(props) {
  const { type } = props;

  return (
    <div style={{ width: '100%', background: '#76bd5f', marginTop: '5px', marginBottom: '20px', padding: '1px' }}>
      <Carousel animation={type}>
        {items.map((item, i) => (
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
