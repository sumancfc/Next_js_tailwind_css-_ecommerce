import { useState } from "react"
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline"
import Logo from "@/components/elements/logo"
import SidebarItems from "@/components/elements/sidebar/SidebarItems"

const navItems = [
    {
        title: "Dashboard",
        url: "/account/dashboard",
        icon: "CollectionIcon",
    },
    {
        title: "Address",
        url: "/account/address",
        icon: "LocationMarkerIcon",
    },
    {
        title: "Account Details",
        url: "/account/account-details",
        icon: "UserCircleIcon",
    },
    {
        title: "Change Password",
        url: "/account/change-password",
        icon: "EyeIcon",
    },
    {
        title: "Orders",
        url: "/account/orders",
        icon: "TemplateIcon",
    },
    {
        title: "Logout",
        icon: "LogoutIcon",
    },
]

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = useState("hidden")

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <MenuAlt1Icon className="h-6 w-6" />
                    </button>
                    {/* Brand */}
                    <Logo className="!w-9/12 md:!w-full" />

                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-indigo-200">
                            <div className="flex flex-wrap">
                                <Logo className="!w-9/12" />

                                <div className="w-3/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <XIcon className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <SidebarItems navItems={navItems} />
                    </div>
                </div>
            </nav>
        </>
    )
}
