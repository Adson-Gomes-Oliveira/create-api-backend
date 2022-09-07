const fs = require('@supercharge/filesystem');
async function createProjectPaths(projectName, sequelizeConditional) {
  const paths = [];

  if (sequelizeConditional) {
    paths.push( 
    `./${projectName}/src`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/routes`,
    `./${projectName}/src/validations`,
    `./${projectName}/src/services`,
    `./${projectName}/src/controllers`,
    `./${projectName}/src/helpers`,
    `./${projectName}/src/middlewares`,
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
  );

  const promises = [];
  paths.forEach((path) => {promises.push(fs.ensureDir(path))});
  await Promise.all(promises);
}

module.exports = createProjectPaths;
