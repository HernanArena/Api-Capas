require("dotenv").config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./development');
const QA = require('./qa');
const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

switch(NODE_ENV){
  case "production":   currentEnv = PRODUCTION;
  break;
  case "development":   currentEnv = DEVELOPMENT;
  break;
  case "qa":   currentEnv = QA;
  break;
  default:     currentEnv = DEVELOPMENT;
  break;
}


module.exports = currentEnv;
