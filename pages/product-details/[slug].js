import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import ProductDetailContent from "@/components/productDetails/productDetailContent"
import ProductDetailImage from "@/components/productDetails/productDetailImage"

export default function ProductSlug({ product }) {
  return (
    <Layout pageTitle={product.name} parent="Product">
      <div className="w-full relative">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductDetailImage product={product} />
            <ProductDetailContent />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  // console.log(slug)
  const response = await fetch(`${API_URL}/api/products/${slug}`)

  const products = await response.json()

  return {
    props: { product: products[0] },
  }
}
