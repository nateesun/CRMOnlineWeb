/**
 * Controller Generator
 */

/* eslint strict: ["off"] */

'use strict';

const controllerExists = require('../../utils/controllerExists');

module.exports = {
  description: 'Add an unconnected route',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'index',
      validate: value => {
        if (/.+/.test(value)) {
          return controllerExists(value)
            ? 'A controller with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    const actions = [
      {
        type: 'add',
        path: '../../controllers/{{properCase name}}.controller.js',
        templateFile: './controllers/index.js.hbs',
        abortOnFail: true,
      }
    ];

    return actions;
  },
};
