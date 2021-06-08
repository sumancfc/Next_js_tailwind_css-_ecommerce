import { useState } from "react"

import PanelMenu from "../panel/PanelMenu"
import PanelCategory from "../panel/PanelCategory"
import menuData from "@/data/menu.json"
import NavigationIcon from "./NavigationIcon"

export default function NavigationMobile() {
  const [navMenu, setNavMenu] = useState({ right: "-100%" })
  const [navCategory, setNavCategory] = useState({ right: "-100%" })

  const openMenu = () => {
    setNavMenu({ right: "0px" })
  }

  const openCategoryMenu = () => {
    setNavCategory({ right: "0px" })
  }

  const closeNav = () => {
    setNavMenu({ right: "-100%" })
    setNavCategory({ right: "-100%" })
  }

  const openMblNav = (e) => {
    if (e.target.classList.contains("icon")) {
      // console.log(e.target.classList.contains("icon"))
      return
    }
    if (e.target.nextElementSibling.classList.contains("!block")) {
      e.target.nextElementSibling.classList.remove("!block")
    } else {
      document.querySelectorAll(".mobile-sub-menu").forEach(function (value) {
        value.classList.remove("!block")
      })
      e.target.nextElementSibling.classList.add("!block")
    }
  }

  return (
    <div className="md:hidden">
      <PanelMenu
        data={menuData.menuPrimary.menu_1}
        style={navMenu}
        openMblNav={openMblNav}
        closeNav={closeNav}
      />

      <PanelCategory
        data={menuData.product_categories}
        style={navCategory}
        openMblNav={openMblNav}
        closeNav={closeNav}
      />

      <NavigationIcon openMenu={openMenu} openCategoryMenu={openCategoryMenu} />
    </div>
  )
}
