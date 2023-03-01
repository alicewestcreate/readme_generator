// Create variable for file system (fs), path, and the inquirer npm. 
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// A variable that connects this script with generatemarkdown script. 
const generateMarkdown = require("./utils/generateMarkdown");


// Using the inqurier.prompt method, ask a series of questions and store the responses in an object. 
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
        name: "test",
        type: "input",
        message: "Enter information for testing",
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

// Once completed, then complete this next command. 
]).then(answers => {
    // Call the function with the answers as an argument. 
    const template = generateMarkdown(answers)
    writeToFile(template) 

})


function writeToFile(template) {
    // With information stored in template varible, write a file, log error if error is true and occurs, else log success. 
    fs.writeFile(`README1.md`, template, (error) =>
    error ? console.error(error) : console.log("Success")
    );
}
