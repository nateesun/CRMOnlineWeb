import React from 'react';
import renderer from 'react-test-renderer';

import CheckoutOrder from '../index';

describe('CheckoutOrder components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<CheckoutOrder />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
