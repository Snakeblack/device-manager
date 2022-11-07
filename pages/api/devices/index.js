import {pool} from '../../../config/db.js'

export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return await getDevices(req, res);
    case 'POST':
      return await saveDevice(req, res);
  }
}

const getDevices = async (req, res) => {
  const [result] = await pool.query('SELECT * FROM dispositivo');
  return res.status(200).json(result);
}

const saveDevice = async (req, res) => {
  const {nombre, marca, modelo, serial_number, sistema_operativo, cpu, ram, disco_duro, congelado, detalles, ubicacion_id, tipodispositivo_id, categoria_id} = req.body;

  const [result] = await pool.query('INSERT INTO dispositivo SET ?', {
    nombre,
    marca,
    modelo,
    serial_number,
    sistema_operativo,
    cpu,
    ram,
    disco_duro,
    congelado,
    detalles,
    ubicacion_id,
    tipodispositivo_id,
    categoria_id
  });

  return res
    .status(200)
    .json({nombre, marca, modelo, serial_number, sistema_operativo, cpu, ram, disco_duro, congelado, detalles, ubicacion_id, tipodispositivo_id, categoria_id, id: result.insertId});
};