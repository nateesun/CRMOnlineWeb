import React from 'react';
import renderer from 'react-test-renderer';

import InputSelectOptions from '../index';

describe('InputSelectOptions components', () => {
  it('test snapshot', () => {
    const component = renderer.create(
      <InputSelectOptions input={{ id: 'txtInput' }} meta={{ touched: true }} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
