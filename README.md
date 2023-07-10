# Cypress_Cucumber

required softwares

Node.js
Cypress
Cypress-cucumber-preprocessor
Visual studio Code editior

how to install Node.js
----------------------

Step1: goto this line - https://nodejs.org/en/download
Step2: download exe for Windows
Step3: goto download location and double click on exe
Step4: start install
Step5: open cmd and type - node --version check version 

How to Install Cypress
----------------------
Step1: create new folder - open new created folder in VS
Step2: open terminal
- npm init -y
- npm install cypress --save-dev
it will install cypress

How to Setup Cucumber:

Step1: open terminal type: 
npm install --save-dev cypress-cucumber-preprocessor
Step2: add the configutation Cypress environment files cypress.config.js
const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});

Step3: goto package.json
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/e2e"
  }

-- How to Run
Type 1: Run under Browser
npx cypress open

goto file and run

Type2: 
- goto folder location then open CMD
- npx cypress-tags run -e TAGS='@tagname'

or 
open terminal

npx cypress-tags run -e TAGS='@tagname and @tagname'

npx cypress-tags run -e TAGS='@tagname'

npx cypress-tags run -e TAGS='@tagname or @tagname'
