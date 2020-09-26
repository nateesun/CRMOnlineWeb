import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import image from '../../images/example/food1.jpg';
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
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 2,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 3,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 4,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 5,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 6,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 7,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 8,
    img: image,
    title: 'Image',
    author: 'author',
  },
  {
    id: 9,
    img: image,
    title: 'Image',
    author: 'author',
  },
];

export default function GroupProduct() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProductTopic label="กลุ่มสินค้า" bgColor="#f9f972" textColor="black" />
      <GridList className={classes.gridList}>
        {tileData.map(tile => (
          <img src={tile.img} alt={tile.title} />
        ))}
      </GridList>
    </div>
  );
}
