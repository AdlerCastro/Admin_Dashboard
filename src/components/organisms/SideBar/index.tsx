import Folder from '@/components/molecules/Folder'
import React from 'react'

export default function SideBar() {
    return (
        <aside className=' bg-zinc-100 dark:bg-zinc-800 flex flex-col px-6 py-4 rounded-e-lg overflow-auto'>
            <h1 className='font-bold text-xl'>Dashboard</h1>
            <Folder />
        </aside>
    )
}