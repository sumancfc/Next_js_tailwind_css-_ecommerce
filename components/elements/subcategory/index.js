import Image from "next/image"
import Link from "next/link"

// export default function SubCategories({ subcategories }) {
//   return (
//     <>
//       {subcategories.map((category) => (
//         <div className="col-span-1" key={category.id}>
//           <div className="text-center transition-all duration-300 ease-linear border border-gray-200">
//             {/* <Link href={`/categories/[slug]`} as={`/categories/${category.slug}`}> */}
//             <Link href={`/categories/${category.slug}/hello`}>
//               <a className=" w-full h-full group">
//                 <Image
//                   src={category.image}
//                   alt={category.title}
//                   width={120}
//                   height={120}
//                   quality={100}
//                 />
//                 <p className="mb-2 text-sm  hover:text-main-red">{category.title}</p>
//               </a>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   )
// }

export default function SubCategories({ subcategories }) {
  // console.log(subcategories)
  return (
    <>
      {subcategories.sub.map((category) => (
        <div className="col-span-1" key={category.id}>
          <div className="text-center transition-all duration-300 ease-linear border border-gray-200">
            <Link
              href={`/categories/[subcategories]/[slug]`}
              as={`/categories/${subcategories.slug}/${category.slug}`}
            >
              {/* <Link href={`/categories/${subcategories.slug}/${category.slug}`}> */}
              <a className=" w-full h-full group">
                <Image
                  loading="lazy"
                  src={category.image}
                  alt={category.title}
                  width={120}
                  height={120}
                  quality={100}
                />
                <p className="mb-2 text-sm  hover:text-main-red">{category.title}</p>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}
