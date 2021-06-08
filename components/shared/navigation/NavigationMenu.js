import { MenuAlt1Icon } from "@heroicons/react/outline"
import menuData from "@/data/menu.json"
import Menu from "@/components/elements/menu/Menu"

export default function NavigationMenu({ id, dataSticky }) {
  return (
    <div className="bg-main-red" id={id} data-sticky={dataSticky}>
      <div className="container">
        <div className="grid grid-cols-5 gap-5 h-12">
          {/* Shop By Category */}
          <div className="col-span-1">
            <div className="relative h-full flex items-center shop-category">
              <a
                href="#"
                className="flex items-center text-white font-medium  tracking-wider capitalize"
              >
                <MenuAlt1Icon className="h-6 mr-3 text-white text-2xl" />
                Shop By Category
              </a>

              {/* Category Menu Here */}
              <div>
                <Menu
                  className="absolute hidden w-max top-full left-0 bg-main-gray z-40  transition-all ease-in-out duration-300 delay-200 category-menu"
                  data={menuData.product_categories}
                />
              </div>
            </div>
          </div>
          {/* Right Side Menu */}
          <div className="col-span-4">
            <Menu
              className="relative h-full flex items-center justify-start px-0 md:px-5 primary-menu"
              data={menuData.menuPrimary.menu_1}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
