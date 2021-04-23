import React from 'react';
import renderer from 'react-test-renderer';

import CheckCarts from '../index';

describe('CheckCarts components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<CheckCarts />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
