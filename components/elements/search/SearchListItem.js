import { StarIcon } from "@heroicons/react/outline"
import Link from "next/link"

export default function SearchListItem() {
    return (
        <>
            <article className="p-3 flex space-x-4">
                <Link href="">
                    <a>
                        <img
                            loading="lazy"
                            src="/images/products/ear.jpg"
                            alt=""
                            className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100"
                            width="80"
                            height="80"
                        />
                    </a>
                </Link>
                <div className="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
                    <Link href="">
                        <a className="text-sm md:text-lg font-medium md:font-semibold text-black mb-0.5">
                            Hank’s Juiciest Beef Burger
                        </a>
                    </Link>
                    <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
                        <div>
                            <dt className="sr-only">Price</dt>
                            <dd>
                                {/* <abbr title={`Rs. ${recipe.time}`}>Rs. 1000</abbr> */}
                                <abbr title="Rs. 1000">Rs. 1000</abbr>
                            </dd>
                        </div>

                        <div className="flex-none w-full mt-0.5 font-normal">
                            <dt className="inline">By</dt>{" "}
                            <dd className="inline text-black">Himalaya</dd>
                        </div>
                        <div className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                            <dt className="text-amber-500">
                                <span className="sr-only">Rating</span>
                                <StarIcon className="h-5 text-yellow-500" />
                            </dt>
                            <dd>4.5</dd>
                        </div>
                    </dl>
                </div>
            </article>
        </>
    )
}
