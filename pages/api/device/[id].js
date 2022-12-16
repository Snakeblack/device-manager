import { pool } from '../../../config/db.js'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getDevice(req, res)
    case 'DELETE':
      return await deleteDevice(req, res)
    case 'PUT':
      return await updateDevice(req, res)
  }
}

const getDevice = async (req, res) => {
  try {
    const { id } = req.query
    const query = `
      SELECT
        d.id,
        d.nombre,
        d.marca,
        d.modelo,
        d.serial_number,
        d.sistema_operativo,
        d.cpu,
        d.ram,
        d.disco_duro,
        d.congelado,
        d.detalles,
        d.ubicacion_id,
        u.nombre as ubicacion,
        u.is_aula,
        r.nombre as red,
        c.nombre as centro,
        d.categoria_id,
        ca.nombre as categoria,
        d.tipodispositivo_id,
        td.nombre as tipo_dispositivo
      FROM dispositivo d
      INNER JOIN ubicacion u ON d.ubicacion_id = u.id
      INNER JOIN red r ON u.red_id = r.id
      INNER JOIN centro c ON r.centro_id = c.id
      INNER JOIN categoria ca ON r.categoria_id = ca.id
      INNER JOIN tipodispositivo td ON d.tipodispositivo_id = td.id
      WHERE d.id = ?
    `
    const [result] = await pool.query(query, [id])
    return res.status(200).json(result[0])
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const deleteDevice = async (req, res) => {
  try {
    const { id } = req.query
    await pool.query(`DELETE FROM dispositivo WHERE id = ?`, [id])
    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

const updateDevice = async (req, res) => {
  try {
    const { id } = req.query
    const {
      nombre,
      marca,
      modelo = null,
      serial_number = null,
      sistema_operativo = null,
      cpu = null,
      ram = null,
      disco_duro = null,
      congelado,
      detalles = null,
      cuenta_office = null,
      ubicacion_id,
      categoria_id,
      tipodispositivo_id
    } = req.body

    await pool.query(`UPDATE dispositivo SET ? WHERE id = ${id}`, {
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
      cuenta_office,
      ubicacion_id,
      categoria_id,
      tipodispositivo_id
    })

    return res.status(204).json()
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
