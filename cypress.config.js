const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, // Habilita a gravação de vídeo
    videoCompression: 32, // Define a compressão do vídeo
    videosFolder: "cypress/videos",
  },
});
