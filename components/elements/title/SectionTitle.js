import Link from "next/link"

export default function SectionTitle({ title = "Best Products", url }) {
  return (
    <div className="py-3 border-b-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl sm:text-2xl  font-semibold text-black capitalize tracking-wide">
            {title}
          </h2>
        </div>
        {url ? (
          <div>
            <Link href={`${url}`}>
              <a className="py-2 px-2 sm:px-3 bg-main-blue rounded text-xs sm:text-sm text-white  font-normal uppercase">
                View All
              </a>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}
