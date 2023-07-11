# Automation Test Using Cypress and Cucumber Gerkhin

This is my repository to store my code for the technical skill test for the Quality Assurance Engineer position at SimpliDOTS. I do a automation test for [The Movie Database](https://www.themoviedb.org/). For this text, I used Windows and the Chrome Browser.

You can see the test scenario using this link:
[Test Scenario](https://docs.google.com/document/d/1c1ZAn3c12r786TIvkROJRwaziGtl99dAKpDAYpyyQyc/edit?usp=sharing)

I also provide some suggestions, so all users have a better experience when using the application. These suggestions can be seen in the following document: [Suggestion Document](https://nodejs.org/en/download)

Required softwares:
- [Node.js - version: 16.13.0](https://nodejs.org/en/download)
- [Cypress - verison: 12.7.0](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [Cypress cucumber preprocessor - version: 4.3.1](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- [Faker - version: 8.0.2](https://fakerjs.dev/)
- [XPath npm](https://www.npmjs.com/package/cypress-xpath)
- [Visual studio Code editior](https://code.visualstudio.com/download)

How to install Node.js
----------------------
Step to installing Node.js is:
* Step1: goto this line - https://nodejs.org/en/download
* Step2: download exe for Windows
* Step3: goto download location and double click on exe
* Step4: start install
* Step5: open cmd and type - node --version check version 

How to Install Cypress
----------------------
* Step1: create new folder - open new created folder in VS
* Step2: open terminal
```
npm init -y
```
Or
```
npm install cypress --save-dev
```
* It will install cypress

How to Setup Cucumber
----------------------
Step to Setup Cucumber is:
* Step1: open terminal type: 
```
npm install --save-dev cypress-cucumber-preprocessor
```
* Step2: add the configutation Cypress environment files cypress.config.js
```
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
```
* Step3: goto package.json
```
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "step_definitions": "cypress/e2e"
  }
```

How to Run
----------------------
* Step 1: Setup the environtment

  * Go to cypress.config.js
  * Go to env section
  * Edit username and password
    ![Username and password location](https://github.com/jenar-k/Jenar-TestQ/assets/86145540/3b35d8c2-5479-4cb0-aa7d-9c3860538bc2)

  
* Step 2: Run under Browser
```
npx cypress open
```
* Step 3: Go to file and run it

    ![Test file](https://github.com/jenar-k/Jenar-TestQ/assets/86145540/4903ed15-9086-410c-960f-eee4a9589194)

  

Video
----------------------
You can view the test video via [the following link](https://nodejs.org/en/download)
