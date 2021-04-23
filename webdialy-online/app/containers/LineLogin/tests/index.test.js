import React from 'react';
import renderer from 'react-test-renderer';

import LineLogin from '../index';

describe('LineLogin components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<LineLogin />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
