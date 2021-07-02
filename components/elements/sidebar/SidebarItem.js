import Link from "next/link"
import { useRouter } from "next/router"
import DynamicIcons from "../dynamicIcons"

export default function SidebarItem({ title, url, icon }) {
    const router = useRouter()

    return (
        <li className="items-center">
            <Link href={`${url}`}>
                <a
                    className={
                        "text-sm uppercase py-3 font-semibold flex items-center " +
                        (router.pathname.indexOf(`${url}`) !== -1
                            ? "text-main-blue hover:text-main-red"
                            : "text-black hover:text-main-blue")
                    }
                >
                    <DynamicIcons icon={icon} />
                    {title}
                </a>
            </Link>
        </li>
    )
}
