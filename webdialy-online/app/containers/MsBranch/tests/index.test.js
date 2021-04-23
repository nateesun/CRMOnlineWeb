import React from 'react';
import renderer from 'react-test-renderer';

import MsBranch from '../index';

describe('MsBranch components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MsBranch />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
