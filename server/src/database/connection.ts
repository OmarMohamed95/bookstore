import { Sequelize, Dialect } from 'sequelize'

const DB_NAME: string = process.env.DB_NAME || 'bookstore';
const DB_HOST: string = process.env.DB_HOST || 'localhost';
const DB_USER: string = process.env.DB_USER || 'root';
const DB_PASS: string = process.env.DB_PASS || 'root';
const DB_DIALECT: Dialect = <Dialect> process.env.DB_DIALECT || 'mysql';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT
});

export default sequelize