import React from 'react';
import renderer from 'react-test-renderer';

import GlobalAlert from '../index';

describe('GlobalAlert components', () => {
  it('test snapshot', () => {
    const component = renderer.create(
      <GlobalAlert show title="Test" type="error" text="Show Error" />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
