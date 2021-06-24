import React from "react"
import { API_URL, BACKEND_URL } from "@/config/index"
import Layout from "@/components/layout"
import ProductDetails from "@/components/productDetails"

function ProductDetaisPage({ product }) {
    // console.log(product)
    return (
        <Layout pageTitle={product.name} parent="Product">
            <div className="w-full relative">
                <div className="container py-10">
                    <ProductDetails product={product} />
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { id } }) {
    //api with backend
    const response = await fetch(`${BACKEND_URL}/api/products/${id}`)
    const product = await response.json()

    // console.log(product)

    if (!product) return { notFound: true }

    return {
        props: { product },
    }

    //api from api file
    // const response = await fetch(`${API_URL}/api/products/${slug}`)
    // const response = await fetch(`${API_URL}/api/product/${slug}`)

    // const products = await response.json()

    // const product = products[0]

    // console.log(product)

    // if (!product) return { notFound: true }

    // return {
    //     props: { product },
    // }
}

export default React.memo(ProductDetaisPage)
