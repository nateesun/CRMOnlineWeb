import React from 'react';
import renderer from 'react-test-renderer';

import ProfileEdit from '../index';

describe('ProfileEdit components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ProfileEdit />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
