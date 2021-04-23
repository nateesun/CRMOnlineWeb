import React from 'react';
import renderer from 'react-test-renderer';

import ToggleOption from '../index';

describe('ToggleOption components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ToggleOption />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
