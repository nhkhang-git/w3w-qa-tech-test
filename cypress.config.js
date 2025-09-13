const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/integration/**/*.feature",
    // Increase timeouts for slower loading due to network issues
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    // Don't fail on uncaught exceptions from the application
    experimentalRunAllSpecs: true,
    // Additional options to handle network failures
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
