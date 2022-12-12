import { pool } from "../../../config/db.js";

export default async function handlerCenter(req, res) {
  switch (req.method) {
    case "GET":
      return await getCenter(req, res);
    case "POST":
      return await saveCenter(req, res);
  }
}

const getCenter = async (req, res) => {
  const [result] = await pool.query(
    `SELECT *
    FROM centro`
  );

  return res.status(200).json(result);
};

const saveCenter = async (req, res) => {
  const { nombre, direccion } = req.body;

  const [result] = await pool.query("INSERT INTO centro SET ?", {
    nombre,
    direccion,
  });

  return res.status(200).json({
    nombre,
    direccion,
    id: result.insertId,
  });
};
