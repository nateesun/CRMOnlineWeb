import React from 'react';
import renderer from 'react-test-renderer';

import Login from '../index';

describe('Login components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Login />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
