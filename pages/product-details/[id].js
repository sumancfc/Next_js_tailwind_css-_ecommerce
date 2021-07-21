import React from "react"
import { PRODUCT_API_URL } from "@/config/index"
import Layout from "@/components/layout"
import ProductDetails from "@/components/productDetails"

function ProductDetaisPage({ product }) {
    console.log(product)
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

export async function getServerSideProps(context) {
    const { id } = context.query

    //api with backend
    const response = await fetch(`${PRODUCT_API_URL}/products/products/${id}`)

    const product = await response.json()

    if (!product) return { notFound: true }

    return {
        props: { product: product },
    }
}

export default React.memo(ProductDetaisPage)
