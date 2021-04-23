import React from 'react';
import renderer from 'react-test-renderer';

import UsePromotion from '../index';

describe('UsePromotion components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<UsePromotion />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
