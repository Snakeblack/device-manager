import { pool } from '../../../config/db.js'

export default async function handlerCategoy(req, res) {
  if (req.method === 'GET') {
    const [result] = await pool.query(`SELECT * FROM categoria`)
    return res.status(200).json(result)
  } else if (req.method === 'POST') {
    const { nombre } = req.body
    const [result] = await pool.query('INSERT INTO categoria SET ?', {
      nombre
    })
    return res.status(200).json({
      nombre,
      id: result.insertId
    })
  }
}
