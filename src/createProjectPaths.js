const fs = require('@supercharge/filesystem');
async function createProjectPaths(projectName, condSequelize, typescript) {
  const paths = [];

  paths.push( 
    `./${projectName}/src`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/validations`,
    `./${projectName}/src/models`,
    `./${projectName}/src/services`,
    `./${projectName}/src/controllers`,
    `./${projectName}/src/helpers`,
    `./${projectName}/src/middlewares`,
    `./${projectName}/src/tests`,
    );
    
  if (condSequelize) paths.push(`./${projectName}/src/database`);
  if (typescript) paths.push(`./${projectName}/src/interfaces`, `./${projectName}/src/types`);

  const promises = [];
  paths.forEach((path) => {promises.push(fs.ensureDir(path))});
  await Promise.all(promises);
}

module.exports = createProjectPaths;
