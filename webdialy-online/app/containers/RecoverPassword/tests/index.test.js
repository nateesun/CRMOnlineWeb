import React from 'react';
import renderer from 'react-test-renderer';

import RecoverPassword from '../index';

describe('RecoverPassword components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<RecoverPassword />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
