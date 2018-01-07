const childProc = require('child_process');
childProc.exec('open -a "Google Chrome" http://localhost:5555', (...args) => {
  console.log(args)
});