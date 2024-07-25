import Button from '@/components/atoms/Button'
import Folder from '@/components/molecules/Folder'
import React from 'react'

export default function SideBar() {
    return (
        <aside className='bg-zinc-100 dark:bg-zinc-800 flex flex-1 flex-col gap-3 p-4'>
            <h1 className='font-bold text-xl'>Dashboard</h1>
            <Folder />
        </aside>
    )
}