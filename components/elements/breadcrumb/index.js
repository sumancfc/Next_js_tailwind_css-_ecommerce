import Link from "next/link"

export default function Breadcrumb(props) {
    const { parent, child } = props

    return (
        // <div className="bg-gray-100 shadow-md ">
        //   <nav className="py-5 text-center" aria-label="breadcrumb">
        //     <h1 className="mb-2 text-2xl font-bold text-main-red ">{breadcrumb}</h1>
        //     <ol className="flex justify-center leading-none divide-x divide-black  text-base font-normal tracking-wider">
        //       <li className="pr-4">
        //         <Link href="/">
        //           <a>Home</a>
        //         </Link>
        //       </li>
        //       {parent ? (
        //         <li className="px-4">
        //           <Link href="/shop">
        //             <a>{parent}</a>
        //           </Link>
        //         </li>
        //       ) : (
        //         ""
        //       )}
        //       {breadcrumb ? (
        //         <li className="px-4 text-main-red" aria-current="page">
        //           {breadcrumb}
        //         </li>
        //       ) : (
        //         ""
        //       )}
        //     </ol>
        //   </nav>
        // </div>
        <div className="bg-main-gray py-3 shadow-sm">
            <div className="container">
                <ul className="flex justify-start">
                    <li>
                        <Link href="/">
                            <a className="bread-point">Home</a>
                        </Link>
                    </li>
                    {parent && (
                        <li>
                            <Link href="/">
                                <a>{parent}</a>
                            </Link>
                        </li>
                    )}
                    {child && <li>{child}</li>}
                </ul>
            </div>
        </div>
    )
}
