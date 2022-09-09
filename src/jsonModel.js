const withSequelize = (projectName) => `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./src/tests"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-async-errors": "^3.1.1",
    "helmet": "^6.0.0",
    "joi": "^17.6.0",
    "mysql2": "^2.3.3",
    "sequelize": "^6.21.4",
    "sequelize-cli": "^6.4.1"
  },
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "sinon": "^14.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`

const withoutSequelize = (projectName) => `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./src/tests"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.2",
    "express": "^4.18.1",
    "express-async-errors": "^3.1.1",
    "helmet": "^6.0.0",
    "joi": "^17.6.0",
    "mysql2": "^2.3.3"
  },
  "devDependencies": {
    "chai": "^4.3.6",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "sinon": "^14.0.0"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`

module.exports = {
  withSequelize,
  withoutSequelize,
};
