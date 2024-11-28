const { v4: uuidv4 } = require("uuid");

export default function handler(req, res) {
  if (req.method === "POST") {
    const key = uuidv4();
    res.status(200).json({ key });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}