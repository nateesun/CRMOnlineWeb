import React from 'react';
import renderer from 'react-test-renderer';

import MainLayoutApp from '../index';

describe('MainLayoutApp components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MainLayoutApp />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
