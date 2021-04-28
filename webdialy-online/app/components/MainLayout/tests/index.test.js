import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { CssBaseline } from '@material-ui/core';

import LanguageProvider from 'containers/LanguageProvider';
import history from 'utils/history';
import configureStore from 'configureStore';
import { translationMessages } from 'i18n';

import MainLayout from '../index';
import LeftMenu from '../LeftMenu';

const initialState = {};
const store = configureStore(initialState, history);

describe('MainLayout components', () => {
  it('test main snapshot', () => {
    const component = renderer.create(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <ConnectedRouter history={history}>
            <CssBaseline />
            <MainLayout title="MainLayout">
              <div>Hello Main Layout</div>
            </MainLayout>
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test LeftMenu snapshot', () => {
    const component = renderer.create(<LeftMenu />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
