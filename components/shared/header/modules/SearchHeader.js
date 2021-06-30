import SearchForm from "@/components/elements/search/SearchForm"
import SearchList from "@/components/elements/search/SearchList"
import router from "next/router"
import { useState } from "react"

export default function SearchHeader() {
    const [keyword, setKeyword] = useState("")
    const [searchPanel, setSearchPanel] = useState(false)

    const handleSearch = (e) => {
        if (e.target.value !== "") {
            setKeyword(e.target.value)
            setSearchPanel(true)
        } else {
            setSearchPanel(false)
            setKeyword("")
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
