import Link from "next/link"
import { MenuIcon, ViewGridIcon, ShoppingCartIcon, HomeIcon } from "@heroicons/react/outline"

export default function NavigationIcon({ openMenu, openCategoryMenu }) {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full px-2.5 py-3 bg-white border-t border-gray-300">
      <div className="max-w-sm mx-auto flex justify-between items-center text-gray-600">
        {/* Home Button */}
        <Link href="/">
          <a className="flex flex-col hover:text-main-blue transition duration-200 ease-in">
            <HomeIcon className="h-5" />
            <span className="mt-1  text-sm"> Home</span>
          </a>
        </Link>

        {/* Menu Button */}
        <a
          className="flex flex-col hover:text-main-blue cursor-pointer transition duration-200 ease-in"
          onClick={openMenu.bind(this)}
        >
          <MenuIcon className="h-5" />
          <span className="mt-1  text-sm"> Menu</span>
        </a>

        {/* Category Button */}
        <a
          className="flex flex-col hover:text-main-blue cursor-pointer transition duration-200 ease-in"
          onClick={openCategoryMenu.bind(this)}
        >
          <ViewGridIcon className="h-5" />
          <span className="mt-1  text-sm"> Categories</span>
        </a>

        {/* Cart Button */}
        <Link href="/cart">
          <a className="flex flex-col hover:text-main-blue cursor-pointer transition duration-200 ease-in">
            <ShoppingCartIcon className="h-5" />
            <span className="mt-1  text-sm"> Cart</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
