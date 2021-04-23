import React from 'react';
import renderer from 'react-test-renderer';
import { Fade } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import LoadingBackdrop from '../index';

describe('LoadingBackdrop components', () => {
  it('test snapshot', () => {
    const component = renderer.create(
      <Slide direction="up" mountOnEnter unmountOnExit>
        <Fade style={{ WebkitTransition: 'all' }}>
          <LoadingBackdrop />
        </Fade>
      </Slide>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
