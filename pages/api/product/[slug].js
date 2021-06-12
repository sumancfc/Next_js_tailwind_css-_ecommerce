const { products } = require("./product.json")

export default (req, res) => {
  const product = products.filter((pro) => pro.slug === req.query.slug)
  if (req.method === "GET") {
    res.status(200).json(product)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }
}
