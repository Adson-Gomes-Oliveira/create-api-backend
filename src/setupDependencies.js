const child_process = require('child_process');
const fs = require('@supercharge/filesystem');
const colors = require('colors');
const { withoutSequelize, withSequelize } = require('./jsonModel');

async function setupDependencies(projectName, condSequelize) {
  const packagePath = `./${projectName}/package.json`;
  const gitIgnorePath = `./${projectName}/.gitignore`;
  const dotenvPath = `./${projectName}/.env`;
  const configNycPath = `./${projectName}/.nyc.config.js`;
  
  let waitMsg = ``;

  if (condSequelize) {
    waitMsg = `
                                                                                     
    The Dependencies is being installed, please wait, this may take a while...         
                                                                                       
                                  HAPPY HACKING!                                       
                                                                                       
                                     Project                                           
                                With Sequelize ORM                                     
                                                                                       
    In the meantime follow me on github :D --> https://github.com/Adson-Gomes-Oliveira 
                                                                                       
    `;
  }

  if (!condSequelize) {
    waitMsg = `
                                                                                       
    The Dependencies is being installed, please wait, this may take a while...         
                                                                                       
                                  HAPPY HACKING!                                       
                                                                                       
                                     Project                                           
                              Without Sequelize ORM                                    
                                                                                       
    In the meantime follow me on github :D --> https://github.com/Adson-Gomes-Oliveira 
                                                                                       
    `;
  }

  await fs.ensureFile(packagePath);
  if(condSequelize) await fs.writeFile(packagePath, withSequelize(projectName));
  if(!condSequelize) await fs.writeFile(packagePath, withoutSequelize(projectName));
    
  console.log(colors.bgBlue(waitMsg).bold);

  child_process.exec('npm install', { cwd: `./${projectName}/` }, function(err, stdout, stderr) {
    console.log(err);
    console.log(stdout);
    console.log(stderr);
  });

  child_process.exec('npm update', { cwd: `./${projectName}/` }, function(err, stdout, stderr) {
    console.log(err);
    console.log(stdout);
    console.log(stderr);
  });

  await fs.ensureFile(gitIgnorePath);
  await fs.ensureFile(dotenvPath);
  await fs.ensureFile(configNycPath);
  await fs.writeFile(gitIgnorePath, `node_modules
  .env`);
  await fs.writeFile(configNycPath, `module.exports = {
    include: ['**/**/*.js'],
    exclude: ['**/*.{test, spec}.js'],
  };`)
}

module.exports = setupDependencies;
