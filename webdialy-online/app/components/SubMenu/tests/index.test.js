import React from 'react';
import renderer from 'react-test-renderer';

import SubMenu from '../index';

describe('SubMenu components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<SubMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
