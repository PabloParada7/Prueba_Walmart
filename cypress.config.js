const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://www.lider.cl/',
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    browser: "Chrome",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});