import Layout from "@/components/layout"
import HomePage from "@/components/homepage"
import { API_URL } from "@/config/index"

export default function Home({ categories }) {
  return (
    <Layout>
      <div className="w-full relative">
        <HomePage categories={categories} />
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
