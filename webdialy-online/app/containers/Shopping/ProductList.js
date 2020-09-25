import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProductTopic from './ProductTopic';

export default function ProductList(props) {
  const { data, topic, handleClickOpen } = props;

  ProductList.propTypes = {
    data: PropTypes.object,
    topic: PropTypes.string,
    handleClickOpen: PropTypes.func,
  };

  return (
    <Grid container spacing={3} style={{ marginTop: '1px' }}>
      <Grid item xs={12}>
        <ProductTopic label={topic} bgColor="blue" textColor="white" />
      </Grid>
      {data &&
        data.map(item => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={item.id}>
            <div align="center">
              <Box key={item.id} onClick={() => handleClickOpen()}>
                <img
                  style={{ height: 118, width: '150px', marginBottom: '8px' }}
                  alt={item.title}
                  src={item.src}
                />
                <Box pr={2}>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{
                      color: '#756a67',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="textSecondary"
                    align="center"
                  >
                    <span
                      style={{
                        color: 'green',
                        fontSize: '18px',
                        marginRight: '2px',
                      }}
                    >
                      {item.price}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      บาท
                    </span>
                  </Typography>
                </Box>
              </Box>
            </div>
          </Grid>
        ))}
    </Grid>
  );
}
