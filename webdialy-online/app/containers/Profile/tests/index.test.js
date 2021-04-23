import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../index';

describe('Profile components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Profile />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
