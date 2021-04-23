import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../index';

describe('Dashboard components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Dashboard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
