import Folder from '@/components/molecules/Folder'
import Profile from '@/components/molecules/Profile'
import React from 'react'

export default function SideBar() {
    return (
        <aside className='w-56 bg-zinc-50 dark:bg-zinc-800 flex flex-col px-6 py-4 rounded-e-lg overflow-auto gap-4'>
            <h1 className='font-bold text-2xl'>Dashboard</h1>
            <Profile />
            <Folder />
        </aside>
    )
}