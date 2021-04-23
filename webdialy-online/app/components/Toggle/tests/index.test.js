import React from 'react';
import renderer from 'react-test-renderer';

import Toggle from '../index';

describe('Toggle components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Toggle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
