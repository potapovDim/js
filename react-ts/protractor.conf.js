exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests-protractor/**/firefox.spec.js'],
  allScriptsTimeout: 50000,
  getPageTimeout: 500000,
  capabilities: {
    browserName: 'chrome',
    acceptSslCerts: true,
    shardTestFiles: false,
    maxInstances: 1
  }
};