/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Smart CRUD',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantHeaders',
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: 'wantActionsAndReducer',
      default: true,
      message:
        'Do you want an actions/constants/selectors/reducer tuple for this container?',
    },
    {
      type: 'confirm',
      name: 'wantSaga',
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: true,
      message: 'Do you want to load resources asynchronously?',
    },
    {
      type: 'confirm',
      name: 'contentPage',
      default: true,
      message: 'Do you want to load ContentPage?',
    },
    {
      type: 'confirm',
      name: 'newItem',
      default: true,
      message: 'Do you want to load New Item Form?',
    },
    {
      type: 'confirm',
      name: 'editItem',
      default: true,
      message: 'Do you want to load Edit Item Form?',
    },
    {
      type: 'confirm',
      name: 'listItem',
      default: true,
      message: 'Do you want to load List Item?',
    },
    {
      type: 'confirm',
      name: 'subListItem',
      default: true,
      message: 'Do you want to load Sub List Item?',
    },
    {
      type: 'confirm',
      name: 'viewItem',
      default: true,
      message: 'Do you want to load View Item?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/index.js',
        templateFile: './container-crud/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/index.test.js',
        templateFile: './container-crud/test.js.hbs',
        abortOnFail: true,
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/messages.js',
        templateFile: './container-crud/messages.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/actions.js',
        templateFile: './container-crud/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/actions.test.js',
        templateFile: './container-crud/actions.test.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/constants.js',
        templateFile: './container-crud/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container-crud/selectors.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path:
          '../../app/containers/{{properCase name}}/tests/selectors.test.js',
        templateFile: './container-crud/selectors.test.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container-crud/reducer.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/reducer.test.js',
        templateFile: './container-crud/reducer.test.js.hbs',
        abortOnFail: true,
      });
    }

    // Sagas
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/saga.js',
        templateFile: './container-crud/saga.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/saga.test.js',
        templateFile: './container-crud/saga.test.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    // add crud containers other
    // ContentPage
    if (data.contentPage) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/ContentPage.js',
        templateFile: './container-crud/ContentPage.js.hbs',
        abortOnFail: false,
      });
    }
    // NewItem
    if (data.newItem) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/NewItem.js',
        templateFile: './container-crud/NewItem.js.hbs',
        abortOnFail: false,
      });
    }
    // EditItem
    if (data.editItem) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/EditItem.js',
        templateFile: './container-crud/EditItem.js.hbs',
        abortOnFail: false,
      });
    }
    // TableItems
    if (data.listItem) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/TableItems.js',
        templateFile: './container-crud/TableItems.js.hbs',
        abortOnFail: false,
      });
    }
    // SubTableItems
    if (data.subListItem) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/SubTableItems.js',
        templateFile: './container-crud/SubTableItems.js.hbs',
        abortOnFail: false,
      });
    }
    // ViewItem
    if (data.viewItem) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/ViewItem.js',
        templateFile: './container-crud/ViewItem.js.hbs',
        abortOnFail: false,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
