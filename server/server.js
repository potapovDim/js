":" //; exec /usr/bin/env node --harmony --expose-gc --trace-deprecation "$0" "$@"

const child_process = require("child_process");
const path = require("path");

child_process.spawn('pwd')



// (function start() {
//   proc = child_process.spawn(process.argv[0], [
//     "--harmony",
//     ...global.gc?["--expose-gc"]:[],
//     startFile, ...process.argv.slice(2)
//   ]);

//   proc.stdout.on("data", function (data) {
//     process.stdout.write(data);
//   });

//   proc.stderr.on("data", function (data) {
//     process.stderr.write(data);
//   });

//   proc.on("exit", function (code) {
//     proc = null;
//     if(code != 100) {
//       console.log(`child process exited with code ${code}`);
//       process.exit(code);
//     } else {
//       console.log("restarting child process");
//       start();
//     }
//   });

// })();

