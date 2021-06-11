import Layout from "@/components/layout"
import HomePage from "@/components/homepage"
import { API_URL } from "@/config/index"

export default function Home({ categories, products, sliders }) {
  return (
    <Layout>
      <div className="w-full relative">
        <HomePage categories={categories} products={products} sliders={sliders} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${API_URL}/api/categories`)
  const res = await fetch(`${API_URL}/api/products`)
  const sliderRes = await fetch(`${API_URL}/api/sliders`)

  const categories = await response.json()
  const products = await res.json()
  const sliders = await sliderRes.json()

  // console.log(products)

  return {
    props: { categories, products: products.slice(0, 6), sliders },
    revalidate: 2,
  }
}
