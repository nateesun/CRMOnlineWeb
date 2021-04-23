import React from 'react';
import renderer from 'react-test-renderer';

import Logout from '../index';

describe('Logout components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Logout />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
