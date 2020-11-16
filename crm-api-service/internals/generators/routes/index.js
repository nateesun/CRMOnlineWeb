/**
 * Route Generator
 */

/* eslint strict: ["off"] */

'use strict';

const routeExists = require('../../utils/routeExists');

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
          return routeExists(value)
            ? 'A route with this name already exists'
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
        path: '../../routes/{{lowerCase name}}.route.js',
        templateFile: './routes/index.js.hbs',
        abortOnFail: true,
      }
    ];

    return actions;
  },
};
