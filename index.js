const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

// Prompt the user for input
inquirer
    .prompt([
        {
            type: 'list',
            name: 'color',
            message: 'Select a color for the logo:',
            choices: ['Red', 'Green', 'Blue'],
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for the logo:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: function(input) {
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Please enter no more than 3 characters.';
                }
            }
        },
    ])
    .then((answers) => {

        const svgContent = generateSVG(answers.color, answers.shape, answers.text);

        saveSVGToFile(svgContent);
    });

// Function to generate SVG content based on user input
function generateSVG(color, shape, text) {
    let shapeSVG;

    switch (shape.toLowerCase()) {
        case 'circle':
            shapeSVG = `<circle cx="100" cy="100" r="50" fill="${color}" />`;
            break;
        case 'square':
            shapeSVG = `<rect x="50" y="50" width="100" height="100" fill="${color}" />`;
            break;
        case 'triangle':
            shapeSVG = `<polygon points="100,20 180,180 20,180" fill="${color}" />`;
            break;
        default:
            console.error('Invalid shape');
            return ''; // Return an empty string if the shape is invalid
    }

    // Construct SVG markup based on user input
    const svg = `
    <svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">${text}</text>
    </svg>
  `;
    return svg;
}

// Function to save SVG content to a file
function saveSVGToFile(svgContent) {
    fs.writeFile('examples/logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error saving SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
}
