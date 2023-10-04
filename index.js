const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');
const colorKeywords = ['red', 'blue', 'orange', 'yellow', 'green', 'purple', 'black', 'white'];
const hexadecimal = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want in your logo? Enter up to 3 characters.',
        validate: validateText,
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What colour is your text? Enter a hexadecimal value or a color keyword.',
        validate: validateColor,
    },
      {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want your logo to be?',
        choices: ["circle", "triangle", "square"],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What colour is your shape? Enter a hexadecimal value or a color keyword.',
        validate: validateColor,
    }
];

function validateColor(input) {
    if (colorKeywords.includes(input.toLowerCase())) {
        return true;
    }

    if (hexadecimal.test(input)) {
        return true; 
    }

    console.log(` Color validation failed for "${input}" Enter a color keyword or hexidecimal value.`);
    return 'Please enter a valid color keyword or hexadecimal value.';
}

function validateText(text) {
    const isValid = text.length <= 3;
    console.log(` Text validation ${isValid ? 'passed' : 'failed'} for "${text}" Enter 3 character or less.`);
    return isValid;
  }


const makeShape = (shape, color) => {
    shapeLowerCase = shape.toLowerCase()
    switch(shapeLowerCase) {
        case "circle": {
            const circle = new shapes.Circle(color)           
            return circle.render();
        }
        case "triangle": {
            const triangle = new shapes.Triangle(color)           
            return triangle.render();
        }
        case "square": {
            const square = new shapes.Square(color)
            return square.render();
        }
    }
}

function makeSvg ({text, textColor, shape, shapeColor}) {
    const svgShape = makeShape(shape, shapeColor)
    return `<root>
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
    <text x="150" y="100" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
</root>\t`
}

function init() {
    inquirer.prompt(questions).then(response =>{
        try {
            fs.writeFileSync("logo.svg", makeSvg(response));
            console.log('Successfully generated your logo!');
        } catch (error) {
            console.error('Error generating logo:', error.message);
        }
    });
}

init();