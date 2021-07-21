import { PRODUCT_API_URL } from "@/config/index"

export default (req, res) => {
    const product = products.filter((pro) => pro.id === req.query.id)
    if (req.method === "GET") {
        const response = await fetch(`${PRODUCT_API_URL}/products/products`)

        const products = await response.json()

        if (response.ok) {
            res.status(200).json(products)
        } else {
            res.json({ err: err.message })
        }
    } else {
        res.setHeader("Allow", ["GET"])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}
