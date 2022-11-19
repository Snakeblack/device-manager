import { pool } from "../../../config/db.js";

export default async function handlerUbication(req, res) {
  switch (req.method) {
    case "GET":
      return await getUbication(req, res);
    case "POST":
      return await saveUbication(req, res);
  }
}

const getUbication = async (req, res) => {
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
      INNER JOIN categoria ON red.categoria_id = categoria.id`
  );
  return res.status(200).json(result);
};

const saveUbication = async (req, res) => {
  const { nombre, is_aula, red_id, categoria_id } = req.body;

  const [result] = await pool.query("INSERT INTO ubcacion SET ?", {
    nombre,
    is_aula,
    red_id,
    categoria_id,
  });

  return res.status(200).json({
    nombre,
    is_aula,
    red_id,
    categoria_id,
    id: result.insertId,
  });
};
