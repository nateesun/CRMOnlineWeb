import React from 'react';
import renderer from 'react-test-renderer';

import TrackCarts from '../index';

describe('TrackCarts components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<TrackCarts />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
