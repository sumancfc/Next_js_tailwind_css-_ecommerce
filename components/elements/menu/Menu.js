import Link from "next/link"
import MegaMenu from "./MegaMenu"
import MenuDropdown from "./MenuDropdown"
import SubMenuDropdown from "./SubMenuDropdown"

export default function Menu({ data, className }) {
  return (
    <ul className={className}>
      {data.map((item, i) => {
        if (item.subMenu) {
          return <MenuDropdown menuData={item} key={i} />
        } else if (item.subMenuDropdown) {
          return <SubMenuDropdown menuData={item} key={i} />
        } else if (item.megaContent) {
          return <MegaMenu menuData={item} key={i} className="primary-menu" />
        } else {
          return (
            <li key={i}>
              {item.type === "dynamic" ? (
                <Link href={`${item.url}/[pid]`}>
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
  )
}
