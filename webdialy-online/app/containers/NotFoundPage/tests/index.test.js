import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from '../index';

describe('NotFoundPage components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<NotFoundPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
