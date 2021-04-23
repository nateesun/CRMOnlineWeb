import React from 'react';
import renderer from 'react-test-renderer';

import MsRole from '../index';

describe('MsRole components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MsRole />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
