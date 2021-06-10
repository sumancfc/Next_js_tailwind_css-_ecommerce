const { categories } = require("./category.json")

export default (req, res) => {
  if (req.method === "GET") {
    console.log(categories)
    res.status(200).json(categories)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
