require 'watir'

browser = Watir::Browser.new :firefox

browser.goto 'http://localhost:5555'

script = File.read("/Users/dpot/Documents/js-trash/py-ru-example/js.js")

a = browser.execute_script script

print a

browser.quit