import router from "next/router"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import SearchForm from "@/components/elements/search/SearchForm"
import SearchList from "@/components/elements/search/SearchList"
import { getAllProducts } from "redux/actions/productActions"

export default function SearchHeader() {
    const dispatch = useDispatch()

    const [keyword, setKeyword] = useState("")
    const [searchProducts, setSearchProducts] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [searchPanel, setSearchPanel] = useState(false)

    useEffect(() => {
        dispatch(getAllProducts()).then((data) => {
            setSearchProducts(data)
        })
    }, [dispatch, setSearchProducts])

    console.log(searchProducts)

    const handleSearch = (keyword) => {
        setKeyword(keyword)
        console.log(keyword)
        if (keyword !== "") {
            setSearchPanel(true)

            const productLists = searchProducts.filter((product) => {
                return Object.values(product)
                    .join(" ")
                    .toLowerCase()
                    .includes(keyword.toLowerCase())
            })

            setSearchResults(productLists)
        } else {
            setSearchPanel(false)

            setSearchResults(searchProducts)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search?keyword=${keyword}`)
    }

    return (
        <div className="w-full relative">
            <SearchForm keyword={keyword} handleSearch={handleSearch} handleSubmit={handleSubmit} />

            <SearchList
                searchPanel={searchPanel}
                products={keyword.length < 1 ? searchProducts : searchResults}
            />
        </div>
    )
}
