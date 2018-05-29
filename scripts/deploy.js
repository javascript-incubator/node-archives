const ghPages = require('gh-pages');
const fs = require('fs-extra');

const branch = 'heroku';
const buildfolder = 'build';

// fs.rmdirSync(path.resolve(process.cwd(), 'node_modules/gh-pages/.cache'));
fs.writeFile(`${buildfolder}/Procfile`, 'web npm run start:prod', err => (err ? console.log(err) : console.log('Created Procfile for Heroku')));
fs.copyFileSync('package.json', `${buildfolder}/package.json`);
console.log('Copied package.json');
fs.copyFileSync('yarn.lock', `${buildfolder}/yarn.lock`);
console.log('Copied package-lock.json');
fs.writeFile(`${buildfolder}/index.js`, 'require(\'.\\main.js\')', err => (err ? console.log(err) : console.log('Created index file for Heroku')));

ghPages.publish('build', { branch }, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log('Successfully pushed to ' + branch);
});
