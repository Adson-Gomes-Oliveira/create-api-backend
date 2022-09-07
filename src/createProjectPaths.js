const fs = require('@supercharge/filesystem');
async function createProjectPaths(projectName, condSequelize) {
  const paths = [];

  if (condSequelize) {
    paths.push( 
    `./${projectName}/src`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/validations`,
    `./${projectName}/src/services`,
    `./${projectName}/src/controllers`,
    `./${projectName}/src/helpers`,
    `./${projectName}/src/middlewares`,
    `./${projectName}/src/tests`,
    `./${projectName}/src/database`,
    );
  }

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

  const promises = [];
  paths.forEach((path) => {promises.push(fs.ensureDir(path))});
  await Promise.all(promises);
}

module.exports = createProjectPaths;
