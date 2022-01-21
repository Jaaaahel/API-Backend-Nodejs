const { Sequelize } = require('sequelize');

let sequelize = null;

const getDBInstance = () => {
  if (sequelize != null) {
    return sequelize;
  }

  if (process.env.NODE_ENV === 'test') {
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USERNAME,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: 'mysql',
      },
    );
  }

  return sequelize;
};

module.exports = { getDBInstance };
