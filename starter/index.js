const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "Project Title:",
    },

    {
        name: "description",
        type: "input",
        message: "Project Description:",
    },

    {
        name: "installation",
        type: "input",
        message: "Installation Process:",
    },

    {
        name: "usage",
        type: "input",
        message: "Your Usage:",
    },

    {
        name: "contributing",
        type: "input",
        message: "Outline how best to contribute",
    },


    {
        name: "license",
        type: "list",
        message: "Select a license",
        choices: ["The MIT License", "GNU GPL v3", "Apache 2.0 License", "BSD 3-Clause License", "License: MPL 2.0", "Documentation", "Website shields.io"]
    },

    {
        name: "gitAccount",
        type: "input",
        message: "Enter your GitHub username",
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email address?",
    },

]).then(answers => {
    console.log(answers);

    const template = generateMarkdown(answers)
    
    fs.writeFile(`README1.md`, template, (error) =>
    error ? console.error(error) : console.log("Success")
    );

})








// // function to write README file
// function writeToFile(data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
