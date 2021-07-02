import Link from "next/link"

const Title = ({ title }) => {
    return <h1 className="text-lg sm:text-4xl font-bold capitalize">{title}</h1>
}

const SectionTitle = ({ title = "Best Products", url }) => {
    return (
        <div className="py-3 border-b-2">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="inline-block text-xl sm:text-2xl font-semibold text-black m-0 uppercase">
                        {title}
                    </h2>
                </div>
                {url ? (
                    <div>
                        <Link href={`${url}`}>
                            <a className="text-sm font-medium uppercase"> View All</a>
                        </Link>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

export { Title, SectionTitle }
