import React from 'react';
import renderer from 'react-test-renderer';

import Authentication from '../index';

describe('Authentication components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Authentication />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
