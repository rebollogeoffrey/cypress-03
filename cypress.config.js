const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g87hpr',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
