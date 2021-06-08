import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/outline"
import MenuDropdownMobile from "./MenuDropdownMobile"

export default function MegaMenu({ menuData, openMblNav, className }) {
  return (
    <li className={menuData.megaContent ? "relative menu-item-has-children has-mega-menu" : ""}>
      {className === "primary-menu" ? (
        <Link href="#">
          <a>
            {menuData.text} <ChevronRightIcon className="h-4 ml-1 icon" />
          </a>
        </Link>
      ) : (
        <Link href="#">
          <a onClick={(e) => openMblNav(e)}>
            {menuData.text} <ChevronRightIcon className="h-4 ml-1 icon" />
          </a>
        </Link>
      )}

      {className === "primary-menu" ? (
        <ul className="absolute hidden w-max mx-auto bg-main-gray mega-menu">
          {menuData &&
            menuData.megaContent.map((megaItem) => (
              <div className="p-3" key={megaItem.heading}>
                <h4 className="px-3 text-base  font-medium underline">{megaItem.heading}</h4>
                <ul>
                  {megaItem.megaItems.map((megaSubItem) => (
                    <li key={megaSubItem.text}>
                      {megaSubItem.type === "dynamic" ? (
                        <Link
                          href={`${megaSubItem.url}/[pid]`}
                          as={`${megaSubItem.url}/${megaSubItem.endPoint}`}
                        >
                          <a>{megaSubItem.text}</a>
                        </Link>
                      ) : (
                        <Link href={megaSubItem.url} as={megaSubItem.url}>
                          <a>{megaSubItem.text}</a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </ul>
      ) : (
        <ul className="relative hidden w-full pl-2 top-full left-0 transition-all ease-in duration-500 delay-300 mobile--sub-menu">
          {menuData &&
            menuData.megaContent.map((megaItem, i) => (
              <li className="pb-2" key={i}>
                <a onClick={(e) => openMblNav(e)} className="text-base  font-medium underline">
                  {megaItem.heading}
                  <ChevronRightIcon className="h-4 ml-1 icon" />
                </a>
                {/* <ul> */}
                <ul className="relative hidden w-full pl-2 top-full left-0  z-40 transition-all ease-in-out duration-300 delay-200 mobile--sub-menu">
                  {megaItem.megaItems.map((megaSubItem, index) => (
                    <MenuDropdownMobile menuData={megaSubItem} key={index} />
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      )}
    </li>
  )
}

// import Link from "next/link"
// import { ChevronRightIcon } from "@heroicons/react/outline"

// export default function MegaMenu({ menuData }) {
//   // console.log(menuData)
//   return (
//     <li className={menuData.megaContent ? "relative menu-item-has-children has-mega-menu" : ""}>
//       {menuData.type === "dynamic" ? (
//         <Link href={`${menuData.url}/[pid]`} as={`${menuData.url}/${menuData.endPoint}`}>
//           <a>{menuData.text}</a>
//         </Link>
//       ) : (
//         <Link href={menuData.url} as={menuData.url}>
//           <a>
//             {menuData.text} <ChevronRightIcon className="h-4 ml-1 icon" />
//           </a>
//         </Link>
//       )}
//       <div className="absolute hidden w-max mx-auto bg-main-gray mega-menu">
//         {menuData &&
//           menuData.megaContent.map((megaItem) => (
//             <div className="p-3" key={megaItem.heading}>
//               <h4 className="px-3 text-base  font-medium underline">
//                 {megaItem.heading}
//               </h4>
//               <ul>
//                 {megaItem.megaItems.map((megaSubItem) => (
//                   <li key={megaSubItem.text}>
//                     {megaSubItem.type === "dynamic" ? (
//                       <Link
//                         href={`${megaSubItem.url}/[pid]`}
//                         as={`${megaSubItem.url}/${megaSubItem.endPoint}`}
//                       >
//                         <a>{megaSubItem.text}</a>
//                       </Link>
//                     ) : (
//                       <Link href={megaSubItem.url} as={megaSubItem.url}>
//                         <a>{megaSubItem.text}</a>
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//       </div>
//     </li>
//   )
// }
