// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export default generateMarkdown;

function renderLicenseBadge(license) {
if (license.name === "MIT") {
  license.link = "https://opensource.org/licenses/MIT";
  license.badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
}

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title 
  ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Use](#use)
  -[Features](#features)
  -[Contributing](#contribute)
  -[Test](#testing)
  -[Author Information](#information)

  ### Installation
  ${data.installation}
  ### Use
  ${data.use}
  ### Features
  ${data.features}
  ### Contribution
  ${data.contribute}
  ### Test
  ${data.test}
  ## Author Information
  #### GitHub 
  ${data.github}
  #### eMail
  ${data.email}
  #### Author
  ${data.name}
 
`;
}






