// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}.-green.svg)

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Test](#test)
  [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Test 
  ${data.test}

  ## Questions
  If you have additional questions about this project you can contact me at ${data.email}.
  Github page: ${data.github}
`;
}

module.exports = generateMarkdown;
