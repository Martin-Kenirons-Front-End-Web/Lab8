// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '', // The base path that will be used to resolve all patterns (e.g., files, exclude)
    frameworks: ['jasmine', '@angular-devkit/build-angular'], // Frameworks to use for testing
    plugins: [
      require('karma-jasmine'), // Plugin for Jasmine testing framework
      require('karma-chrome-launcher'), // Plugin to launch tests in Chrome browser
      require('karma-jasmine-html-reporter'), // Plugin to display test results in HTML format
      require('karma-coverage'), // Plugin to generate code coverage reports
      require('@angular-devkit/build-angular/plugins/karma') // Angular-specific Karma plugin
    ],
    client: {
      jasmine: {
        // Configuration options for Jasmine
        // For example, you can disable random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // Ensures Jasmine Spec Runner output remains visible in the browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // Removes duplicated traces in the HTML reporter
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'), // Directory for coverage reports
      subdir: '.', // Subdirectory for coverage reports
      reporters: [
        { type: 'html' }, // Generates HTML coverage reports
        { type: 'text-summary' } // Generates text summary of coverage
      ]
    },
    reporters: ['progress', 'kjhtml'], // Reporters to use (progress and Jasmine HTML reporter)
    port: 9876, // Port for the Karma web server
    colors: true, // Enable/disable colors in the output (reporters and logs)
    logLevel: config.LOG_INFO, // Level of logging (LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG)
    autoWatch: true, // Automatically watch files and re-run tests on changes
    browsers: ['Chrome'], // Browsers to launch for testing
    singleRun: false, // If true, Karma captures browsers, runs the tests, and exits
    restartOnFileChange: true // Restart tests on file changes
  });
};
