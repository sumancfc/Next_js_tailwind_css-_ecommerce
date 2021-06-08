import Link from "next/link"
import { ChevronRightIcon } from "@heroicons/react/outline"
import MenuDropdown from "./MenuDropdown"

export default function SubMenuDropdown({ menuData }) {
  return (
    <li className={menuData.subMenuDropdown ? "relative menu-item-has-children sub-dropdown" : ""}>
      <Link href={menuData.url}>
        <a>
          {menuData.text} <ChevronRightIcon className="h-4 ml-1" />
        </a>
      </Link>

      {menuData.subMenuDropdown ? (
        <ul className="absolute hidden w-max top-0 left-full bg-main-white z-40 transition-all ease-in-out duration-300 delay-200 category--sub-menu">
          {menuData.subMenuDropdown.map((subMenuItem, index) => {
            return (
              <div key={index}>
                {subMenuItem.subSubMenu ? (
                  <li
                    className={
                      subMenuItem.subSubMenu ? "relative menu-item-has-children sub--drop-down" : ""
                    }
                  >
                    <Link href={menuData.url}>
                      <a>
                        {subMenuItem.text} <ChevronRightIcon className="h-4 ml-1 icon" />
                      </a>
                    </Link>
                    <ul className="absolute hidden w-max top-0 left-full bg-main-light z-40 transition-all ease-in-out duration-300 delay-200 sub--category-menu">
                      {subMenuItem.subSubMenu.map((subMenuItem, index) => (
                        <MenuDropdown menuData={subMenuItem} key={index} />
                      ))}
                    </ul>
                  </li>
                ) : (
                  <MenuDropdown menuData={subMenuItem} key={index} />
                )}
              </div>
            )
          })}
        </ul>
      ) : (
        ""
      )}
    </li>
  )
}
