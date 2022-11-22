import { pool } from "../../../config/db.js";

export default async function handlerRed(req, res) {
  switch (req.method) {
    case "GET":
      return await getRed(req, res);
    case "POST":
      return await saveRed(req, res);
  }
}

const getRed = async (req, res) => {
  const [result] = await pool.query(
    `SELECT red.id, red.nombre as nombre, categoria_id, categoria.nombre as categoria, centro_id, centro.nombre as centro
    FROM red
    INNER JOIN categoria ON categoria.id = red.categoria_id
    INNER JOIN centro ON centro.id = red.centro_id`
  );
  return res.status(200).json(result);
};

const saveRed = async (req, res) => {
  const { nombre, categoria_id, centro_id } = req.body;

  try {
    const [result] = await pool.query("INSERT INTO red SET ?", {
      nombre,
      categoria_id,
      centro_id,
    });
  
    return res.status(200).json({
      nombre,
      categoria_id,
      centro_id,
      id: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  
};