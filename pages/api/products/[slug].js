import { PRODUCT_API_URL } from "@/config/index"
import { products } from "./products.json"

export default (req, res) => {
    const product = products.filter((pro) => pro.id === req.query.id)
    if (req.method === "GET") {
        res.status(200).json(product)
    } else {
        res.setHeader("Allow", ["GET"])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}
