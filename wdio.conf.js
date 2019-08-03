const reportportal = require('wdio-reportportal-reporter');
const RpService = require("wdio-reportportal-service");
const path = require("path");
const fs = require("fs");

const conf = {
    reportPortalClientConfig: {
        endpoint: 'http://35.159.46.231:8080/api/v1',
        launch: 'osdsfsdff',
        project: 'borisosipov_personal',
        description: "Launch description text",
        mode: 'DEFAULT',
        debug: false,
        tags: ["tags", "for", "launch"],
    },
    reportSeleniumCommands: false,
    autoAttachScreenshots: false,
    seleniumCommandsLogLevel: 'info',
    screenshotsLogLevel: 'info',
    parseTagsFromTestTitle: true,
};

// const conf = {
//     reportPortalClientConfig: {
//         endpoint: 'https://web.demo.reportportal.io/api/v1',
//         launch: 'osdsfsdff',
//         project: 'borisosipov_personal',
//         description: "Launch description text",
//         debug: false
//     },
//     reportSeleniumCommands: true,
//     autoAttachScreenshots: false,
//     seleniumCommandsLogLevel: 'debug',
//     screenshotsLogLevel: 'info',
//     parseTagsFromTestTitle: false,
// };

exports.config = {
    debug: true,
    execArgv: ["--inspect=127.0.0.1:5859"],
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
    ],
    maxInstances: 1,
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'chrome',
      },

  ],
    logLevel: 'error',   // Level of logging verbosity: silent | verbose | command | data | result | error
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Jasmine default timeout
        defaultTimeoutInterval: 60000,
        //
        // The Jasmine framework allows interception of each assertion in order to log the state of the application
        // or website depending on the result. For example, it is pretty handy to take a screenshot every time
        // an assertion fails.
        expectationResultHandler: function(passed, assertion) {
            // do something
        }
    },
    services: [[RpService, {}]],
    reporters: ['spec', [reportportal, conf]],

    beforeSession: function (config, capabilities, specs) {
      require('@babel/register');
    },

    afterTest: function (test) {
        if (test.passed === false) {
            const filename = "screnshot.png";
            const outputFile = path.join(__dirname, filename);
            browser.saveScreenshot(outputFile);
            reportportal.sendFileToTest(test, 'info', filename, fs.readFileSync(outputFile));
        }
    },
}
