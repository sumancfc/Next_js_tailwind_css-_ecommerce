import SearchListItem from "./SearchListItem"

export default function SearchList({ searchPanel }) {
    return (
        <ul
            className={`w-full divide-y divide-gray-400 absolute h-80 bg-white z-50 overflow-y-auto hidden ${
                searchPanel && searchPanel === true ? " active " : ""
            }`}
        >
            {[1, 2, 3, 4].map((list, i) => (
                <SearchListItem key={i} list={list} />
            ))}
        </ul>
    )
}
