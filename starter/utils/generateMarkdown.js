// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  # ${reponse.title}

  ## Description
  ${reponse.description}

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
  For any questions, please get in touch [${response.username}](https://hithub.com/${responses.username}) or email at ${responses.email}.
`;
}

module.exports = generateMarkdown;
