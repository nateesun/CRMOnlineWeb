import React from 'react';
import renderer from 'react-test-renderer';

import GoogleMap from '../index';

describe('GoogleMap components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<GoogleMap />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
