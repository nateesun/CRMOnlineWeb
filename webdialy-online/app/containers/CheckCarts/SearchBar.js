import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function SearchBar(props) {
  const [key, setKey] = useState('cart_no');
  const [value, setValue] = useState('');

  const onSearchData = () => {
    props.onSearch(key, value);
  };

  SearchBar.propTypes = {
    onSearch: PropTypes.func,
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Select value={key} onChange={e => setKey(e.target.value)}>
          <MenuItem value="cart_no">Cart No</MenuItem>
          <MenuItem value="member_code">Member Code</MenuItem>
          <MenuItem value="cart_active">Status</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={5}>
        <TextField value={value} onChange={e => setValue(e.target.value)} />
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={() => onSearchData()}>Search</Button>
      </Grid>
    </Grid>
  );
}
