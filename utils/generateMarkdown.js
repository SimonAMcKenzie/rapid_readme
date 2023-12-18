// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  # ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  This project is licensed under the ${response.license} license.

  ## Contributing 
  ${response.contributing}

  ## Tests
  ${response.tests}

  ## Questions
  For any questions, please get in touch [${response.username}](https://github.com/${response.username}) or email at ${response.email}.
`;
}

module.exports = generateMarkdown;
