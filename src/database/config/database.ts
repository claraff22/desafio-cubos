import 'dotenv/config';
import Sequelize from 'sequelize';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_NAME,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  dialect: 'postgres',
}

module.exports = config;  
