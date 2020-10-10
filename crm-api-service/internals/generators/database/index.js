/**
 * Database Generator
 */

/* eslint strict: ["off"] */

'use strict';
// const fs = require('fs');

module.exports = {
  description: 'Create databse from structure',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'mydb',
    },
  ],
  actions: data => {
    // Create database mydb
    const actions = [];
    // await fs.readFileSync(__dirname + '/db.sql', (err, data) => {
    //     console.log(data);
    // })
    console.log('Code create database here.')
    return actions;
  },
};
