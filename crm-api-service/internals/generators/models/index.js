/**
 * Model Generator
 */

/* eslint strict: ["off"] */

'use strict';

const modelExists = require('../../utils/modelExists');

module.exports = {
  description: 'Add an unconnected model',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Product',
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
    // Generate Product.js
    const actions = [
      {
        type: 'add',
        path: '../../models/{{properCase name}}.model.js',
        templateFile: './models/index.js.hbs',
        abortOnFail: true,
      }
    ];

    return actions;
  },
};
