import React from 'react';
import renderer from 'react-test-renderer';

import LabelTopic from '../index';

describe('LabelTopic components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<LabelTopic />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
