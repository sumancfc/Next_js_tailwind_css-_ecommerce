import { Title } from "../elements/title/Title"
import Sidebar from "../pages/userDashboard/Sidebar"

export default function UserDashboard({ title, children }) {
    return (
        <>
            <Sidebar />
            <div className="relative md:ml-64 px-10">
                <div className="my-5">
                    <Title title={title} />
                </div>
                <main className="bg-white p-6 shadow-md rounded-md">{children}</main>
            </div>
        </>
    )
}
