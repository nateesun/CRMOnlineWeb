import React from 'react';
import renderer from 'react-test-renderer';

import WaterMark from '../index';

describe('WaterMark components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<WaterMark />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
