import React from 'react';
import renderer from 'react-test-renderer';

import ProfileShipping from '../index';

describe('ProfileShipping components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ProfileShipping />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
