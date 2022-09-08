#! /usr/bin/env node
const readlineSync = require('readline-sync');
const createProjectPaths = require('../src/createProjectPaths');
const setupDependencies = require('../src/setupDependencies');

const projectName = process.argv.slice(2);
const language = readlineSync.keyInYN('Do you will use Typescript?');
const orm = readlineSync.keyInYN('Do you will use the ORM Sequelize?');

async function execute() {
  await createProjectPaths(projectName, orm, language);
  await setupDependencies(projectName, orm, language);
}

execute();
