
exports.config = {
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
        'goog:chromeOptions': {
          // to run chrome headless the following flags are required
          // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
          // args: ['--headless', '--disable-gpu'],
        }
      },

  ],
    logLevel: 'silent',   // Level of logging verbosity: silent | verbose | command | data | result | error
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [],
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
    reporters: [
        'spec',
        ['allure', {
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
          }
        ],
    ],

    beforeSession: function (config, capabilities, specs) {
      require('@babel/register');
    },

    afterTest: function (test) {
      if (test.error !== undefined) {
        browser.takeScreenshot();
      }
    },
}
