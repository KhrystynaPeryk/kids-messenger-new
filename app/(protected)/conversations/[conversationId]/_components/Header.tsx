"use client"

import AvatarWithStatus from "@/app/(protected)/_components/AvatarWithStatus"
import useOtherUser from "@/hooks/use-other-user"
import { Conversation, User } from "@prisma/client"
import Link from "next/link"
import { useMemo, useState } from "react"
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2"
import ProfileDrawer from "./ProfileDrawer"

interface HeaderProps {
    conversation: Conversation & {
        users: User[]
    }
}

const Header = ({conversation}: HeaderProps) => {

    const otherUser = useOtherUser(conversation)

    const [drawerOpen, setDrawerOpen] = useState(false)

    const statusText = useMemo(() => {
        // if we are in a group we are not going to show individual online/offline status, instead we show a number of members
        if (conversation.isGroup) {
            return `${conversation.users.length} members`
        }

        return 'Active'
    }, [conversation])

    return (
        <>
            <ProfileDrawer 
                data={conversation}
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            />
            <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
                <div className="flex gap-3 items-center">
                    <Link href="/conversations" className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer">
                        <HiChevronLeft size={32} />
                    </Link>
                    <AvatarWithStatus user={otherUser} />
                    <div className="flex flex-col">
                        <div>
                            {conversation.name || otherUser.name}
                        </div>
                        <div className="text-sm font-light text-neutral-500">
                            {statusText}
                        </div>
                    </div>
                </div>
                <HiEllipsisHorizontal size={32} onClick={() => setDrawerOpen(true)} className="text-sky-500 cursor-pointer hover:text-sky-600 transition"/>
            </div>
        </>
    )
}

export default Header