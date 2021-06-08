import Link from "next/link"

export default function MenuDropdown({ menuData }) {
  return (
    <li className={menuData.subMenu ? "relative menu-item-has-children dropdown" : ""}>
      <Link href={menuData.url}>
        <a>{menuData.text}</a>
      </Link>

      {menuData.subMenu ? (
        <ul className="absolute hidden w-max top-full left-0 bg-main-gray z-40 transition-all ease-in-out duration-300 delay-200 sub-menu">
          {menuData.subMenu.map((subMenuItem, index) => (
            <MenuDropdown menuData={subMenuItem} key={index} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  )
}
