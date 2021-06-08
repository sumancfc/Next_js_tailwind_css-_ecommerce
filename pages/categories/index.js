import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import Category from "@/components/elements/category"

export default function Categories({ categories }) {
  return (
    <Layout pageTitle="Our Categories">
      <div className="w-full relative">
        <div className="container bg-white my-10 py-6">
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
