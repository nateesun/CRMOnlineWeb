import React from 'react';
import renderer from 'react-test-renderer';

import ShowQRCode from '../index';

describe('ShowQRCode components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<ShowQRCode />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
