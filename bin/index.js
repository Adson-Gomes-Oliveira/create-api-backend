#! /usr/bin/env node
const readlineSync = require('readline-sync');
const createProjectPaths = require('../src/createProjectPaths');
const setupDependencies = require('../src/setupDependencies');

const languages = ['Typescript', 'Javascript'];

const projectName = process.argv.slice(2);
const language = readlineSync.keyInSelect(languages, 'Which will be the app language?');
const orm = readlineSync.keyInYN('Do you will use the ORM Sequelize?');

async function execute() {
  await createProjectPaths(projectName, orm);
  await setupDependencies(projectName, orm);
}

execute();
