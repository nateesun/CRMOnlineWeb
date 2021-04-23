import React from 'react';
import renderer from 'react-test-renderer';

import LanguageProvider from '../index';

describe('LanguageProvider components', () => {
  it('test snapshot', () => {
    const component = renderer.create(<LanguageProvider />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
