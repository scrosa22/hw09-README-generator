// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export default generateMarkdown;

function renderLicenseBadge(license) {
if (license.name === "MIT") {
  license.link = "https://opensource.org/licenses/MIT";
  license.badge = `[![License: MIT](https://img.shields.io/badge/license-MIT-green)]`
} else if (license.name === "Apache") {
  license.link = "https://opensource.org/licenses/Apache";
  license.badge = `[![License: Apache](https://img.shields.io/badge/license-Apache-blue)]`
} else if (license.name === "none") {
  license.link = "https://opensource.org/licenses/None";
  license.badge = `[![License: None](https://img.shields.io/badge/license-none-red)]`
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
  let license = {
    name: `${data.license}`,
    badge: "",
  };
  renderLicenseBadge(license);
  
  
  return `
  ${license.badge}
  
  # Title 
  ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Use](#use)
  -[Features](#features)
  -[Contribution](#contribution)
  -[Test](#test)
  -[Author_Information](#author_information)

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
  ## Author_Information
  #### GitHub 
  ${data.github}
  #### eMail
  ${data.email}
  #### Author
  ${data.name}
 


`;


}






