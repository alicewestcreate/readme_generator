const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
// const questions = [ 
// ["title", "Project Title:"], 
// ["description", "Project Description"], 
// ["installation" , "Installation Process"], 
// ["usage", "Usage"], 
// ["contributing", "Contributing"], 
// ["test", "Test"], 
// ["questions", "questions"],
// ];


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
        message: "",
    },

    {
        name: "test",
        type: "input",
        message: "Test",
    },

    {
        name: "license",
        type: "list",
        message: "Select which license",
        choices: ["License: MPL 2.0", "Documentation", "Website shields.io"]
    },

    {
        name: "questions",
        type: "input",
        message: "Questions",
    },

]).then(answers => {
    console.log(answers);

    const template = generateMarkdown(answers)
    
    fs.writeFile(`${answers.title}.md`, template, (error) =>
    error ? console.error(error) : console.log("Success")
    );

})




// questions.forEach(question => {
//     console.log("Array of question",question);

// inquirer
//     .prompt(
//         questions.forEach(question => {
//             [{name: question[0], type: "input", message: question[1],},]
//             } 
//             )).then((answers) => {
//             console.log(answers);
//             const template = generateMarkdown(answers.question[0])

//             // fs.writeFile(`${answers.title}.md`, template, (error) =>
//             // error ? console.error(error) : console.log("Success")
//             // );
//     })


// // })






// // function to write README file
// function writeToFile(data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
