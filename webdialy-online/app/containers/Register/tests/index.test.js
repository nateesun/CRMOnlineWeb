import React from 'react';
import renderer from 'react-test-renderer';

import Register from '../index';

describe('Register components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Register />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
