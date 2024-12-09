const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://magento.softwaretestingboard.com",
        setupNodeEvents(on, config) {
            on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin.default(config)], }));
            preprocessor.addCucumberPreprocessorPlugin(on, config);
            return config;
        },
        specPattern: "cypress/e2e/**/*.feature", // Path to feature files
        supportFile: false,
    },
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",

    // Configure Mochawesome Reporter
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Cucumber Tests Report',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },
});
