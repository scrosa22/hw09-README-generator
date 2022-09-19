// TODO: Include packages needed for this application
// import inquirer from "inquirer";
const inquirer = require('inquirer')
// import {writeFile} from "fs";
// import generateMarkdown from "./utils/generateMarkdown.js";
console.log("README Generator init");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a brief description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "How would you like to install the project?",
    name: "install",
  },
  {
    type: "input",
    message: "What is the project used for?",
    name: "use",
  },
  {
    type: "checkbox",
    message: "Choose a license for your project",
    name: "license",
    choices: ["MIT", "Apache", "none"],
  },
  {
    type: "input",
    message: "Please provide the project features",
    name: "features",
  },
  {
    type: "input",
    message: "How can other users contribute to the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do you test the project?",
    name: "test",
  },
  {
    type: "input",
    message: "Please provide your GitHub ID",
    name: "github",
  },
  {
    type: "input",
    message: "Please provide your email address",
    name: "email",
  },
  {
    type: "input",
    message: "Please provide your name",
    name: "name",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const response = generateMarkdown(data);
      createReadMe(response);
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
