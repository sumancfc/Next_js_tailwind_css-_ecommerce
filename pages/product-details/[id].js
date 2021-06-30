import React from "react"
import { API_URL, PRODUCT_API_URL } from "@/config/index"
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
    const response = await fetch(`${PRODUCT_API_URL}/api/products/${id}`)
    const product = await response.json()

    if (!product) return { notFound: true }

    // console.log(product)
    // const response = await fetch(`${API_URL}/api/products/${id}`)
    // // console.log(response)
    // const product = await response.json()

    return {
        // props: { product: product[0] },
        props: { product },
    }
}

export default React.memo(ProductDetaisPage)
