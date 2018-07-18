export RUN_BROWSER=chrome
export RUN_ENV=https://test.e-builder.net
export RUN_SUITS=ieonly

node ./z.js && node ./x.js && node ./y.js

if (($? <= 100)); then
     node ./x.js
     if (($? <= 100)); then
      node ./y.js
    else
      echo FAIL
    fi
else
    echo FAIL
fi