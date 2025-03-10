import getUsers from "@/data/users"
import Sidebar from "../_components/sidebar/Sidebar"
import UserList from "./_components/UserList"

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
    const users = await getUsers()
    return (
        <Sidebar>
            <div className="h-full">
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}