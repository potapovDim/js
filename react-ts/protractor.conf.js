exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./tests-protractor/**/*.spec.js'],
  allScriptsTimeout: 50000,
  getPageTimeout: 500000
};