const fs = require(`fs`);
//const path = require(`path`); 
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed."
  },
  {
    type: "input",
    name: "contributing",
    message: "What are your contribution guidelines for this project?"
  },
  {
    type: "input",
    name: "license",
    message: "Please add the license you are using for this project. Refer to the following link for details [https://choosealicense.com/](https://choosealicense.com/)."
  },
  {
    type: "input",
    name: "badges",
    message: "Add badge details here. Here is where you can find the badge you are looking for [shields.io](https://shields.io/)."
  },
  {
    type: "input",
    name: "tests",
    message: "Input any tests you carried out for this project."
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("README.md has been generated!")
      }
    });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    // Generate the README content using the user's responses
    const readmeContent = generateMarkdown(response);
    const fileName = "README.md";
    writeToFile(fileName, readmeContent);
  });
}

// function call to initialize program
init();
