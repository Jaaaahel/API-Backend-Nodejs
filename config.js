require('dotenv').config();
// const fs = require('fs');

module.exports = {
  default: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
