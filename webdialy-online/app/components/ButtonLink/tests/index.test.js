import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import ButtonLink from '../index';

describe('ButtonLink components', () => {
  it('test snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <ButtonLink to="/">Test Button</ButtonLink>
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
