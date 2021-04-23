import React from 'react';
import renderer from 'react-test-renderer';

import MemberOrdersConfirm from '../index';

describe('MemberOrdersConfirm components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<MemberOrdersConfirm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
