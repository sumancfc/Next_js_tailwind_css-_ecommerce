import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import Category from "@/components/elements/category"

export default function CategoriesPage({ categories }) {
    return (
        <Layout pageTitle="Our Categories">
            <div className="w-full relative">
                <div className="px-8 py-16 bg-white">
                    <Category categories={categories} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const response = await fetch(`${API_URL}/api/categories`)

    const categories = await response.json()

    return {
        props: { categories },
        revalidate: 2,
    }
}
