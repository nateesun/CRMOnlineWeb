import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 10px;
`;
const SelectType = styled.select`
  margin-right: 5px;
  width: 100px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 5px;
  outline: none;
`;
const InputSearch = styled.input`
  margin-right: 5px;
  width: 200px;
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
  const [key, setKey] = useState('code');
  const [value, setValue] = useState('');

  const onSearchData = (key, value) => {
    props.onSearch(key, value);
  };

  return (
    <Wrapper>
      <SelectType value={key} onChange={e => setKey(e.target.value)}>
        <option value="code">code</option>
        <option value="email">email</option>
      </SelectType>
      <InputSearch
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <ButtonSearch onClick={() => onSearchData(key, value)}>
        Search
      </ButtonSearch>
    </Wrapper>
  );
}
