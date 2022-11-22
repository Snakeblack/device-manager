import { pool } from "../../../config/db.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUbication(req, res);
    case "DELETE":
      return await deleteUbication(req, res);
    case "PUT":
      return await updateUbication(req, res);
  }
}

const getUbication = async (req, res) => {
  const { id } = req.query;
  try {
    const [result] = await pool.query(
      `SELECT
        ubicacion.id,
        ubicacion.nombre,
        ubicacion.is_aula,
        red.nombre as red,
        centro.nombre as centro,
        categoria.nombre as categoria
      FROM ubicacion
        INNER JOIN red ON ubicacion.red_id = red.id
        INNER JOIN centro ON red.centro_id = centro.id
        INNER JOIN categoria ON red.categoria_id = categoria.id
      WHERE ubicacion.id = ?`,
      [id]
    );
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUbication = async (req, res) => {
  const { id } = req.query;
  try {
    await pool.query("DELETE FROM ubicacion WHERE id = ?", [id]);
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUbication = async (req, res) => {
  const { id } = req.query;
  const { nombre, is_aula, red_id } = req.body;
  try {
    await pool.query("UPDATE ubicacion SET ? WHERE id = ?", [
      {
        nombre,
        is_aula,
        red_id,
      },
      id,
    ]);
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}