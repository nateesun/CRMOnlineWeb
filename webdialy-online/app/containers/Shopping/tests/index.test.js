import React from 'react';
import renderer from 'react-test-renderer';

import Shopping from '../index';

describe('Shopping components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Shopping />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
