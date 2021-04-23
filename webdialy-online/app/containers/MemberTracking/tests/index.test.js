import React from 'react';
import renderer from 'react-test-renderer';

import MemberTracking from '../index';

describe('MemberTracking components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MemberTracking />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
