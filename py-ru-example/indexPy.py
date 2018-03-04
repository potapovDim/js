#!/usr/bin/python
# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

fl = open("/Users/dpot/Documents/js-trash/py-example/js.js", 'r')
js_fun = fl.read()

chrome_options = Options()

chrome_options.add_argument("--window-size=1920x1080")

driver = webdriver.Chrome(chrome_options=chrome_options)
driver.get("http://localhost:5555")

resp = driver.execute_script(js_fun)
print(resp)
driver.close()