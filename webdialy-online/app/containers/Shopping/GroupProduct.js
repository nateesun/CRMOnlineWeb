import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ProductTopic from './ProductTopic';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    padding: '5px',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
const tileData = [
  {
    id: 1,
    title: 'Image1',
  },
  {
    id: 2,
    title: 'Image2',
  },
  {
    id: 3,
    title: 'Image3',
  },
  {
    id: 4,
    title: 'Image4',
  },
  {
    id: 5,
    title: 'Image5',
  },
  {
    id: 6,
    title: 'Image6',
  },
  {
    id: 7,
    title: 'Image7',
  },
  {
    id: 8,
    title: 'Image8',
  },
  {
    id: 9,
    title: 'Image9',
  },
];

export default function GroupProduct(props) {
  const { imgHost } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductTopic label="กลุ่มสินค้า" bgColor="#f9f972" textColor="black" />
      <GridList className={classes.gridList}>
        {tileData.map(tile => (
          <img src={`${imgHost}/images/food1.jpg`} alt={tile.title} />
        ))}
      </GridList>
    </div>
  );
}
