import { BACKEND_URL } from "@/config/index"

// const { products } = require("./products.json")

export default async (req, res) => {
    if (req.method === "GET") {
        const response = await fetch(`${BACKEND_URL}/api/products`)
        const products = await response.json()

        res.status(200).json(products)
        // if (response.statusText === OK) {
        // }
    } else {
        res.setHeader("Allow", ["GET"])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}
