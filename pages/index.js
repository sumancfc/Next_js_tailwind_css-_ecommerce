import Layout from "@/components/layout"
import HomePage from "@/components/homepage"
import { API_URL } from "@/config/index"

export default function Home({ categories, products }) {
  return (
    <Layout>
      <div className="w-full relative">
        <HomePage categories={categories} products={products} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/categories`)
  const res = await fetch(`${API_URL}/api/products`)

  const categories = await response.json()
  const products = await res.json()

  // console.log(products)

  return {
    props: { categories, products: products.slice(0, 6) },
    revalidate: 2,
  }
}
