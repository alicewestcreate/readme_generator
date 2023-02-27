const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { createDiffieHellmanGroup } = require("crypto");



// // array of questions for user
// const questions = [

// ];



inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "Project title:",
    },
])
.then((answers) => {

    console.log(answers);
    const template = generateMarkdown(answers)

    fs.writeFile(answers.title, template, (error) =>
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
