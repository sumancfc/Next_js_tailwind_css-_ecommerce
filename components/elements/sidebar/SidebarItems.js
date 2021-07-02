import SidebarItem from "./SidebarItem"

export default function SidebarItems({ navItems }) {
    return (
        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {navItems.map((navItem, i) => (
                <SidebarItem
                    key={i}
                    title={navItem.title}
                    url={`${navItem.url}`}
                    icon={navItem.icon}
                />
            ))}
        </ul>
    )
}
