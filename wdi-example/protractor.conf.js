exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./example-protractor.js'],
  directConnect: true,
  framework: 'mocha',
  baseUrl: "http://localhost:5555",
  SELENIUM_PROMISE_MANAGER: false,
  mochaOpts: {
    timeout: 25000
  }
};