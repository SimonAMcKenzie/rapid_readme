// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}\n\n` +
    `## Description\n${response.description}\n\n` +
    `## Table of Contents\n` +
    `- [Installation](#installation)\n` +
    `- [Usage](#usage)\n` +
    `- [License](#license)\n` +
    `- [Contributing](#contributing)\n` +
    `- [Tests](#tests)\n` +
    `- [Questions](#questions)\n\n` +
    `## Installation\n${processMarkdown(response.installation)}\n` +
    `## Usage\n${processMarkdown(response.usage)}\n` +
    `## License\nThis project is licensed under the ${response.license} license.\n\n` +
    `## Badges\n${processMarkdown(response.badges)}\n` +
    `## Contributing\n${processMarkdown(response.contributing)}\n` +
    `## Tests\n${processMarkdown(response.tests)}\n` +
    `## Questions\nFor any questions, please get in touch [${response.username}](https://github.com/${response.username}) or email at ${response.email}.\n`;
}

// Helper function to add line breaks
//function addLineBreaks(text) {}

// Helper function to process markdown syntax
function processMarkdown(text) {

  // Handle single line breaks
  text = text.replace(/\n/g, '\n');

  // Handle double line breaks
  text = text.replace(/\n\n/g, '\n\n');

  // Handle bullet-pointed lists
  text = text.replace(/^\s*\*\s*/gm, '- ');

  // Handle numbered lists
  text = text.replace(/^\s*\d+\.\s*/gm, (match) => {
    return `${parseInt(match)}\. `;
  });

  // Handle headings
  text = text.replace(/^(#+)\s*(.*?)\s*#*$/gm, (match, p1, p2) => {
    const level = p1.length;
    return `${'#'.repeat(level)} ${p2}`;
  });

  // Handle links
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '[$1]($2)');

  // Handle images
  text = text.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '![image]($2)');
  
  // Handle videos
  text = text.replace(/!\[video\]\(([^)]+\.(mp4|mov|avi))\)/g, '![video]($1)');

  // Handle emojis
  text = text.replace(/:([a-zA-Z0-9_+-]+):/g, ':$1:');

  // Replace newlines
  text = text.replace(/\n/g, '\n');

  return text;
}

module.exports = generateMarkdown;
