import React from 'react';
import renderer from 'react-test-renderer';

import TrackOrders from '../index';

describe('TrackOrders components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<TrackOrders />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
