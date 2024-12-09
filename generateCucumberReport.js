const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/reports/cucumber-report.json', // Path to your generated JSON report
  output: 'cypress/reports/cucumber-report.html',    // Path to save the generated HTML report
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    browser: {
      name: 'chrome',
      version: '58',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
};

reporter.generate(options);
