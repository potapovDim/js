const aConsole = (args, callback) => {
  const arg1 = args+ 1
  console.log(args)
  callback(arg1)
}


aConsole('test', (arg) => {
  console.log('callback', arg)
})