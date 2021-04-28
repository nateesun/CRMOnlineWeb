import React from 'react';
import renderer from 'react-test-renderer';

import ContentNotFound from '../index';

describe('ContentNotFound components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ContentNotFound />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
