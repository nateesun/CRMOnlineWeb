import React from 'react';
import renderer from 'react-test-renderer';

import MsProduct from '../index';

describe('MsProduct components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MsProduct />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
