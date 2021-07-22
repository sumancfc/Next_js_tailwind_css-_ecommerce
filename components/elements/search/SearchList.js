import SearchListItem from "./SearchListItem"

export default function SearchList({ searchPanel, products }) {
    return (
        <ul
            className={`w-full divide-y divide-gray-400 absolute h-80 bg-white z-50 overflow-y-auto hidden ${
                searchPanel && searchPanel === true ? " active " : ""
            }`}
        >
            {products.length > 0 ? (
                products.map((product, i) => <SearchListItem key={i} product={product} />)
            ) : (
                <h2 className="!h-auto px-5 py-3">No Product Found</h2>
            )}
        </ul>
    )
}
