import { pool } from "../../../config/db.js";

export default async function handlerCategoy(req, res) {
  switch (req.method) {
    case "GET":
      return await getCategory(req, res);
    case "POST":
      return await saveCategory(req, res);
  }
}

const getCategory = async (req, res) => {
  const [result] = await pool.query(`SELECT * FROM categoria`);

  return res.status(200).json(result);
};

const saveCategory = async (req, res) => {
  const { nombre } = req.body;

  const [result] = await pool.query("INSERT INTO categoria SET ?", {
    nombre,
  });

  return res.status(200).json({
    nombre,
    id: result.insertId,
  });
};
