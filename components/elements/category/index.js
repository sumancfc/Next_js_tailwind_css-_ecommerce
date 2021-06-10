import Image from "next/image"
import Link from "next/link"

// export default function Category({ categories, className }) {
//   return (
//     <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6 ${className}`}>
//       {categories.map((category) => (
//         <div className="col-span-1 group" key={category.id}>
//           <div className="text-center transition-all duration-300 ease-linear border border-gray-300 group-hover:border-red-500">
//             <Link href={`/categories/[slug]`} as={`/categories/${category.slug}`}>
//               <a className=" w-full h-full group">
//                 <Image src={category.image} alt="" width={120} height={120} quality={100} />
//                 <p className="mb-2 text-sm  group-hover:text-red-800">{category.title}</p>
//               </a>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
export default function Category({ categories, className }) {
  return (
    <div className={`grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 md:gap-6 ${className}`}>
      {categories.map((category) => (
        <div className="col-span-1 group" key={category.id}>
          <div className="text-center transition-all duration-300 ease-linear border border-gray-300 group-hover:border-red-500">
            <Link href={`/categories/[subcategories]`} as={`/categories/${category.slug}`}>
              <a className=" w-full h-full group">
                <Image src={category.image} alt="" width={120} height={120} quality={100} />
                <p className="mb-2 text-sm  group-hover:text-red-800">{category.title}</p>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
