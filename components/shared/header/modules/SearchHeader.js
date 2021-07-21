import router from "next/router"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchForm from "@/components/elements/search/SearchForm"
import SearchList from "@/components/elements/search/SearchList"
import { getAllProducts } from "redux/actions/productActions"

export default function SearchHeader() {
    const dispatch = useDispatch()
    const productLists = useSelector((state) => state.productLists)
    const { products } = productLists

    const [keyword, setKeyword] = useState("")
    const [searchProduct, setSearchProduct] = useState(products)
    const [searchPanel, setSearchPanel] = useState(false)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    console.log(searchProduct)

    const searchByProductName = (keyword, object) => {
        let matches = []
        let regexp = new RegExp(keyword.toLowerCase(), "g")

        object.forEach((product) => {
            if (product.title.toLowerCase().match(regexp)) matches.push(product)
        })
        return matches
    }

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            setKeyword(e.target.value)
            setSearchPanel(true)
            setSearchProduct: searchByProductName(e.target.value, products)
        } else {
            setSearchPanel(false)
            setKeyword("")
            setSearchProduct([])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search?keyword=${keyword}`)
    }

    return (
        <div className="w-full relative">
            <SearchForm keyword={keyword} handleSearch={handleSearch} handleSubmit={handleSubmit} />

            <SearchList searchPanel={searchPanel} />
        </div>
    )
}
