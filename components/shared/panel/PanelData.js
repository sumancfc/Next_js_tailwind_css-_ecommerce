import Link from "next/link"
import { XIcon, ChevronRightIcon } from "@heroicons/react/outline"
import MenuDropdownMobile from "@/components/elements/menu/MenuDropdownMobile"
import MegaMenu from "@/components/elements/menu/MegaMenu"

export default function PanelData({ title, data, style, openMblNav, closeNav }) {
  return (
    <div
      id="sideBarMenu"
      className="w-full h-full fixed top-0 z-50 bg-white transition-all duration-300 ease-in overflow-y-scroll"
      style={style}
    >
      <div className="relative p-2 bg-white text-center shadow-md">
        <h3 className="text-black text-base font-semibold  tracking-wider uppercase">{title}</h3>
        <span
          className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
          onClick={closeNav.bind(this)}
        >
          <XIcon className="h-5" />
        </span>
      </div>
      <div>
        <ul className="relative h-full block px-5">
          {data.map((item, i) => {
            if (item.subMenu) {
              return <MenuDropdownMobile menuData={item} key={i} openMblNav={openMblNav} />
            } else if (item.subMenuDropdown) {
              return (
                <li
                  className={
                    item.subMenuDropdown ? "relative menu-item-has-children sub-dropdown" : ""
                  }
                  key={i}
                >
                  <Link href="#">
                    <a onClick={(e) => openMblNav(e)}>
                      {item.text} <ChevronRightIcon className="h-4 ml-1 icon" />
                    </a>
                  </Link>

                  {item.subMenuDropdown ? (
                    <ul className="relative hidden w-full pl-2 top-full left-0 transition-all ease-in duration-500 delay-300 mobile--sub-menu">
                      {item.subMenuDropdown.map((subMenuItem, index) => {
                        return (
                          <div key={index}>
                            {subMenuItem.subSubMenu ? (
                              <li
                                className={
                                  subMenuItem.subSubMenu
                                    ? "relative menu-item-has-children sub--drop-down"
                                    : ""
                                }
                              >
                                <Link href="#">
                                  <a onClick={(e) => openMblNav(e)}>
                                    {subMenuItem.text}{" "}
                                    <ChevronRightIcon className="h-4 ml-1 icon" />
                                  </a>
                                </Link>
                                <ul className="relative hidden w-full pl-2 top-full left-0  z-40 transition-all ease-in-out duration-300 delay-200 mobile--sub-menu">
                                  {subMenuItem.subSubMenu.map((subMenuItem, index) => (
                                    <MenuDropdownMobile menuData={subMenuItem} key={index} />
                                  ))}
                                </ul>
                              </li>
                            ) : (
                              <MenuDropdownMobile menuData={subMenuItem} key={index} />
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
            } else if (item.megaContent) {
              return <MegaMenu menuData={item} key={i} openMblNav={openMblNav} />
            } else {
              return (
                <li key={i}>
                  {item.type === "dynamic" ? (
                    <Link href={item.url}>
                      <a className="menu-dropdown">{item.text}</a>
                    </Link>
                  ) : (
                    <Link href={item.url}>
                      <a className="menu-dropdown">{item.text}</a>
                    </Link>
                  )}
                </li>
              )
            }
          })}
        </ul>
      </div>
    </div>
  )
}
