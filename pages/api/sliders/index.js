const { sliders } = require("./slider.json")

export default (req, res) => {
  if (req.method === "GET") return res.status(200).json(sliders)
  else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
