import { pool } from "../../../config/db.js";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getDevice(req, res);
    case "DELETE":
      return await deleteDevice(req, res);
    case "PUT":
      return await updateDevice(req, res);
  }
}

const getDevice = async (req, res) => {
  const { id } = req.query;
  const [result] = await pool.query(
    `SELECT dispositivo.id, dispositivo.nombre, dispositivo.marca, dispositivo.modelo, dispositivo.serial_number, dispositivo.sistema_operativo, dispositivo.cpu, dispositivo.ram, dispositivo.disco_duro, dispositivo.congelado, dispositivo.detalles, dispositivo.ubicacion_id, ubicacion.nombre as ubicacion, ubicacion.is_aula,red.nombre as red, centro.nombre as centro, dispositivo.categoria_id, categoria.nombre as categoria, dispositivo.tipodispositivo_id, tipodispositivo.nombre as tipo_dispositivo
    FROM dispositivo
      INNER JOIN ubicacion
        ON dispositivo.ubicacion_id = ubicacion.id
      INNER JOIN red
        ON ubicacion.red_id = red.id
      INNER JOIN centro
        ON red.centro_id = centro.id
      INNER JOIN categoria
        ON red.categoria_id = categoria.id
      INNER JOIN tipodispositivo
        ON dispositivo.tipodispositivo_id = tipodispositivo.id
    WHERE dispositivo.id = ?`,
    [id]
  );
  return res.status(200).json(result[0]);
};

const deleteDevice = async (req, res) => {
  const { id } = req.query;

  const [result] = await pool.query(
    `DELETE FROM dispositivo WHERE id = ?`,
    [id]
  );

  return res.status(204).json(result);
};

const updateDevice = async (req, res) => {
  const { id } = req.query;

  const {
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
    categoria_id,
    tipodispositivo_id,
  } = req.body;

  try {
    await pool.query(
      `UPDATE dispositivo SET ? WHERE id = ${id}`,
      {
        nombre,
        marca,
        modelo : modelo == "" ? null : modelo,
        serial_number : serial_number == "" ? null : serial_number,
        sistema_operativo : sistema_operativo == "" ? null : sistema_operativo,
        cpu : cpu == "" ? null : cpu,
        ram : ram == "" ? null : ram,
        disco_duro: disco_duro == "" ? null : disco_duro,
        congelado,
        detalles : detalles == "" ? null : detalles,
        ubicacion_id,
        categoria_id,
        tipodispositivo_id,
      },
    );

    return res.status(204).json();
  } catch (error) {
    console.log(error.message);
  }

  
}