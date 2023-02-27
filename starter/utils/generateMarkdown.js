// function to generate markdown for README

function getLicenseBadge(license){
  switch (license) {
    case "License: MPL 2.0":
      const image = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      return image
    case "Documentation":
        console.log("[![Documentation](https://img.shields.io/badge/GitBook-Docu-lightblue)](https://sulstice.gitbook.io/globalchem-your-chemical-graph-network/)");
        return "Documentation" 
    case "Website shields.io":
        console.log("[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://www.chemicalgraphtheory.com)");
        return "Website shields.io" 
    }

}


function generateMarkdown(data) {
  return `
# ${data.title} \n
## Description
${data.description} \n

## Installation
${data.installation} \n

## Usage
${data.usage} \n

## Contributing
${data.contributing} \n

## License
${getLicenseBadge(data.license)} \n

## Test
${data.test} \n

## Question
${data.questions} \n

`;
}

module.exports = generateMarkdown;

