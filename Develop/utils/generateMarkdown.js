// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `![![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
} else if (license === 'ISC') {
  return `![!License: ISC] (https://img.shields.io/badge/License-ISC-blue.svg)]`;
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license === 'MIT'){
      return `https://opensource.org/licenses/MIT`;
   } else if (license === 'Apache 2.0') {
     return `https://opensource.org/licenses/ISC`;
   } else {
     return '';
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='') {
    return 'Project is not licensed';
  }
 return `Project is licensed under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
        *[Description](#description)
        *[License](#license)
        *[Usage](#usage)
        *[Contribution](#contribution)
        *[Tests](#tests)
        *[Questions](#questions)
        *[GitHub](#github)
        *[Email](#email)
        

## Description
${answers.description}
       
## License
${answers.license} 

## Usage
${answers.usage}

## Contribution
${answers.contributing}

## Installation
${answers.install}

## Questions
${answers.questions}

## Contact Information
- GitHub:[${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:user@example.com) 
`;
}

module.exports = generateMarkdown;
