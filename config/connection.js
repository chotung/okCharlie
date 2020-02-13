const Sequelize = require('sequelize');
require("dotenv").config()

const { DATABASE, DATABASE_USER, DATABASE_PASSWORD } = process.env
const sequelize = new Sequelize(DATABASE, DATABASE_USER, DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: mysql /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

