import React from 'react';
import renderer from 'react-test-renderer';

import AccessDeniedPage from '../index';

describe('AccessDeniedPage components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<AccessDeniedPage />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
