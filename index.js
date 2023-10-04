const inquirer = require('inquirer');
const fs = require('fs');
const {generateLogo} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want in your logo? Enter up to 3 characters.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What colour is your text? Enter a hexadecimal number or a colour keyword.',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: '["Circle", "Triangle", "Square"]',
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What colour is your shape? Enter a hexadecimal number or a colour keyword.',
      }
]