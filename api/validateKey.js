const keys = {};

export default function handler(req, res) {
  const { key } = req.query;

  if (req.method === "GET") {
    if (keys[key]) {
      res.status(200).json({ valid: true });
    } else {
      res.status(404).json({ valid: false });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}