import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import history from 'utils/history';
import LanguageProvider from 'containers/LanguageProvider';
import configureStore from 'configureStore';
import { translationMessages } from 'i18n';

import ToggleOption from '../index';

const initialState = {};
const store = configureStore(initialState, history);

describe('ToggleOption components', () => {
  it('test snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ToggleOption value="en" />
        </LanguageProvider>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
