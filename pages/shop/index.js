import Layout from "@/components/layout"
import LeftSidebar from "@/components/shop/LeftSidebar"
import ProductGrid from "@/components/shop/ProductGrid"
import { API_URL } from "@/config/index"

export default function ShopPage({ products }) {
    return (
        <Layout pageTitle="Our Products">
            <div className="w-full relative">
                <div className="container py-10">
                    <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-6">
                        <LeftSidebar products={products} />
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/products`)
    const products = await response.json()

    return {
        props: { products },
        revalidate: 1,
    }
}
