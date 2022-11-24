import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.BD_USER || 
  "root",
  password: process.env.DB_PASSWORD || 
  "snake",
  port: process.env.BD_PORT ||
  3306,
  database: process.env.BD_DATABASE ||
  "dispositivos",
});

export { pool };
