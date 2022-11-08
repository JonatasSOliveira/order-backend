import { Sequelize } from "sequelize";

const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_PORT = Number(process.env.DATABASE_PORT);
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize({
  dialect: "mysql",
  database: DATABASE_NAME,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
});

export default sequelize;
