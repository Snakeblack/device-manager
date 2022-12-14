import { createPool } from "mysql2/promise";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

const pool = createPool({
  user: DB_USER,
  database: DB_DATABASE,
  host: DB_HOST,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export { pool };
