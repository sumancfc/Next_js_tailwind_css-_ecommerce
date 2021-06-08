import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/outline"

export default function MenuDropdownMobile({ menuData, openMblNav }) {
  // console.log(menuData.url)
  return (
    <li className={menuData.subMenu ? "relative menu-item-has-children dropdown" : ""}>
      <Link href={menuData.url}>
        <a className="hover:text-main-red " onClick={(e) => openMblNav(e)}>
          {menuData.text}
          <span className="sub-icon">
            {menuData.subMenu ? <ChevronRightIcon className="h-5 icon" /> : ""}
          </span>
        </a>
      </Link>

      {menuData.subMenu ? (
        <ul className="relative hidden w-full pl-2 top-full left-0 transition-all ease-in duration-500 delay-300 mobile--sub-menu">
          {menuData.subMenu.map((subMenuItem, index) => (
            <MenuDropdownMobile menuData={subMenuItem} key={index} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  )
}
