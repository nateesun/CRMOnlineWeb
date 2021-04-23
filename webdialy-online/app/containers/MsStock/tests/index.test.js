import React from 'react';
import renderer from 'react-test-renderer';

import MsStock from '../index';

describe('MsStock components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MsStock />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
