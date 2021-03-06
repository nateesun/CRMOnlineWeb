import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../index';

describe('SearchBar components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<SearchBar items={[{ key: '', value: '' }]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
