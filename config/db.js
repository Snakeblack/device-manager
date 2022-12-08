import { createPool } from "mysql2/promise";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = createPool({
  host_name: DB_HOST || "localhost",
  database: DB_NAME || "dispositivos",
  user_name: DB_USER || "root",
  password: DB_PASSWORD || "snakeblack",
  port: 3306,
});

export { pool };
