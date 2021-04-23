import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from '../index';

describe('HomePage components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<HomePage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
