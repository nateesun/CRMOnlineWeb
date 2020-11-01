import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 10px;
`;
const SelectType = styled.select`
  margin-right: 5px;
  width: 150px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  outline: none;
`;
const InputSearch = styled.input`
  margin-right: 5px;
  width: 250px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  outline: none;
`;
const ButtonSearch = styled.button`
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 3px;
  width: 100px;
  background: #eee;
  color: black;
  outline: none;
  &:hover {
    background: #ccc;
    cursor: pointer;
    box-shadow: 1px 1px #bbb;
  }
`;

export default function SearchBar(props) {
  const [key, setKey] = useState('col1');
  const [value, setValue] = useState('');

  const onSearchData = () => {
    props.onSearch(key, value);
  };

  SearchBar.propTypes = {
    onSearch: PropTypes.func,
  };

  return (
    <Wrapper>
      <SelectType value={key} onChange={e => setKey(e.target.value)}>
        <option value="redeem_code">Redeem Code</option>
        <option value="bill_no">Bill No</option>
      </SelectType>
      <InputSearch
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ButtonSearch onClick={() => onSearchData()}>Search</ButtonSearch>
    </Wrapper>
  );
}
