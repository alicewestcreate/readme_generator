

function getLicenseBadge(license){

// Switch statement that reveals a licence badge image depending on which licences was selected. 
  switch (license) {
    case "The MIT License":
      return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "GNU GPL v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case "Apache 2.0 License":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case "BSD 3-Clause License":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case "License: MPL 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case "Documentation":
      return `[![Documentation](https://img.shields.io/badge/GitBook-Docu-lightblue)](https://sulstice.gitbook.io/globalchem-your-chemical-graph-network/)`
    case "Website shields.io":
      return`[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://www.chemicalgraphtheory.com)`
    }
}

// function to generate markdown for README file using direct literals. 
function generateMarkdown(data) {
  return `

# ${data.title} ${getLicenseBadge(data.license)} \n


## Description
--- 
${data.description} \n

## Table Of Contents
[Installation](#installation)
[Usage](#usage)
[Contributing](#contributing)
[License](#license)
[Test](#test)
[Question](#question)


## Installation
--- 
${data.installation} \n



## Usage
--- 
${data.usage} \n



## Contributing
--- 
${data.contributing}



## License
-- 
${(data.license)} 



## Testing
--- 
${data.test} \n



## Question
--- 

### Contact
Contract me on GITHUB throught my acount, 
[${data.gitAccount}](https://github.com/${data.gitAccount}) \n
Or directly on email: 
[email address](${data.email}) \n

Thanks,

`;
}

// this connects this script to the module.exports.
module.exports = generateMarkdown;

