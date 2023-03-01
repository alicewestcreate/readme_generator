const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


inquirer.prompt([
    {
        name: "title",
        type: "input",
        message: "What is your project title:",
    },

    {
        name: "description",
        type: "input",
        message: "Give a description of your project:",
    },

    {
        name: "installation",
        type: "input",
        message: "What are the installation processes:",
    },

    {
        name: "usage",
        type: "input",
        message: "What is the usage for this project:",
    },

    {
        name: "contributing",
        type: "input",
        message: "Outline how best way to contribute to the project",
    },


    {
        name: "license",
        type: "list",
        message: "Select the license for the project",
        choices: ["The MIT License", "GNU GPL v3", "Apache 2.0 License", "BSD 3-Clause License", "License: MPL 2.0", "Documentation", "Website shields.io"]
    },

    {
        name: "gitAccount",
        type: "input",
        message: "Enter your GitHub username for contact",
    },
    {
        name: "email",
        type: "input",
        message: "Enter your email address from contact",
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
