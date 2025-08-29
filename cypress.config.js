const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./cypress/pluggins/index.js')(on, config)
    },
    video:true, //Enable video recording
    videosFolder:"cypress/videos", //Folder to store videos
  },
});
