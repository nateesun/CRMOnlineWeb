/**
 * Route Generator
 */

/* eslint strict: ["off"] */

'use strict';

const modelExists = require('../../utils/modelExists');

module.exports = {
  description: 'Add an unconnected route',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'product',
      validate: value => {
        if (/.+/.test(value)) {
          return modelExists(value)
            ? 'A model or route with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate product.js
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
