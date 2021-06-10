const { categories } = require("./category.json")

export default (req, res) => {
  const category = categories.filter((cat) => cat.slug === req.query.slug)
  if (req.method === "GET") {
    res.status(200).json(category)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
