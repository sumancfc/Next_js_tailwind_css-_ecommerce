import Product from "../elements/product/Product"

export default function ProductGrid({ products }) {
  return (
    <div className="col-span-2 sm:col-span-3 lg:col-span-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.length === 0 ? <h3>No Products Found</h3> : <Product products={products} />}
      </div>
    </div>
  )
}
