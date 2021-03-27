import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export default function SearchBar(props) {
  const { items } = props;
  const [key, setKey] = useState('');
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
        <Select onChange={e => setKey(e.target.value)} defaultValue={items[0].key} style={{width: '100%'}}>
          {items &&
            items.map((value1, key1) => (
              <MenuItem key={key1} value={value1.key}>
                {value1.value}
              </MenuItem>
            ))}
        </Select>
      </Grid>
      <Grid item xs={4}>
        <TextField value={value} onChange={e => setValue(e.target.value)} style={{width: '100%'}} />
      </Grid>
      <Grid item xs={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSearchData()}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
