import React from 'react';
import renderer from 'react-test-renderer';

import ForgotPassword from '../index';

describe('ForgotPassword components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ForgotPassword />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
