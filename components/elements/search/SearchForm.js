import { useRef } from "react"

export default function SearchForm({ keyword, handleSearch, handleSubmit }) {
    const inputEl = useRef("")

    const getSearchTerm = () => {
        handleSearch(inputEl.current.value)
    }

    return (
        <form className="relative" onSubmit={handleSubmit}>
            <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
            </svg>
            <input
                ref={inputEl}
                className="focus:border-main-blue h-12 focus:ring-1 focus:ring-main-blue focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-700 rounded-md py-2 pl-10"
                type="search"
                aria-label="I'm shopping for ..."
                placeholder="I'm shopping for ..."
                value={keyword}
                onChange={getSearchTerm}
            />
        </form>
    )
}
