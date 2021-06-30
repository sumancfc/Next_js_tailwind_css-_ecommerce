import ProductDetailImage from "./productDetailImage"
import ProductDetailsOne from "./productDetailContent/ProductDetailsOne"
import ProductDetailTab from "./productDetailTab"
import ProductGrid from "../shop/ProductGrid"
import ProductDetailContentCopy from "./productDetailContent/copy"
import SectionTitle from "../elements/title/SectionTitle"

export default function ProductDetails({ product }) {
    // console.log(product)
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* <ProductDetailImage product={product} /> */}
                {/* <ProductDetailsOne product={product} /> */}
                <ProductDetailContentCopy product={product} />
            </div>
            {/* <ProductDetailTab product={product} /> */}
            {/* <div>
                <SectionTitle title="related Products" />

                <p className="text-2xl text-center pt-10">No Related Product Found.</p>
            </div> */}
        </>
    )
}
