// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        // Used validate to prompt the user with a message if no answer was written
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation instruction for this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instruction for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage for this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the usage for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What is the contribution guidelines for this project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the contribution guidelines for this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What is the test instructions for this project?',
            default: 'npm test'
        },
        // Used default for when user does not give an answer then automatically inputs the default answer
        {
            type: 'list',
            name: 'license',
            message: 'Which license was used for this project?',
            choices: ['GNU', 'ISC', 'MIT'],
            default: ['GNU']
        },
        // Used the list type to generate an array of choices the user can choose from 
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ]

// TODO: Create a function to write README file
// ref: https://www.geeksforgeeks.org/node-js-fs-writefile-method/ *Example 2*
function writeToFile(file, data) {
    fs.writeFile(file, data, (err) => {
        if (err) {
            return console.log(err);
        } else {
            console.log('Your README.md has been successfully created!')
        }
    })
};

// Function to initialize app
// ref: https://www.educative.io/edpresso/how-to-use-the-inquirer-node-package
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        writeToFile('README.md', generateMarkdown(answers));
    });
}
    
// Function call to initialize app
init();
