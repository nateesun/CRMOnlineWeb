import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ProductTopic from './ProductTopic';
import * as constants from './constants';

export default function ProductList(props) {
  const { data, topic, handleClickOpen } = props;
  const loc = window.location.href.split('/');
  const apiServiceHost = `${loc[0]}//${loc[2]}`.replace('3000',  '5000');

  ProductList.propTypes = {
    data: PropTypes.array,
    topic: PropTypes.string,
    handleClickOpen: PropTypes.func,
  };

  return (
    <Grid container spacing={3} style={{ marginTop: '1px' }}>
      <Grid item xs={12}>
        <ProductTopic label={topic} bgColor="#009cdb" textColor="white" />
      </Grid>
      <Grid item xs={12}>
      {data && data.length===0 && <h1>ไม่พบข้อมูลสินค้า</h1>}
      </Grid>
      {data &&
        data.map(item => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={item.code}>
            <div align="center" style={{marginBottom: '4px'}}>
              <Paper elevation={3}>
                <Box key={item.code} onClick={() => handleClickOpen(item)}>
                  <img
                    style={{ height: 118, width: '150px', marginBottom: '8px' }}
                    alt={item.name}
                    src={`${apiServiceHost}${item.img_path}`}
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
                      {item.name}
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
                        ราคา {item.price_d} บาท
                      </span>
                    </Typography>
                    <Typography
                      display="block"
                      variant="caption"
                      color="textSecondary"
                      align="center"
                    >
                      <span
                        style={{
                          color: 'white',
                          padding: '5px 20px 3px 20px',
                          fontSize: '12px',
                          marginRight: '2px',
                          background: 'green',
                        }}
                      >
                        ได้ {item.point} คะแนน
                      </span>
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
                          fontSize: '12px',
                          marginRight: '2px',
                        }}
                      >
                        คงเหลือ ({`${item.in_stock|0}/${item.max_stock}`})
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </div>
          </Grid>
        ))}
    </Grid>
  );
}
