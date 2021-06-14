import { connect } from "react-redux"
import { API_URL } from "@/config/index"
import Layout from "@/components/layout"
import ProductDetailContent from "@/components/productDetails/productDetailContent"
import ProductDetailImage from "@/components/productDetails/productDetailImage"
import ProductDetailsOne from "@/components/productDetails/productDetailContent/ProductDetailsOne"

function ProductSlug({ product, cartItems }) {
  return (
    <Layout pageTitle={product.name} parent="Product">
      <div className="w-full relative">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <ProductDetailImage product={product} /> */}
            {/* <ProductDetailsOne product={product} cartItems={cartItems} /> */}
            <ProductDetailContent product={product} cartItems={cartItems} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  // const response = await fetch(`${API_URL}/api/products/${slug}`)
  const response = await fetch(`${API_URL}/api/product/${slug}`)

  const products = await response.json()

  const product = products[0]

  if (!product) return { notFound: true }

  return {
    props: { product },
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
  }
}

export default connect(mapStateToProps)(ProductSlug)
