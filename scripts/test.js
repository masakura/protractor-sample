const spawn = require('./spawn.js');

Promise.resolve()
  .then(() => spawn('webdriver-manager', ['update']))
  .then(() => spawn('protractor'));
