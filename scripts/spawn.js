const path = require('path');
const spawn = require('child_process').spawn;

const scriptPath = path.dirname(require.main.filename);
const binPath = path.join(scriptPath, '../node_modules/.bin');

function spawan_(command, args, options) {
  const bin = path.join(binPath, command);
  const child = spawn(bin, args, options);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  return new Promise((resolve, reject) => {
    child.on('error', reject);
    child.on('close', resolve);
  });
}

module.exports = spawan_;
