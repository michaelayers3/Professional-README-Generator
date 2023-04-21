const fs = require("fs");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage",
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution",
        },
        {   
            type: "input",
            message: "What are the test instructions?",
            name: "test",
        },
        {
            type: "list",
            message: "What license would you like to use?",
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "GPL",
                "BSD",
                "None",
            ],
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then(function(response) {
        if (response.license === "MIT") {
            this.licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        } else if (response.license === "Apache") {
         this.licenseBadge = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        } else if (response.license === "GPL") {
         this.licenseBadge = "[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        } else if (response.license === "BSD") {
          this.licenseBadge = "[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        } else {
          this.licenseBadge = ""
        }
        const readme =
`
${this.licenseBadge}
 # ${response.title}


    
 ## Description
 ${response.description}            
        
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
                
 ## Installation
 ${response.installation}            
        
 ## Usage
 ${response.usage}            
        
 ## License
 ${response.license} licensing.
        
 ## Contributing
 ${response.contribution}            
        
 ## Tests
 ${response.test}            
        
 ## Questions
 If you have any questions, please contact me at ${response.email} or visit my GitHub page at
        https://github.com/${response.github}.
    `
                    
        fs.writeFile("README.md", readme, function(err) {
            if (err) {
                return console.log(err);
            }

            console.log("Success!");
        });
    });


// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
    // fs.writeFile('README.md', data, function(err) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log("Success!");
    // });
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();


// badges
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
"[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
"[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
"[![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
