// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what is the title of your project?",
      },
      {
        type: "list",
        name: "tableofcontents",
        message: "Table of Contents",
        choices: [
          "Description",
          "Installation",
          "Usage",
          "License",
          "Contributing",
          "Tests",
          "Questions",
        ],
      },

      {
        type: "input",
        name: "description",
        message: "what is the description of your project?",
      },
      {
        type: "input",
        name: "usage",
        message: "what is the usage of your project?",
      },
      {
        type: "input",
        name: "contributing",
        message: "what did you contribute to your project?",
      },
      {
        type: "input",
        name: "install",
        message: "How did you install your project?",
      },
      {
        type: "input",
        name: "questions",
        message: "did you like your project?",
      },
      {
        type: "list",
        name: "license",
        message: "what is the license of your project?",
        choices: ["MIT", "ISC", "none"],
      },
      {
        type: "input",
        name: "github",
        message: "what is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "what is your Email?",
      },
    ])
    .then(function (answers) {
      console.log(answers);
      console.log(answers.title);
      fs.writeFile(
        "README.md",
        `# ${answers.title}

    
## Description
${answers.description}
       
## License
${answers.license} 

## Usage
${answers.usage}

## Contribution
${answers.contributing}

## Installation
${answers.install}

## Questions
${answers.questions}

## GitHub
${answers.github}(https://github.com/${answers.github})

## Email
${answers.email}(mailto:user@hotmail.com) 

       `,
        (err) => {
          // this function is a callback function, if an error occurs...
          // TODO: Describe how this ternary operator works
          // ternary operator is short for if...else. ? = if, : = else
          err ? console.error(err) : console.log("Commit logged!");
        }
      );
    });
}

// Function call to initialize app
init();
