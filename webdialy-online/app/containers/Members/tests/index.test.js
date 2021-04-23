import React from 'react';
import renderer from 'react-test-renderer';

import Member from '../index';

describe('Member components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<Member />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
