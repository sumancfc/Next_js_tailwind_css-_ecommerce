import { SearchIcon } from "@heroicons/react/outline"

export default function SearchHeader({ className }) {
    return (
        <div className={className}>
            <form className="flex items-center">
                <input
                    type="search"
                    className="form"
                    type="text"
                    placeholder="I'm shopping for ..."
                    required
                />
                <button type="submit" className="bg-main-blue h-10 focus:outline-none">
                    <SearchIcon className="h-6 w-16 text-white" />
                </button>
            </form>
        </div>
    )
}
