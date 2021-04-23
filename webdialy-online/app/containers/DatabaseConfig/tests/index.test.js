import React from 'react';
import renderer from 'react-test-renderer';

import DatabaseConfig from '../index';

describe('DatabaseConfig components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<DatabaseConfig />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
