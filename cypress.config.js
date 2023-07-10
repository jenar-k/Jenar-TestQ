const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ycvphr',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  
    env: {
      username: 'jenzq',
      password: 'Jenar123!@#',
    },
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false
  },
});
