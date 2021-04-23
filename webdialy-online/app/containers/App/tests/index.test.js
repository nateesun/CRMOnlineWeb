import React from 'react';
import renderer from 'react-test-renderer';

import App from '../index';

describe('App components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
