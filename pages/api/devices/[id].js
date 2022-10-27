export default function handler(req, res) {
  // console.log(req.query);
  // console.log(req.method);
  return res.status(200).json("Getting one device: " + req.query.id);
}