import {pool} from '../../../config/db.js'

export default async function handlerTipoDispositivo(req, res) {

  switch (req.method) {
    case 'GET':
      return await getDeviceType(req, res);
    case 'POST':
      return await saveDeviceType(req, res);
  }
}

const getDeviceType = async (req, res) => {
  const [result] = await pool.query(`
  SELECT * FROM tipodispositivo`);
  return res.status(200).json(result);
}

const saveDeviceType = async (req, res) => {
  const {
    nombre
  } = req.body;

  const [result] = await pool.query('INSERT INTO tipodispositivo SET ?', {
    nombre
  });

  return res
    .status(200)
    .json({
      nombre,
      id: result.insertId
    });
};