import React from 'react';
import renderer from 'react-test-renderer';

import ProfileChangePwd from '../index';

describe('ProfileChangePwd components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ProfileChangePwd />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
